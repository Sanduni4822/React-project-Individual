import React from "react";
import profileImage from "../../assets/My profile.jpg"; // Import the image

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-blue-900 p-6">
      <div className="flex flex-row bg-gray-900 text-white rounded-2xl shadow-lg p-10 w-full max-w-15xl items-center">
        {/* Content Section */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl font-bold">Sanduni Wathsala</h1>
          <h2 className="text-xl font-semibold text-purple-400 mt-2">Undergraduate</h2>
          <p className="text-gray-300 mt-4 max-w-md">
            I'm an enthusiastic undergraduate at the University of Peradeniya at the Faculty of Science with a passion for web development and software engineering. As a computer science, statistics, and mathematics major, I have honed my analytical and problem-solving skills.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img src={profileImage} alt="Sanduni Wathsala" className="w-64 h-64 object-cover rounded-full shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
