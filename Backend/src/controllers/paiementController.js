const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const db = require("../config/db")
const transporter = require('../config/mailer')

const createCheckoutSession = async (req, res) => {
    const { reservation_id } = req.body

    const sql = `
        SELECT r.*, h.prix_nuit, h.nom as hebergement_nom 
        FROM reservations r 
        JOIN hebergements h ON r.hebergement_id = h.id 
        WHERE r.id = ?
    `

    db.query(sql, [reservation_id], async (err, result) => {
        if (err) return res.status(500).json({ message: "Erreur serveur" })
        if (result.length === 0) return res.status(404).json({ message: "Réservation introuvable" })

        const reservation = result[0]
        const dateDebut = new Date(reservation.date_debut)
        const dateFin = new Date(reservation.date_fin)
        const nbNuits = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24))
        const montant = Math.round(reservation.prix_nuit * nbNuits * 100)

        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [{
                    price_data: {
                        currency: "eur",
                        product_data: {
                            name: `Réservation - ${reservation.hebergement_nom}`,
                            description: `${nbNuits} nuit(s) du ${reservation.date_debut} au ${reservation.date_fin}`,
                        },
                        unit_amount: montant,
                    },
                    quantity: 1,
                }],
                mode: "payment",
                metadata: { reservation_id: String(reservation.id) },
                success_url: "http://localhost:5173/paiement/success",
                cancel_url: "http://localhost:5173/paiement/cancel",
            })
            res.status(200).json({ url: session.url })
        } catch (err) {
            console.error("Erreur Stripe:", err)
            res.status(500).json({ message: "Erreur lors du paiement" })
        }
    })
}

const webhookStripe = (req, res) => {
    const sig = req.headers["stripe-signature"]
    let event

    try {
        event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
    } catch (err) {
        console.error("Webhook erreur :", err.message)
        return res.status(400).json({ message: `Webhook Error: ${err.message}` })
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object
        console.log("Paiement reçu :", session.id)

        const reservationId = session.metadata?.reservation_id
        if (reservationId) {
            db.query(
                "UPDATE reservations SET statut = ? WHERE id = ?",
                ["confirmée", reservationId],
                (err) => {
                    if (err) {
                        console.error("Erreur mise à jour réservation :", err)
                    } else {
                        console.log("Réservation confirmée :", reservationId)
                        transporter.sendMail({
                            from: `"Camping Paradis" <${process.env.MAIL_USER}>`,
                            to: session.customer_details?.email,
                            subject: 'Camping Paradis : Confirmation de votre réservation',
                            html: `
                                <h1>Votre réservation est confirmée !</h1>
                                <p>Bonjour,</p>
                                <p>Votre paiement a bien été reçu.</p>
                                <p><strong>Numéro de réservation :</strong> ${reservationId}</p>
                                <p>Merci et à bientôt au Camping Paradis !</p>
                            `
                        })
                    }
                }
            )
        }
    }

    res.status(200).json({ received: true })
}

module.exports = { createCheckoutSession, webhookStripe }