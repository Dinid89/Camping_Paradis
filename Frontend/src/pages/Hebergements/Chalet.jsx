import FicheHebergement from "../../components/hebergements/FicheChalet"

export default function Chalet() {
    return (
        <FicheHebergement
            type="Chalets"
            capacite_min="4"
            capacite_max="8"
            chambre_min="2"
            chambre_max="4"
            surface_min="60"
            surface_max="100"
            prix_nuit="350"
            description={
    <div className="space-y-6 text-gray-700 leading-relaxed">
        <p className="text-lg font-medium text-gray-900">
            Découvrez notre collection de chalets d'exception et offrez-vous une immersion exclusive où le luxe discret rime avec évasion. 
            Conçus avec des matériaux nobles et une architecture raffinée, nos chalets réinventent l'hôtellerie de plein air en associant l'esprit authentique de la nature aux prestations haut de gamme d'un lodge de standing.
        </p>
        
        <p>
            Que vous recherchiez l'intimité d'un écrin secret pour un séjour romantique ou l'excellence d'un espace chaleureux pour vos vacances en famille, 
            chaque détail a été pensé pour vous offrir une expérience mémorable et un confort absolu.
        </p>

        <p>
            Idéalement préservés des regards et nichés au cœur de vastes parcelles arborées, nos chalets d'architecte vous garantissent une sérénité totale, un calme absolu et une déconnexion prestigieuse.
        </p>
    </div>
}
        />
    )
}