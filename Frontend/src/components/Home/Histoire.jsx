import Logo from "../../assets/logos/logo.png"

export default function Histoire() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Colonne Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
          <img 
            src={Logo} 
            alt="Logo Camping Paradis" 
            className="w-200 sm:w-200 md:w-200 lg:w-full max-w-md h-auto object-contain animate-fade-in"
          />
        </div>
        
        {/* Colonne Histoire */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-foret tracking-tight leading-tight">
            L'Histoire du Domaine : <br className="hidden sm:inline" />
            <span className="text-brand-soleil">Une aventure de famille depuis 1974</span>
          </h2>
          
          <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed font-light">
            <p>
              Tout commence au milieu des années 70, lorsque Jean et Marie tombent
              amoureux d'une parcelle sauvage bordée de pins maritimes, à quelques
              pas de la mer. Armés d'une simple intuition — offrir un havre de
              paix aux amoureux de la liberté —, ils défrichent la terre pour y
              accueillir les premières tentes.
            </p>
            
            <p>
              Au fil des décennies, le bouche-à-oreille fait son œuvre et le camping 
              devient le point de ralliement rituel de générations de familles séduites 
              par la douceur du Sud. C'est l'époque des caravanes rétro, des tournois de 
              pétanque et des grandes tablées conviviales à l'ombre des arbres.
            </p>

            <p className="pt-2 font-medium text-gray-700">
              Aujourd'hui, c'est la troisième génération qui fait vivre ce petit
              coin de paradis. Du bungalow fonctionnel pensé pour les tribus
              jusqu'au chalet d'exception moderne, le Domaine a su évoluer sans
              jamais perdre son âme. Cinquante ans après la première nuit à la
              belle étoile, notre promesse reste inchangée : vous offrir une
              déconnexion totale en pleine nature.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}