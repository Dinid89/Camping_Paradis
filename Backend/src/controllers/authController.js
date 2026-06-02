const bcrypt = require('bcrypt')
const db = require('../config/db')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    // recupere nom, prenom, mail et mdp a l'inscription
    const { nom, prenom, email, password } = req.body
    console.log(nom, prenom, email, password)

    // securite : hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10)

    // insertion dans la base
    const sql = 'INSERT INTO users (nom, prenom, email, password) VALUES (?, ?, ?, ?)'
    db.query(sql, [nom, prenom, email, hashedPassword], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur serveur' })
        }
        res.status(201).json({ message: 'Utilisateur créé avec succès' })
    })
}

const login = async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)

    // chercher l'utilisateur dans la base
    const sql = 'SELECT * FROM users WHERE email = ?'
    db.query(sql, [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur Serveur' })
        }
        if (result.length === 0) {
            return res.status(401).json({ message: 'Aucun utilisateur trouvé' })
        }

        // comparer le mot de passe envoyé avec le hash en base
        const validPassword = await bcrypt.compare(password, result[0].password)
        if (!validPassword) {
            return res.status(401).json({ message: 'Mot de passe incorrect' })
        }

        const token = jwt.sign(
            { id: result[0].id, role: result[0].role},
            process.env.JWT_SECRET,
            { expiresIn: '24h'}
        )

        res.status(200).json({ message: 'Connexion réussie', token })
    })
}

module.exports = { register, login }