import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
// custom css file
import './css/Global.css.css'
// first card
import FirstCard from "./Components/FirstCard/FirstCard";
import About from './Components/About/About'
import Contact from "./Components/Contact/Contact";
import Skills from './Components/Skills/Skills'
// browser router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <div className="relative w-full h-screen overflow-hidden">
        {/* Static Blue Wave with Three Peaks */}
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            {/* Path with two peaks */}
            <path
              d="M0,256L480,128C960,0,1440,128,1440,128L1440,320L0,320Z"
              className="fill-blue-500"
            />
          </svg>
        </div>

        {/* Main Content */}
        <div className="absolute w-full h-full flex justify-center items-start z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<FirstCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </div>
      </div>


    </>
  );
}

export default App;
