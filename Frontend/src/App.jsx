import { BrowserRouter, Routes, Route } from "react-router-dom"

//composants fixes
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"

//cookies
import CookieBanner from "./components/UI/CookieBanner"

//Auth
import Login from "./pages/Login"
import Register from "./pages/Register"


//pages 
import Home from "./pages/Home"

import Chalet from "./pages/Chalet"



function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages Login et Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Pages de navigation avec searchBar*/}
        <Route path="/*" element={
          <>
            <Navbar />
            <SearchBar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/chalet" element={<Chalet />} />
              </Routes>
            </main>
            <Footer />
          </>
        } />

      </Routes>
      <CookieBanner />
    </BrowserRouter>
  )
}

export default App