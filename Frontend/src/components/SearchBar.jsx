import { useState, useEffect, useRef } from "react"

export default function SearchBar({ onSearch }) {
  const [voyageurs, setVoyageurs] = useState({ adultes: 1, enfants: 0, animaux: 0 })
  const [showVoyageurs, setShowVoyageurs] = useState(false)
  const voyageursRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (voyageursRef.current && !voyageursRef.current.contains(e.target)) {
        setShowVoyageurs(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const Counter = ({ label, value, onChange }) => (
    <div className="flex items-center justify-between gap-4 py-2">
      <p className="text-sm font-medium text-brand-terre">{label}</p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(0, value - 1))}
          className="w-7 h-7 rounded-full border-2 border-brand-foret text-brand-foret font-bold hover:bg-brand-foret hover:text-white transition flex items-center justify-center text-lg leading-none"
        >−</button>
        <span className="w-4 text-center text-sm font-medium text-brand-terre">{value}</span>
        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="w-7 h-7 rounded-full border-2 border-brand-foret text-brand-foret font-bold hover:bg-brand-foret hover:text-white transition flex items-center justify-center text-lg leading-none"
        >+</button>
      </div>
    </div>
  )

  const labelVoyageurs = `${voyageurs.adultes} adulte${voyageurs.adultes > 1 ? 's' : ''}${voyageurs.enfants > 0 ? `, ${voyageurs.enfants} enfant${voyageurs.enfants > 1 ? 's' : ''}` : ''}${voyageurs.animaux > 0 ? `, ${voyageurs.animaux} animal${voyageurs.animaux > 1 ? 'aux' : ''}` : ''}`

  const inputClass = "flex flex-col gap-2 bg-white rounded-lg px-4 py-3 min-w-[160px]"
  const labelClass = "text-xs text-gray-400 font-medium flex items-center gap-1"
  const selectClass = "outline-none text-sm bg-transparent text-brand-terre cursor-pointer appearance-none w-full"
  const inputDateClass = "outline-none text-sm text-brand-terre w-full"

  const CalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  )

  const ChevronIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  )

  return (
    <div className="lg:h-96 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1594420467533-bb56919ba856?q=80&w=1074&auto=format&fit=crop')] bg-cover bg-center">

      {/* DESKTOP */}
      <div className="hidden lg:flex justify-center gap-5 bg-white/20 backdrop-blur-sm rounded-2xl p-7 shadow-xl">

        {/* Date arrivée */}
        <div className={inputClass}>
          <label className={labelClass}><CalIcon />Du ?</label>
          <input type="date" className={inputDateClass} />
        </div>

        {/* Date départ */}
        <div className={inputClass}>
          <label className={labelClass}><CalIcon />Jusqu'au ?</label>
          <input type="date" className={inputDateClass} />
        </div>

        {/* Voyageurs */}
        <div ref={voyageursRef} className={`${inputClass} relative`}>
          <label className={labelClass}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Voyageurs
          </label>
          <button
            type="button"
            onClick={() => setShowVoyageurs(!showVoyageurs)}
            className="text-sm text-brand-terre text-left flex items-center justify-between w-full"
          >
            <span className="truncate max-w-[160px]">{labelVoyageurs}</span>
            <ChevronIcon />
          </button>

          {showVoyageurs && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl p-4 z-50 w-64 border border-gray-100">
              <Counter label="Adultes" value={voyageurs.adultes} onChange={(v) => setVoyageurs({ ...voyageurs, adultes: Math.max(1, v) })} />
              <div className="border-t border-gray-100" />
              <Counter label="Enfants" value={voyageurs.enfants} onChange={(v) => setVoyageurs({ ...voyageurs, enfants: v })} />
              <div className="border-t border-gray-100" />
              <Counter label="Animaux" value={voyageurs.animaux} onChange={(v) => setVoyageurs({ ...voyageurs, animaux: v })} />
              <button
                type="button"
                onClick={() => setShowVoyageurs(false)}
                className="mt-3 w-full bg-brand-foret text-white text-sm py-2 rounded-lg hover:bg-brand-soleil transition"
              >
                Confirmer
              </button>
            </div>
          )}
        </div>

        {/* Type hébergement */}
        <div className={inputClass}>
          <label className={labelClass}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Hébergement
          </label>
          <div className="relative flex items-center">
            <select className={selectClass}>
              <option value="">Tous les types</option>
              <option value="chalet">Bungalow</option>
              <option value="cabane">Chalet</option>
              <option value="tente">Tente</option>
              <option value="bungalow">Camping Car</option>
            </select>
            <span className="absolute right-0 pointer-events-none"><ChevronIcon /></span>
          </div>
        </div>


        {/* Bouton */}
        <button
          onClick={onSearch}
          className="self-end text-white px-8 py-3 rounded-lg font-medium bg-brand-foret hover:bg-brand-soleil transition cursor-pointer text-sm"
        >
          Rechercher
        </button>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col w-90 justify-center bg-white/20 backdrop-blur-md gap-4 rounded-xl p-5 m-10 shadow-lg lg:hidden">

        {/* Date arrivée */}
        <div className={inputClass}>
          <label className={labelClass}><CalIcon />Du ?</label>
          <input type="date" className={inputDateClass} />
        </div>

        {/* Date départ */}
        <div className={inputClass}>
          <label className={labelClass}><CalIcon />Jusqu'au ?</label>
          <input type="date" className={inputDateClass} />
        </div>

        {/* Voyageurs mobile */}
        <div ref={voyageursRef} className={`${inputClass} relative`}>
          <label className={labelClass}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            </svg>
            Voyageurs
          </label>
          <button
            type="button"
            onClick={() => setShowVoyageurs(!showVoyageurs)}
            className="text-sm text-brand-terre text-left flex items-center justify-between w-full"
          >
            <span className="truncate">{labelVoyageurs}</span>
            <ChevronIcon />
          </button>

          {showVoyageurs && (
            <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl p-4 z-50 w-64 border border-gray-100">
              <Counter label="Adulte" value={voyageurs.adultes} onChange={(v) => setVoyageurs({ ...voyageurs, adultes: Math.max(1, v) })} />
              <div className="border-t border-gray-100" />
              <Counter label="Enfants" value={voyageurs.enfants} onChange={(v) => setVoyageurs({ ...voyageurs, enfants: v })} />
              <div className="border-t border-gray-100" />
              <Counter label="Animaux" value={voyageurs.animaux} onChange={(v) => setVoyageurs({ ...voyageurs, animaux: v })} />
              <button type="button" onClick={() => setShowVoyageurs(false)} className="mt-3 w-full bg-brand-foret text-white text-sm py-2 rounded-lg hover:bg-brand-soleil transition">
                Confirmer
              </button>
            </div>
          )}
        </div>

        {/* Type hébergement */}
        <div className={inputClass}>
          <label className={labelClass}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Hébergement
          </label>
          <div className="relative flex items-center">
            <select className={selectClass}>
              <option value="">Tous les types</option>
              <option value="chalet">Chalet</option>
              <option value="cabane">Cabane</option>
              <option value="tente">Tente</option>
              <option value="bungalow">Bungalow</option>
            </select>
            <span className="absolute right-0 pointer-events-none"><ChevronIcon /></span>
          </div>
        </div>

        {/* Bouton */}
        <button
          onClick={onSearch}
          className="self-center text-white px-6 py-2 rounded-md font-medium bg-brand-foret hover:bg-brand-soleil transition cursor-pointer"
        >
          Rechercher
        </button>
      </div>
    </div>
  )
}