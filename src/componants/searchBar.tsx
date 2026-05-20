export default function SearchBar() {
  return (
    <>
      <div className="h-80 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1594420467533-bb56919ba856?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
        <div
          className="hidden lg:flex justify-center bg-orange-400 gap-5 rounded-md p-5"
          id="searchDiv"
        >
          <div className="flex items-center gap-2 border border-black bg-white rounded-md px-3 py-2">
            {/* SVG 1 inchangé */}
            <svg
              viewBox="0 0 20 20"
              fill="none"
              height="30px"
              width="30px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.47487 4.4749C2.32698 6.62279 2.32698 10.1052 4.47487 12.2531C6.62275 14.401 10.1052 14.401 12.253 12.2531C14.4009 10.1052 14.4009 6.62279 12.253 4.4749C10.1052 2.32702 6.62275 2.32702 4.47487 4.4749ZM10.8388 10.8389C9.47199 12.2057 7.25591 12.2057 5.88908 10.8389C4.52224 9.47203 4.52224 7.25595 5.88908 5.88912C7.25591 4.52228 9.47199 4.52228 10.8388 5.88912C12.2057 7.25595 12.2057 9.47203 10.8388 10.8389Z"
                  fill="#141414"
                ></path>
                <path
                  d="M11.1924 13.3137C10.6066 12.7279 10.6066 11.7782 11.1924 11.1924C11.7782 10.6066 12.7279 10.6066 13.3137 11.1924L16.8492 14.7279C17.435 15.3137 17.435 16.2635 16.8492 16.8492C16.2635 17.435 15.3137 17.435 14.7279 16.8492L11.1924 13.3137Z"
                  fill="#060606"
                ></path>
              </g>
            </svg>

            <input
              type="search"
              name="search"
              id="search"
              placeholder="Chercher..."
              className="outline-none"
            />
          </div>

          <div className="flex items-center gap-2 border border-black bg-white rounded-md px-3 py-2">
            {/* SVG 2 inchangé */}
            <svg
              fill="#000000"
              height="30px"
              width="30px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 264.018 264.018"
           
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M132.009,0c-42.66,0-77.366,34.706-77.366,77.366c0,11.634,2.52,22.815,7.488,33.24c0.1,0.223,0.205,0.442,0.317,0.661 l58.454,113.179c2.146,4.154,6.431,6.764,11.106,6.764c4.676,0,8.961-2.609,11.106-6.764l58.438-113.148 c0.101-0.195,0.195-0.392,0.285-0.591c5.001-10.455,7.536-21.67,7.536-33.341C209.375,34.706,174.669,0,132.009,0z M132.009,117.861c-22.329,0-40.495-18.166-40.495-40.495c0-22.328,18.166-40.494,40.495-40.494s40.495,18.166,40.495,40.494 C172.504,99.695,154.338,117.861,132.009,117.861z"></path>{" "}
                  <path d="M161.81,249.018h-59.602c-4.143,0-7.5,3.357-7.5,7.5c0,4.143,3.357,7.5,7.5,7.5h59.602c4.143,0,7.5-3.357,7.5-7.5 C169.31,252.375,165.952,249.018,161.81,249.018z"></path>{" "}
                </g>{" "}
              </g>
            </svg>

            <input
              type="text"
              name="location"
              id="location"
              placeholder="Lieu"
              className="outline-none"
            />
          </div>

          <button className="border-2 border-white text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition">
            Rechercher
          </button>
        </div>
      </div>
    </>
  );
}
