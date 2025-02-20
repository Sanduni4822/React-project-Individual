import React from "react";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-900 to-blue-900 p-6">
      <div className="flex flex-col bg-gray-900 text-white rounded-2xl shadow-lg p-10 w-full max-w-4xl">
        {/* Content Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Sanduni Wathsala</h1>
          <h2 className="text-xl font-semibold text-purple-400 mt-2">Undergraduate</h2>
          <p className="text-gray-300 mt-4 max-w-md mx-auto">
          I'm an enthusiastic undergraduate at the University of Peradeniya at the Faculty of science with a passion for web development and software engineering. As a  computer science, statistics and mathematics major,I have honed my analytical and problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
