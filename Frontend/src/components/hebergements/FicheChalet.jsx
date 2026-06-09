import {
  Users,
  Bed,
  Bath,
  Wifi,
  Tv,
  Car,
  Coffee,
  Snowflake,
  Waves,
  Flame,
  Sofa,
  Zap
} from "lucide-react";

import chalets from '../../data/chalets.json'

export default function HebergementCard({
  type,
  capacite_min,
  capacite_max,
  surface_min,
  surface_max,
  chambre_min,
  chambre_max,
  description,
  prix_nuit,
  image_1,
  image_2,
  image_3,
  image_4,
  image_5
}) {
  const amenities = [
    { icon: <Wifi size={18} />, label: "Wi-Fi" },
    { icon: <Tv size={18} />, label: "Télévision 4K OLED" },
    { icon: <Car size={18} />, label: "Parking privé" },
    { icon: <Zap size={18} />, label: "Borne de recharge pour voiture électrique" },
    { icon: <Coffee size={18} />, label: "Cuisine haut de gamme équipée" },
    { icon: <Snowflake size={18} />, label: "Climatisation" },
    { icon: <Waves size={18} />, label: "Jacuzzi & Spa privatif" },
    { icon: <Flame size={18} />, label: "Cuisine d'été / Barbecue" },
    { icon: <Sofa size={18} />, label: "Mobilier de jardin Prenium" },
  ];

  return (
    <div className="w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
      {/* Galerie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <img
          src={chalets.image_1}
          alt=" image logement"
          className="h-[400px] w-full object-cover rounded-2xl"
        />

        <div className="grid grid-cols-2 gap-2">
          <img
            src={chalets.image_2}
            alt="image logement"
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src={chalets.image_3}
            alt="image logement"
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src={chalets.image_4}
            alt="image logement"
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src={chalets.image_5}
            alt="image logement"
            className="h-[195px] w-full object-cover rounded-2xl"
          />
        </div>
      </div>

      <div className="p-8">
        {/* En-tête */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <span className="bg-brand-soleil/20 text-brand-foret px-3 py-1 rounded-full text-sm font-medium">
              {type}
            </span>

            <p className="text-gray-500 text-xl mt-2">
              Un logement spacieux et luxueux au cœur de la nature
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">À partir de</p>

            <p className="text-4xl font-bold text-brand-soleil">{prix_nuit} €</p>

            <p className="text-sm text-gray-500">/ nuit</p>
          </div>
        </div>

        {/* Infos rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Users className="mx-auto mb-2" />
            <p className="font-semibold">de {capacite_min} à {capacite_max} personnes</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Bed className="mx-auto mb-2" />
            <p className="font-semibold">de {chambre_min} à {chambre_max} chambres</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Bath className="mx-auto mb-2" />
            <p className="font-semibold">2 salles d'eau</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <span className="text-2xl">📐</span>
            <p className="font-semibold">de {surface_min} à {surface_max} m²</p>
          </div>
        </div>

        {/* Description */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Description
          </h2>

          <p className="text-gray-600 leading-8">{description}</p>
        </section>

        {/* Equipements */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Équipements
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
              Accès à la piscine du camping
            </div>

            <div className="bg-green-50 p-4 rounded-xl">
              Grande terrasse couverte
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
              <li>Linge de lit inclus</li>
              <li>Petit déjeuner inclus</li>
              <li>Animaux acceptés</li>
            </ul>
        </section>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-brand-soleil text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition">
            Voir tous nos {type} disponibles
          </button>
        </div>
      </div>
    </div>
  );
}
