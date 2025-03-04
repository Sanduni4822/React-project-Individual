import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"; 
import profileImage from "../../assets/Myprofile.jpg"; 
import backgroundImage from "../../assets/Background.webp"; 

const Homepage = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 sm:px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }} 
    >
      <div className="flex flex-col md:flex-row text-white shadow-lg p-6 sm:p-12 w-full max-w-6xl items-center gap-8 md:gap-12">
        
        {/* Content Section */}
        <div className="flex-1 text-center md:text-left space-y-4 text-white">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold">Sanduni</h1>
            <h1 className="text-4xl sm:text-6xl font-extrabold">Wathsala</h1>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-white">Undergraduate</h2>
          <p className="text-white text-semibold leading-relaxed max-w-lg text-sm sm:text-base">
            I'm an enthusiastic undergraduate at the University of Peradeniya at the Faculty of Science 
            with a passion for Web Development, Software Engineering, Quality Assurance Engineering & Data Analysis. 
          </p>
          
          {/* Button + Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {/* ✅ Fixed Download CV Button */}
            <a 
              href="/Sanduni_Wathsala_CV.pdf" 
              download="Sanduni_Wathsala_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition text-sm sm:text-base"
            >
              Download CV
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a href="https://github.com/Sanduni4822" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-xl sm:text-2xl hover:text-purple-400 transition cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/sanduni-wathsala-90894a254" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-xl sm:text-2xl hover:text-blue-500 transition cursor-pointer" />
              </a>
              <a href="https://www.thecn.com/SW1559" target="_blank" rel="noopener noreferrer">
                <FaGlobe className="text-xl sm:text-2xl hover:text-green-400 transition cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center relative">
          <div className="relative w-48 h-48 sm:w-72 sm:h-72">
            <img 
              src={profileImage} 
              alt="Sanduni Wathsala" 
              className="w-full h-full object-cover rounded-full shadow-lg border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full border-[6px] border-purple-500 opacity-50 blur-lg"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Homepage;
