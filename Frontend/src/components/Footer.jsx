export default function Footer() {
  return (
    <footer className="bg-brand-terre text-white">

      {/* Newsletter */}
      <div className="bg-brand-foret py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">Restez informé !</h3>
            <p className="text-brand-mousse text-sm mt-1">Recevez nos offres exclusives et actualités du camping</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 md:w-72 px-4 py-2 rounded-lg text-white text-sm outline-none border-2 border-brand-soleil focus:ring-2 focus:ring-brand-soleil"
            />
            <button className="bg-brand-soleil text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-brand-aurore transition whitespace-nowrap">
              S'abonner
            </button>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo + slogan */}
        <div className="flex flex-col gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-225 -100 450 215" width="160" height="70" preserveAspectRatio="xMidYMid meet">
            <rect x="-225" y="-100" width="100%" height="100%" fill="#292A1E" />
            <g textAnchor="middle">
              <text y="-40" fontFamily="'Georgia', serif" fontSize="50" fontWeight="bold" fill="#F4F4E4" stroke="#F97316" strokeWidth="1.5" letterSpacing="10">CAMPING</text>
              <line x1="-220" y1="-15" x2="220" y2="-15" stroke="#F97316" strokeWidth="4" />
              <text y="40" fontFamily="'Brush Script MT', cursive" fontSize="80" fontWeight="bold" fill="#F97316" fontStyle="italic">Paradis</text>
              <text y="100" fontFamily="'Arial', sans-serif" fontSize="18" fontWeight="bold" fill="#F5F0E8" letterSpacing="4">L'ÉVASION GRANDEUR NATURE</text>
            </g>
          </svg>
          <p className="text-sm text-white/60 leading-relaxed">
            Votre destination nature par excellence. Détente, aventure et souvenirs inoubliables au cœur de la nature.
          </p>
          {/* Réseaux sociaux */}
          <div className="flex gap-3 mt-2">
            {/* Facebook */}
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-soleil transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-soleil transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none"/>
              </svg>
            </a>
            {/* TikTok */}
            <a href="#" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-soleil transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Liens rapides */}
        <div>
          <h4 className="font-semibold text-brand-soleil mb-4 uppercase text-sm tracking-widest">Navigation</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {['Accueil', 'Hébergements', 'Nos Services', 'Nos Offres', 'Contact'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-brand-soleil transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-brand-soleil mb-4 uppercase text-sm tracking-widest">Contact</h4>
          <ul className="flex flex-col gap-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              123 Route de la Forêt<br/>La-Fôret-sur-Mer, France
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.9 2 2 0 0 1 3.6 2.72h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.5 17z"/>
              </svg>
              +33 1 23 45 67 89
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              contact@camping-paradis.fr
            </li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h4 className="font-semibold text-brand-soleil mb-4 uppercase text-sm tracking-widest">Informations</h4>
          <ul className="flex flex-col gap-2 text-sm text-white/70">
            {['Mentions légales', 'CGV', 'Politique de confidentialité', 'Cookies', 'FAQ'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-brand-soleil transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Camping Paradis. Tous droits réservés. 
            
          </p>

          <p>
            <strong>Attention : Site fictif</strong>
          </p>

          {/* Logos paiement */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/40 mr-1">Paiements sécurisés</span>

            {/* Visa */}
            <div className="bg-white rounded px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20">
                <rect width="38" height="20" rx="3" fill="white"/>
                <text x="4" y="15" fontFamily="Arial" fontSize="13" fontWeight="bold" fill="#1A1F71">VISA</text>
              </svg>
            </div>

            {/* Mastercard */}
            <div className="bg-white rounded px-2 py-1 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20">
                <circle cx="13" cy="10" r="8" fill="#EB001B"/>
                <circle cx="25" cy="10" r="8" fill="#F79E1B"/>
                <path d="M19 4.5a8 8 0 0 1 0 11 8 8 0 0 1 0-11z" fill="#FF5F00"/>
              </svg>
            </div>

            {/* Stripe */}
            <div className="bg-white rounded px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20">
                <rect width="38" height="20" rx="3" fill="white"/>
                <text x="4" y="15" fontFamily="Arial" fontSize="11" fontWeight="bold" fill="#635BFF">stripe</text>
              </svg>
            </div>

            {/* PayPal */}
            <div className="bg-white rounded px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20">
                <rect width="38" height="20" rx="3" fill="white"/>
                <text x="3" y="15" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#003087">Pay</text>
                <text x="17" y="15" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#009CDE">Pal</text>
              </svg>
            </div>

          </div>
        </div>  
      </div>

    </footer>
  )
}