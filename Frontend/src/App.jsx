import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"

import CookieBanner from "./components/UI/CookieBanner"

import Home from "./pages/Home"

import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Pages Login et Register */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />


        {/* Pages de navigation */}
        <Route path="/*" element={
          <>
            <Navbar />
            <SearchBar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
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