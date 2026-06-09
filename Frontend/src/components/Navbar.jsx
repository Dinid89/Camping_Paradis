import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const hebergements = [
    {
      title: "Chalet",
      viewBox: "0 0 512 512",
      paths: [
        "M395.141,193.75V90.781h-47.703v55.266l-53.375-53.391L256,54.625l-38.063,38.031L0,310.609l38.063,38.063 l41.813-41.828v150.531h352.25V306.844l41.813,41.828L512,310.609L395.141,193.75z M245.578,396.719h-54.484v-54.5h54.484V396.719z M245.578,321.063h-54.484v-54.5h54.484V321.063z M320.906,396.719h-54.484v-54.5h54.484V396.719z M320.906,321.063h-54.484v-54.5 h54.484V321.063z",
      ],
      url: "/chalet"
    },
    {
      title: "Bungalow",
      viewBox: "0 0 325.122 325.122",
      paths: [
        "M174.145,22.143c-3.454-3.427-8.121-5.347-12.983-5.347c-0.027,0-0.06,0-0.092,0 c-4.895,0.027-9.584,1.996-13.021,5.483L5.311,166.855c-7.147,7.239-7.071,18.906,0.169,26.048 c7.239,7.152,18.901,7.076,26.053-0.163l7.941-8.044v102.57c0,11.629,9.426,21.055,21.055,21.055h90.299v-90.468h22.588v90.473 h91.186c11.623,0,21.049-9.426,21.049-21.055V184.848l8.072,8.023c3.59,3.568,8.284,5.347,12.983,5.347 c4.732,0,9.469-1.811,13.065-5.434c7.169-7.218,7.131-18.884-0.087-26.053L174.145,22.143z M248.802,271.486h-38.552v-69.424 c0-11.629-9.426-21.049-21.055-21.049h-54.162c-11.629,0-21.055,9.42-21.055,21.049v69.424H76.313v-99.018l85.578-85.633 l86.911,83.207C248.802,170.042,248.802,271.486,248.802,271.486z",
      ],
      url: "/chalet"
    },
    {
      title: "Tente",
      viewBox: "0 0 548.317 548.317",
      paths: [
        "M358.117,103.434c-2.065-3.309-8.491-6.187-12.393-6.187H235.755c-3.902,0-4.036,2.936-2.104,6.321l194.406,337.594 c1.932,3.386,6.521,3.605,10.241,2.458l106.039-33.517c3.729-1.147,5.077-5.565,3.012-8.874L358.117,103.434z",
        "M94.536,441.229l93.808-200.239v193.726c0,17.337,18.379,16.343,22.281,16.343h182.816c3.901,0,5.488-6.282,3.557-9.668 L208.12,106.599c-1.932-3.385-5.059-3.385-6.99,0l-47.296,83.05c-1.932,3.385-6.254,7.669-9.667,9.562 c-47.841,26.545-112.359,61.994-140.951,74.54c-4.284,1.884-4.045,7.286-0.708,10.557c6.359,6.216,19.871,20.436,32.35,37.562 c7.258,9.964,13.607,21.076,18.81,32.102c1.664,3.528,1.348,9.17-0.583,12.564l-40.622,74.855 c-1.912,3.386-0.315,9.668,3.586,9.668h68.229C88.177,451.06,92.767,444.71,94.536,441.229z",
      ],
      url: "/chalet"
    },
    {
      title: "Camping car",
      viewBox: "0 0 547.673 547.672",
      paths: [
        "M140.808,334.86c-30.112,0-54.516,24.413-54.516,54.516s24.413,54.516,54.516,54.516s54.516-24.413,54.516-54.516 S170.92,334.86,140.808,334.86z M140.693,405.364c-8.559,0-15.491-6.933-15.491-15.491s6.933-15.491,15.491-15.491 s15.491,6.933,15.491,15.491C156.184,398.421,149.251,405.364,140.693,405.364z",
        "M534.151,361.969h-39.904c-7.459,0-13.512,6.053-13.512,13.521v1.654c0,7.459,6.053,13.512,13.521,13.512h39.904 c7.459,0,13.512-6.053,13.512-13.521v-1.654C547.673,368.022,541.62,361.969,534.151,361.969z",
        "M69.548,387.396c0-36.194,35.075-65.312,71.26-65.312c36.194,0,67.396,20.75,68.439,59.899 c0,1.521-0.431,18.226-0.536,18.226h247.898c12.45,0.01,14.563-18.389,14.563-30.839V119.235c0-12.441-2.113-15.453-14.563-15.453 H186.688h-2.391C107.798,103.782,0,206.407,0,285.67c0,69.261,21.735,92.612,69.548,101.831z",
      ],
      url: "/chalet"
    },
  ];

  const CapsuleIcon = ({ item }) => (
    <a
      href={item.url}
      title={item.title}
      className="group flex flex-col items-center gap-1 hover:scale-110 transition-transform duration-200"
    >
      <div className="w-14 h-20 bg-brand-foret border-2 border-brand-olive rounded-t-2xl rounded-b-full flex items-center justify-center group-hover:bg-brand-soleil transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox={item.viewBox}
          fill="#ffffff"
        >
          {item.paths.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
      </div>
      <span className="text-xs font-medium text-white/70 group-hover:text-brand-soleil transition">
        {item.title}
      </span>
    </a>
  );

  return (
    <nav ref={menuRef} className="bg-brand-terre text-white shadow-md">
      <div className="flex flex-row justify-between items-center px-6 py-3">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-225 -100 450 215"
            width="140"
            height="60"
            preserveAspectRatio="xMidYMid meet"
          >
            <rect x="-225" y="-100" width="100%" height="100%" fill="#292A1E" />
            <g textAnchor="middle">
              <text
                y="-40"
                fontFamily="'Georgia', serif"
                fontSize="50"
                fontWeight="bold"
                fill="#F4F4E4"
                stroke="#F97316"
                strokeWidth="1.5"
                letterSpacing="10"
              >
                CAMPING
              </text>
              <line
                x1="-220"
                y1="-15"
                x2="220"
                y2="-15"
                stroke="#F97316"
                strokeWidth="4"
              />
              <text
                y="40"
                fontFamily="'Brush Script MT', cursive"
                fontSize="80"
                fontWeight="bold"
                fill="#F97316"
                fontStyle="italic"
              >
                Paradis
              </text>
              <text
                y="100"
                fontFamily="'Arial', sans-serif"
                fontSize="18"
                fontWeight="bold"
                fill="#F5F0E8"
                letterSpacing="4"
              >
                L'ÉVASION GRANDEUR NATURE
              </text>
            </g>
          </svg>
        </a>

        {/* Nav desktop */}
        <div className="hidden md:flex gap-8 font-medium">
          <a
            href="/"
            className="text-white/80 hover:text-brand-soleil transition"
          >
            Accueil
          </a>
          <a
            href="/NosServices"
            className="text-white/80 hover:text-brand-soleil transition"
          >
            Nos Services
          </a>
          <a
            href="#"
            className="text-white/80 hover:text-brand-soleil transition"
          >
            Réserver
          </a>
        </div>

        {/* Capsules hébergements desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {hebergements.map((item) => (
            <CapsuleIcon key={item.title} item={item} />
          ))}
        </div>

        {/* Auth desktop */}
        <div className="hidden md:flex gap-3 items-center">
          <a
            href="/login"
            className="text-white/80 hover:text-brand-soleil transition text-sm font-medium"
          >
            Connexion
          </a>
          <a
            href="/register"
            className="bg-brand-soleil text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-aurore transition"
          >
            Inscription
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-brand-terre border-t border-white/10 px-6 py-5 flex flex-col gap-5">
          {/* Liens nav */}
          <div className="flex flex-col gap-3 font-medium">
            <a
              href="#"
              className="text-white/80 hover:text-brand-soleil transition"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-brand-soleil transition"
            >
              Nos Services
            </a>
            <a
              href="#"
              className="text-white/80 hover:text-brand-soleil transition"
            >
              Réserver
            </a>
          </div>

          {/* Capsules mobile */}
          <div className="flex gap-8 items-center justify-center border-t border-white/10 pt-4">
            {hebergements.map((item) => (
              <CapsuleIcon key={item.title} item={item} />
            ))}
          </div>

          {/* Auth mobile */}
          <div className="flex flex-col gap-3 border-t border-white/10 pt-4">
            <a
              href="/login"
              className="text-white/80 hover:text-brand-soleil transition font-medium"
            >
              Connexion
            </a>
            <a
              href="/register"
              className="bg-brand-soleil text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-brand-aurore transition"
            >
              Inscription
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
