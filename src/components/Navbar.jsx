import { Link } from "react-router-dom";  // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1e0342] to-[#512da8] py-4 px-6 shadow-lg rounded-b-2xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Portfolio<span className="text-pink-400">.</span>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[3px] before:bg-pink-400 before:transition-all before:duration-300 hover:before:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:text-pink-400 transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="hover:text-pink-400 transition duration-300"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/service"
              className="hover:text-pink-400 transition duration-300"
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-pink-400 transition duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
