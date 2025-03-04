const Homepage = () => {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat px-6 md:px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex flex-col md:flex-row text-white shadow-lg p-6 md:p-12 w-full max-w-6xl items-center gap-8">
        
        {/* Content Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold">Sanduni Wathsala</h1>
          <h2 className="text-2xl sm:text-4xl font-semibold">Undergraduate</h2>
          <p className="leading-relaxed max-w-lg mx-auto md:mx-0">
            I'm an enthusiastic undergraduate at the University of Peradeniya...
          </p>

          {/* Button + Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="/Sanduni_Wathsala_CV.pdf" 
              download="Sanduni_Wathsala_CV.pdf"
              className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
            >
              Download CV
            </a>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Sanduni4822" target="_blank">
                <FaGithub className="text-2xl hover:text-purple-400 transition" />
              </a>
              <a href="https://www.linkedin.com/in/sanduni-wathsala-90894a254" target="_blank">
                <FaLinkedin className="text-2xl hover:text-blue-500 transition" />
              </a>
              <a href="https://www.thecn.com/SW1559" target="_blank">
                <FaGlobe className="text-2xl hover:text-green-400 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img 
            src={profileImage} 
            alt="Sanduni Wathsala" 
            className="w-56 sm:w-72 h-56 sm:h-72 object-cover rounded-full shadow-lg border-4 border-white"
          />
        </div>

      </div>
    </div>
  );
};
