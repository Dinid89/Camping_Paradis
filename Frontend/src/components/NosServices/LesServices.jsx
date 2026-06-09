import {
  Wifi,
  Tv,
  Car,
  Coffee,
  Snowflake,
  Waves,
  ToyBrick,
  Trophy,
  Gamepad2,
  HeartPulse,
  Bike,
  WashingMachine,
  Toilet,
  Utensils,
  ShoppingBasket,
  PartyPopper,
  Music,
} from "lucide-react";

import services from "../../data/services.json";

export default function LesServices() {
  const amenities = [
    { icon: <Wifi size={18} />, label: "Wi-Fi" },
    { icon: <Tv size={18} />, label: "Télévision" },
    { icon: <Waves size={18} />, label: "Lits doubles" },
    { icon: <Waves size={18} />, label: "Lits simples" },
    { icon: <Waves size={18} />, label: "Salle de bain" },
    { icon: <Waves size={18} />, label: "Location de literie" },
    { icon: <Car size={18} />, label: "Parking privé" },
    { icon: <Coffee size={18} />, label: "Cuisine équipée" },
    { icon: <Snowflake size={18} />, label: "Climatisation" },
    { icon: <Waves size={18} />, label: "Jacuzzi & SPA" },
    { icon: <Waves size={18} />, label: "Location de literie" },
    { icon: <Waves size={18} />, label: "Borne de charge pour véhicules électriques" },


  ];

  return (
    <div className="w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-xl mt-2">
      {/* Galerie */}
      <div className="flex flex-col p-5 lg:flex-row gap-1 w-full">
        <img
          src={services.image_1}
          alt="image piscine"
          className="flex-1 w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] object-cover"
        />

        <img
          src={services.image_2}
          alt="image bac a sable"
          className="flex-1 w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] object-cover"
        />
      </div>

      <div className="p-8">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Nos Services
          </h2>
        </div>

        {/* Infos rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Waves className="mx-auto mb-2" />
            <p className="font-semibold">Parc Aquatique</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <ToyBrick className="mx-auto mb-2"/>
            <p className="font-semibold">Aire de jeux</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Trophy className="mx-auto mb-2" />
            <p className="font-semibold">Terrain de sport</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Gamepad2 className="mx-auto mb-2"/>
            <p className="font-semibold">Salle de jeux</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <HeartPulse className="mx-auto mb-2" />
            <p className="font-semibold">Espace Bien-être</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Bike className="mx-auto mb-2"/>
            <p className="font-semibold">Location de vélos</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <WashingMachine className="mx-auto mb-2"/>
            <p className="font-semibold">Laverie</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Toilet className="mx-auto mb-2"/>
            <p className="font-semibold">Sanitaires</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Utensils className="mx-auto mb-2"/>
            <p className="font-semibold">Restaurant</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <ShoppingBasket className="mx-auto mb-2"/>
            <p className="font-semibold">Epicerie</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <PartyPopper className="mx-auto mb-2"/>
            <p className="font-semibold">Animations</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Music className="mx-auto mb-2"/>
            <p className="font-semibold">Soirées animées</p>
          </div>
        </div>

        {/* Equipements */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Nos Équipements *
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {amenities.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl"
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Points forts */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Points forts
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-xl">Extérieur arboré</div>

            <div className="bg-green-50 p-4 rounded-xl">
              À 500 m de la plage
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              Chemins de randonnées
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              Commerces à proximités
            </div>
          </div>
        </section>

        {/* Infos pratiques */}
        <section className="mt-10 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Informations pratiques
          </h2>

          <ul className="grid md:grid-cols-2 gap-4 text-gray-600">
            <li>Départ : à partir de 10h00</li>
            <li>Arrivée : à partir de 16h00</li>
            <li>Linge de lit en option</li>
            <li>Petit déjeuner sur réservation</li>
            <li>Animaux acceptés</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
