import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("cookieConsent", "refused");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    // Bannière Cookies
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
          <div>
            <h3 className="text-xl text-center font-bold">Nous respectons votre vie privée</h3>
            <hr className="mt-2 mb-2" />
            <p className="text-sm text-center">
              Nous utilisons des cookies, des pixels et d'autres technologies («
              cookies ») sur notre site Internet. Les cookies sont absolument
              nécessaires pour que vous puissiez naviguer et faire des achats
              sur notre site Internet. Votre consentement nous permettra
              d'activer les cookies de performance, fonctionnels et
              publicitaires afin d'améliorer votre expérience client sur notre
              site internet et de vous proposer des produits et services
              pertinents pour vous ainsi que des annonces personnalisées. Vous
              trouverez de plus amples informations sur la personne en charge de
              la gestion de vos données, du traitement des données personnelles
              et des finalités de ce traitement dans notre Centre de préférences
              et dans notre Déclaration de confidentialité{" "}
              <a href="/cookies" className="font-bold text-brand-soleil">ici</a>
            </p>
          </div>

          <div className="flex gap-3 justify-center mt-6">
            <button
              onClick={handleRefuse}
              className="bg-brand-foret text-white px-4 py-2 rounded m-2 hover:cursor-pointer"
            >
              Refuser les cookies
            </button>
            <button
              onClick={handleAccept}
              className="bg-brand-soleil text-white px-4 py-2 rounded m-2 hover:cursor-pointer"
            >
              Tout accepter
            </button>
            <button
              className="bg-brand-foret text-white px-4 py-2 rounded m-2 hover:cursor-pointer"
            >
              Préférences
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
