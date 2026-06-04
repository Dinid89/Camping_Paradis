export default function Badge({ statut }) {
    const styles = {
        en_attente: 'bg-brand-soleil text-white',
        confirmée: 'bg-brand-foret text-white',
        annulée: 'bg-red-500 text-white'
    }

    return (
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[statut]}`}>
            {statut}
        </span>
    )
}