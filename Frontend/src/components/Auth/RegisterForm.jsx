import { useState } from "react";
import { useAuth } from "../../context/useAuth";

export default function RegisterForm() {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [terms, setTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      setLoading(false);
      return;
    }

    if (!terms) {
      setError("Vous devez accepter les conditions d'utilisation");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nom, prenom, email, phone, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log("Erreurs : ", data);
        if (data.errors) {
          setError(data.errors[0].msg);
        } else {
          setError(data.message);
        }
        return;
      }

      alert("Compte créé avec succès ! Connectez-vous.");
      window.location.href = "/login";
    } catch (_err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1596970087316-f82c4f3f3cbb?q=80&w=735&auto=format&fit=crop"
          alt="Sud de la France"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-brand-foret px-6 py-8">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
          <a href="/" className="text-start text-gray-500">
            <small>⟵ Retour à la page d'accueil</small>
          </a>
          <br />
          <br />

          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-foret">
              Créer un compte
            </h1>

            <p className="text-gray-500 mt-2">
              Rejoignez-nous en quelques secondes
            </p>
          </div>

          {/* Affichage erreur */}
          {error && (
            <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Prénom
                </label>

                <input
                  id="firstname"
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  placeholder="David"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nom
                </label>

                <input
                  id="lastname"
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  placeholder="Dupont"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Adresse e-mail
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@email.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Téléphone
              </label>

              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="ex: 0607080910"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mot de passe
                <span>
                  <small>
                    {" "}
                    (doit contenir : une majuscule /un chiffre au minimum / Un
                    caractère spécial)
                  </small>
                </span>
              </label>

              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimum 8 caractères"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirmer le mot de passe
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Retapez votre mot de passe"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.value)}
                className="mt-1 h-4 w-4 accent-brand-soleil"
              />

              <label htmlFor="terms" className="text-sm text-gray-600">
                J'accepte les conditions d'utilisation et la politique de
                confidentialité.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-soleil text-white py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
            >
              {loading ? "Création en cours..." : "Créer mon compte"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Déjà inscrit ?{" "}
            <a
              href="/login"
              className="font-semibold text-brand-foret hover:underline"
            >
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
