import CardHebergement from "../components/hebergements/CardHebergement"



export default function Home() {
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <CardHebergement
                nom="Chalet Forêt"
                type="chalet"
                capacite={4}
                prix_nuit={120}
                description="Un magnifique chalet au cœur de la nature"
                onReserver={() => alert('Réservation !')}
            />
        </div>

    )
}
