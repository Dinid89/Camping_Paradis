export default function HomeBonus() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-black">Ils nous font confiance</h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-10 lg:max-w-none lg:grid-cols-5">
          <img
            alt="LabelEco"
            src="https://www.lcengineering.eu/wp-content/uploads/2024/03/ecolabel_ant.png"
            width={158}
            height={48}
            className="col-span-2 max-h-50 w-full object-contain lg:col-span-1"
          />

          <img
            alt="CampingQ"
            src="https://ffcc.fr/wp-content/uploads/2019/12/cq-1920x1080px-1024x576.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
          />

          <img
            alt="QTourisme"
            src="https://www.aquatique-vacances.com/media/9384/big/logo-qualite-tourisme-camping-vacances.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
          />

          <img
            alt="TourismeH"
            src="https://www.lapascalinette.fr/wp-content/uploads/2024/01/label-tourisme_handicam.jpg"
            width={158}
            height={48}
            className="col-span-2 max-h-50 w-full object-contain sm:col-start-2 lg:col-span-1"
          />

          <img
            alt="AtoutFrance"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQowQ9vuU9epSkW8Ew5BFgdU2yIK9ik18kTdg&s"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-50 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  )
}
