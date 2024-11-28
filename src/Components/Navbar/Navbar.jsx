import '../../css/Global.css.css'
// BrowserRouter, Link, Route, Routes
import { Routes, Route, Link } from 'react-router-dom'
// About page
import About from '../About/About';
// framer motion
import { motion } from 'framer-motion'

// contact page
import Contact from '../Contact/Contact';

const Navbar = () => {
  return (
    <>
      <nav>
        {/* Navigation Menu with Animation */}
        <motion.div
          className="top-0 font-serif bg-white text-black w-auto h-14 mx-4 rounded-[20px] px-4 sm:px-6 md:px-8 flex items-center shadow-md"
          initial={{ y: -100, opacity: 0 }} // Start off-screen and invisible
          animate={{ y: 0, opacity: 1 }} // Drop into place and become visible
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            bounce: 0.4,
            duration: 0.8,
          }}
        >
          <ul className="flex space-x-6 justify-center sm:justify-start w-full cursor-pointer">
            <li className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <Link to="/skills">Skills</Link>
            </li>
            <li className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4 py-2 rounded-lg hover:bg-gray-100 transition">
              <a href="/ShubhamGaikwad.pdf" download={true}>
                Download Resume
              </a>
            </li>
          </ul>
        </motion.div>
      </nav>

    </>




  );
};

export default Navbar;
