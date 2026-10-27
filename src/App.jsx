import { Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import About from './pages/About';
import Project from "./pages/Project"
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />

      </Routes>


    </>
  )
}

export default App