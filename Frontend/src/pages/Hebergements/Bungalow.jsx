import FicheBungalow from "../../components/hebergements/FicheBungalow"

export default function Bungalow() {
    return (
        <FicheBungalow
            type="Bungalow"
            capacite_min="2"
            capacite_max="6"
            chambre_min="2"
            chambre_max="3"
            surface_min="30"
            surface_max="50"
            prix_nuit="99"
            description={
                <div className="space-y-6 text-gray-700 leading-relaxed">
                    <p className="text-lg font-medium text-gray-900">
                        Découvrez notre gamme de bungalows tout confort et offrez-vous une parenthèse conviviale où simplicité rime avec évasion. 
                        Pensés pour accueillir toute la tribu, nos bungalows offrent le parfait équilibre entre l'esprit authentique et chaleureux du camping et la fonctionnalité d'un hébergement moderne et entièrement équipé.
                    </p>
                    
                    <p>
                        Que vous veniez en couple pour un week-end de déconnexion ou en famille pour des vacances dynamiques et ressourçantes, 
                        chaque aménagement a été conçu pour simplifier votre quotidien et vous permettre de partager de précieux moments avec vos proches.
                    </p>

                    <p>
                        Installés sur de belles parcelles arborées à proximité des activités, nos bungalows vous garantissent une ambiance douce et animée, idéale pour créer des souvenirs inoubliables au plus près de la nature.
                    </p>
                </div>
            }
        />
    )
}