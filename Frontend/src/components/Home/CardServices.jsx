export default function CardServices({ nom, image, description }) {
  return (
    <>
      {/* SERVICES - DESKTOP*/}
      <div className="w-full px-5 md:px-0 mb-10">
        <div
          className="h-80 p-4 bg-cover bg-center flex flex-col"
          style={{ backgroundImage: `url(${image})` }}
        >
          {/* overlay pour lisibilité */}
          <div className="p-4 rounded-base flex flex-col h-full">
            <h5 className="text-2xl font-semibold text-white leading-8">
              {nom}
            </h5>

            <div className="hidden lg:block">
            <p className="text-white font-semibold mt-2  p-3 rounded-xl backdrop-blur-sm w-100">
              {description}
            </p>
            </div>

            <a
              href="#"
              className="mt-auto self-end inline-flex items-center text-white bg-brand-soleil hover:bg-brand-strong shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
            >
              En savoir plus
              <svg
                className="w-4 h-4 ms-1.5"
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
        </div>
      </div>
      {/* SERVICES - MOBILE*/}
      
    </>
  );
}
