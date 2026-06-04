import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from "./components/Navbar"
import SearchBar from './components/SearchBar'

import Home from "./pages/Home"


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <SearchBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  )
}

export default App
