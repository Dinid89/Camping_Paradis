export default function LoginForm() {
  return (
    <div className="min-h-screen flex">
      {/* Image */}
      <div className="hidden lg:block w-1/2">
        <img
          src="https://images.unsplash.com/photo-1596970087316-f82c4f3f3cbb?q=80&w=735&auto=format&fit=crop"
          alt="Sud de la France"
          className="h-screen w-full object-cover"
        />
      </div>

      {/* Formulaire */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-brand-foret px-6">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-brand-foret">
              Bienvenue
            </h1>

            <p className="text-gray-500 mt-2">
              Connectez-vous à votre espace personnel
            </p>
          </div>

          <form className="space-y-5">
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
              className="w-full bg-brand-soleil text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-200 cursor-pointer"
            >
              Se connecter
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