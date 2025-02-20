import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; // Import icons
import profileImage from "../../assets/My profile.jpg"; // Import the image
import backgroundImage from "../../assets/Background.webp"; // Import your background image

const Homepage = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image
    >
      <div className="flex flex-row bg-gray-900 bg-opacity-80 text-white rounded-2xl shadow-lg p-12 w-full max-w-6xl items-center gap-12">
        
        {/* Content Section */}
        <div className="flex-1 text-left space-y-4">
          <h1 className="text-5xl font-extrabold">Sanduni Wathsala</h1>
          <h2 className="text-2xl font-semibold text-purple-400">Undergraduate</h2>
          <p className="text-gray-300 leading-relaxed max-w-lg">
            I'm an enthusiastic undergraduate at the University of Peradeniya at the Faculty of Science 
            with a passion for web development and software engineering. 
            As a computer science, statistics, and mathematics major, I have honed my analytical and problem-solving skills.
          </p>

          {/* Button + Social Icons */}
          <div className="flex items-center gap-6">
            <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition">
              Download CV
            </button>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/Sanduni4822" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-2xl hover:text-purple-400 transition cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/sanduni-wathsala-90894a254" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-500 transition cursor-pointer" />
              </a>
              <a href="https://www.thecn.com/SW1559" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-2xl hover:text-green-400 transition cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-72 h-72">
            <img 
              src={profileImage} 
              alt="Sanduni Wathsala" 
              className="w-72 h-72 object-cover rounded-full shadow-lg border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full border-[6px] border-purple-500 opacity-50 blur-lg"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
