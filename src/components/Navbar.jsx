import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#1e0342] to-[#512da8] py-4 px-6 shadow-lg rounded-b-2xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-3xl font-extrabold tracking-wide">
          Portfolio<span className="text-pink-400">.</span>
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
