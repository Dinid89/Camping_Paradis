import {
  Users,
  Bed,
  Bath,
  Wifi,
  Car,
  Dog,
  Coffee,
  Snowflake,
} from "lucide-react";

export default function HebergementCard(nom, type, capacite, description, prix_nuit, image) {
  const amenities = [
    { icon: <Wifi size={18} />, label: "Wi-Fi gratuit" },
    { icon: <Car size={18} />, label: "Parking privé" },
    { icon: <Coffee size={18} />, label: "Cuisine équipée" },
    { icon: <Snowflake size={18} />, label: "Climatisation" },
    { icon: <Dog size={18} />, label: "Animaux acceptés" },
  ];

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl">
      {/* Galerie */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Bungalow"
          className="h-[400px] w-full object-cover rounded-2xl"
        />

        <div className="grid grid-cols-2 gap-2">
          <img
            src={image}
            alt="Logement"
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858"
            alt=""
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt=""
            className="h-[195px] w-full object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt=""
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

            <h1 className="text-4xl font-bold text-brand-foret mt-3">
              {nom}
            </h1>

            <p className="text-gray-500 mt-2">
              Un logement spacieux au cœur de la nature
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">À partir de</p>

            <p className="text-4xl font-bold text-brand-soleil">{prix_nuit}</p>

            <p className="text-sm text-gray-500">/ nuit</p>
          </div>
        </div>

        {/* Infos rapides */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Users className="mx-auto mb-2" />
            <p className="font-semibold">{capacite} personnes</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Bed className="mx-auto mb-2" />
            <p className="font-semibold">à partir de 2 chambres</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <Bath className="mx-auto mb-2" />
            <p className="font-semibold">1 salle d'eau</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl text-center">
            <span className="text-2xl">📐</span>
            <p className="font-semibold">à partir de 35 m²</p>
          </div>
        </div>

        {/* Description */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-brand-foret mb-4">
            Description
          </h2>

          <p className="text-gray-600 leading-8">
            {description}
          </p>
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
            <div className="bg-green-50 p-4 rounded-xl">Vue sur la pinède</div>

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

          <div className="grid md:grid-cols-2 gap-4 text-gray-600">
            <p>🕒 Arrivée : à partir de 16h00</p>
            <p>🕙 Départ : avant 10h00</p>
            <p>🐾 Animaux autorisés</p>
            <p>🚗 Parking inclus</p>
            <p>📶 Wi-Fi disponible</p>
            <p>🧺 Location de linge possible</p>
          </div>
        </section>

        {/* CTA */}
        <div className="flex justify-center mt-10">
          <button className="bg-brand-soleil text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition">
            Voir les autres {type}
          </button>
        </div>
      </div>
    </div>
  );
}
