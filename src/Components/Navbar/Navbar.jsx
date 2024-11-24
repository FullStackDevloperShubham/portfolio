import '../../css/Global.css.css'
// BrowserRouter, Link, Route, Routes
import { Routes, Route, Link } from 'react-router-dom'
// About page
import About from '../About/About';

// contact page
import Contact from '../Contact/Contact';

const Navbar = () => {
  return (
    <>
      <nav>
        {/* Navigation Menu */}
        <div className="top-0 font-serif bg-white text-black min-w-4 h-10 m-[20px] rounded-[20px] px-4 sm:px-6 md:px-8 flex items-center shadow-md">
          <ul className="flex space-x-8 justify-center sm:justify-start w-full cursor-pointer">
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
        </div>
      </nav>

    </>




  );
};

export default Navbar;
