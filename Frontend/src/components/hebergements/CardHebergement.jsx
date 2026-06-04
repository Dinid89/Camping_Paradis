export default function CardHebergement({
  nom,
  type,
  capacite,
  prix_nuit,
  image,
  description,
  onReserver
}) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
      {/* Image / placeholder */}
      <div className="relative bg-brand-foret h-44 flex items-center justify-center">
        {image ? (
          <img src={image} alt={nom} className="w-full h-full object-cover" />
        ) : (
          <span className="text-brand-mousse text-6xl opacity-40">🏕</span>
        )}
        <span className="absolute top-3 left-3 bg-brand-soleil text-white text-xs font-medium px-3 py-1 rounded-full">
          {type}
        </span>
        <span className="absolute top-3 right-3 bg-black/30 text-white text-xs font-medium px-3 py-1 rounded-full">
          {capacite} pers.
        </span>
      </div>

      {/* Contenu */}
      <div className="p-4">
        <h3 className="font-medium text-lg text-brand-terre mb-1">{nom}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-medium text-brand-soleil">
              {prix_nuit} €
            </span>
            <span className="text-sm text-gray-400"> / nuit</span>
          </div>
          <button
            onClick={onReserver}
            className="bg-brand-foret text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-olive transition"
          >
            Réserver
          </button>
        </div>
      </div>
    </div>
  );
}
