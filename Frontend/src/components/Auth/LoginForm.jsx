import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setError(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      alert("Connexion réussie !");
    } catch (_err) {
      setError("Erreur de connexion au serveur");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1596970087316-f82c4f3f3cbb?q=80&w=735&auto=format&fit=crop"
          alt="Sud de la France"
          className="h-screen w-full object-cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center bg-brand-foret px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-foret">Bienvenue</h1>
            <p className="text-gray-500 mt-2">
              Connectez-vous à votre espace personnel
            </p>
          </div>

          {/* Affichage erreur */}
          {error && (
            <div className="bg-red-50 text-red-500 text-sm px-4 py-3 rounded-xl mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
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
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div className="flex justify-end">
              <a
                href="/forgot-password"
                className="text-sm text-brand-foret hover:underline"
              >
                Mot de passe oublié ?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-soleil text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-200 cursor-pointer disabled:opacity-50"
            >
              {loading ? "Connexion..." : "Se connecter"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            Pas encore de compte ?{" "}
            <a
              href="/register"
              className="font-semibold text-brand-foret hover:underline"
            >
              Créer un compte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
