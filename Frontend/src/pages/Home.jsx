import CardHebergement from "../components/hebergements/CardHebergement";
import CardServices from "../components/Home/CardServices";

export default function Home() {
  return (
    <>
      <div className="flex justify-between mt-5 mb-3 mx-5">
        <h2 className="text-xl font-bold">Nos services</h2>
        <a
          href="#"
          className="mt-auto self-end inline-flex items-center text-black font-semibold"
        >
          Tous nos services
          <svg
            className="w-4 h-4 ms-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"
            />
          </svg>
        </a>
      </div>

      {/* SERVICES - DESKTOP*/}
      <div className="hidden lg:flex flex-col">
        <div className="flex gap-5 mx-5">
          <CardServices image="https://images.unsplash.com/photo-1665574522536-06ad804e6250?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" nom="Piscine" description="Plongez dans un espace de détente pensé pour tous les âges. Entre baignades rafraîchissantes et moments de repos au soleil, la piscine devient le cœur des vacances." />
          <CardServices image="https://images.pexels.com/photos/34172634/pexels-photo-34172634.jpeg" nom="Restauration" description="Savourez une cuisine simple et généreuse dans une ambiance conviviale. Des plats faits pour partager, après une journée bien remplie au grand air." />
        </div>
        <br />
        <div className="mx-5">
          <CardServices image="https://images.pexels.com/photos/30133760/pexels-photo-30133760.jpeg" nom="Nature" description="Partez à la découverte des chemins autour du camping, entre forêts, paysages apaisants et rencontres sauvages. Une parenthèse nature à portée de pas." />
        </div>
      </div>

      {/* SERVICES - MOBILE*/}
      <div className="flex flex-col lg:hidden">
        <div className="flex flex-col gap-5 mx-5">
          <CardServices image="https://images.unsplash.com/photo-1665574522536-06ad804e6250?q=80&w=2189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" nom="Piscine" description="" />
          <CardServices image="https://images.pexels.com/photos/34172634/pexels-photo-34172634.jpeg" nom="Restauration" description="" />
          <CardServices image="https://images.pexels.com/photos/30133760/pexels-photo-30133760.jpeg" nom="Nature" description="" />
        </div>
      </div>

      <h2>Nos hebergements</h2>

      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CardHebergement
          nom="Chalet Forêt"
          type="chalet"
          capacite={4}
          prix_nuit={120}
          description="Un magnifique chalet au cœur de la nature"
          onReserver={() => alert("Réservation !")}
        />
      </div>
    </>
  );
}
