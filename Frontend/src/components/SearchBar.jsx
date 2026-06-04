export default function SearchBar({ onSearch }) {
  return (
    <div className="lg:h-80 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1594420467533-bb56919ba856?q=80&w=1074&auto=format&fit=crop')] bg-cover bg-center">
      <div className="hidden lg:flex justify-center bg-brand-soleil gap-4 rounded-xl p-5 shadow-lg">
        {/* Date arrivée */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">Du ?</label>
          <input
            type="date"
            className="outline-none text-sm text-brand-terre"
          />
        </div>

        {/* Date départ */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">
            Jusqu'au ?
          </label>
          <input
            type="date"
            className="outline-none text-sm text-brand-terre"
          />
        </div>

        {/* Nombre de personnes */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[130px]">
          <label className="text-xs text-gray-400 font-medium">Voyageurs</label>
          <select className="outline-none text-sm bg-transparent text-brand-terre">
            <option value="">Nb personnes</option>
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
            <option value="5">5+ personnes</option>
          </select>
        </div>

        {/* Type hébergement */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">
            Hébergement
          </label>
          <select className="outline-none text-sm bg-transparent text-brand-terre">
            <option value="">Tous les types</option>
            <option value="chalet">Chalet</option>
            <option value="cabane">Cabane</option>
            <option value="tente">Tente</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </div>

        {/* Bouton */}
        <button
          onClick={onSearch}
          className="self-end border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-brand-foret hover:border-brand-foret transition"
        >
          Rechercher
        </button>
      </div>

      <div className="flex flex-col w-90 justify-center bg-brand-soleil gap-4 rounded-xl p-5 m-10 shadow-lg lg:hidden">
        {/* Date arrivée */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">Du ?</label>
          <input
            type="date"
            className="outline-none text-sm text-brand-terre"
          />
        </div>

        {/* Date départ */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">
            Jusqu'au ?
          </label>
          <input
            type="date"
            className="outline-none text-sm text-brand-terre"
          />
        </div>

        {/* Nombre de personnes */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[130px]">
          <label className="text-xs text-gray-400 font-medium">Voyageurs</label>
          <select className="outline-none text-sm bg-transparent text-brand-terre">
            <option value="">Nb personnes</option>
            <option value="1">1 personne</option>
            <option value="2">2 personnes</option>
            <option value="3">3 personnes</option>
            <option value="4">4 personnes</option>
            <option value="5">5+ personnes</option>
          </select>
        </div>

        {/* Type hébergement */}
        <div className="flex flex-col gap-1 bg-white rounded-md px-3 py-2 min-w-[140px]">
          <label className="text-xs text-gray-400 font-medium">
            Hébergement
          </label>
          <select className="outline-none text-sm bg-transparent text-brand-terre">
            <option value="">Tous les types</option>
            <option value="chalet">Chalet</option>
            <option value="cabane">Cabane</option>
            <option value="tente">Tente</option>
            <option value="bungalow">Bungalow</option>
          </select>
        </div>

        {/* Bouton */}
        <button
          onClick={onSearch}
          className="self-center border-2 border-white text-white px-6 py-2 rounded-md font-medium hover:bg-brand-foret hover:border-brand-foret transition"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}
