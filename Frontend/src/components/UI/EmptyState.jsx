//Si aucune liste trouvable, affiche message d'erreur ou non trouvé

export default function EmptyState({ icon, title, message, onAction, actionLabel }) {
    return (
        <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div className="text-6xl">{icon}</div>
            <h3 className="text-xl font-medium text-brand-terre">{title}</h3>
            <p className="text-sm text-gray-400 text-center max-w-xs">{message}</p>

            {onAction && (
                <button
                    onClick={onAction}
                    className="mt-3 bg-brand-foret text-white px-5 py-2 rounded-lg text-sm hover:bg-brand-soleil transition"
                >
                    {actionLabel}
                </button>
            )}
        </div>
    )
}