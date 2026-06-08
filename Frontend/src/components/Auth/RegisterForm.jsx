export default function RegisterForm() {
  return (
    <div className="min-h-screen flex">
      {/* Image */}
      <div className="hidden lg:block w-1/2 h-full">
        <img
          src="https://images.unsplash.com/photo-1596970087316-f82c4f3f3cbb?q=80&w=735&auto=format&fit=crop"
          alt="Sud de la France"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-brand-foret px-6 py-8">
        <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-foret">
              Créer un compte
            </h1>

            <p className="text-gray-500 mt-2">
              Rejoignez-nous en quelques secondes
            </p>
          </div>

          <form className="space-y-5">
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
                placeholder="Retapez votre mot de passe"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-brand-soleil focus:ring-2 focus:ring-brand-soleil/20 transition"
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 h-4 w-4 accent-brand-soleil"
              />

              <label
                htmlFor="terms"
                className="text-sm text-gray-600"
              >
                J'accepte les conditions d'utilisation et la politique
                de confidentialité.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-soleil text-white py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Créer mon compte
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