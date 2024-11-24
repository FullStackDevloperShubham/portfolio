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
      <div className=" absolute w-full h-screen flex justify-center items-start bg-gradient-to-t from-gray-300 to-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<FirstCard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
