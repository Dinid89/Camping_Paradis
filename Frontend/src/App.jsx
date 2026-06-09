import { BrowserRouter, Routes, Route } from "react-router-dom"

//composants fixes
import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"

//cookies
import CookieBanner from "./components/UI/CookieBanner"

//Auth
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"


//pages principales
import Home from "./pages/Home"
import Services from "./pages/Services"

//pages annexes
import Chalet from "./pages/Hebergements/Chalet"
import Bungalow from "./pages/Hebergements/Bungalow"



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
                <Route path="/services" element={<Services />} />
                <Route path="/chalet" element={<Chalet />} />
                <Route path="/bungalow" element={<Bungalow />} />
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