import React from "react";
import hotelImage from "../../assets/hotel.jpeg"; 

const projects = [
    {
        title: "Hotel Booking System",
        description: "The hotel aims to provide customers with better services, accommodate more guests, and offer a lifetime experience as it continues to rise in popularity.",
        image: hotelImage,
        pdf: "/HOTEL BOOKING SYSTEM_Final Report_S19538.pdf"  // Ensure PDF is in 'public' folder
    },
];

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 text-white flex justify-center">
            <div className="w-full">
                <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
                <div className="flex justify-center">
                    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden w-96 hover:scale-105 hover:bg-gray-700 transition-all duration-300">
                        {projects.map((project, index) => (
                            <div key={index}>
                                <img src={project.image} alt={project.title} className="w-full h-52 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-center">{project.title}</h3>
                                    <p className="text-gray-300 mb-4 text-center">{project.description}</p>
                                    <div className="flex justify-center">
                                        <a href={project.pdf} target="_blank" rel="noopener noreferrer">
                                            <button className="bg-white text-black px-4 py-2 rounded-lg font-semibold">
                                                View Project
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
