import React from "react"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
        <nav className="nav">
            <Link className="nav--link" to="/">Home</Link>
            <Link className="nav--link" to="about">About</Link>
            <Link className="nav--link" to="services">Services</Link>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
