import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1e0342] to-[#512da8] py-4 px-6 shadow-lg rounded-b-2xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Portfolio<span className="text-pink-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-semibold">
          {["Home", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase()}`}
                className="hover:text-pink-400 transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-[#1e0342] text-white text-center py-4 space-y-4">
          {["Home", "Skills", "Projects", "Education", "Contact"].map((item) => (
            <li key={item}>
              <Link 
                to={`/${item.toLowerCase()}`} 
                className="block text-lg hover:text-pink-400 transition duration-300"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
