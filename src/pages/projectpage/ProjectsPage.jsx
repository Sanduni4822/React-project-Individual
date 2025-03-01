import React from "react";
import hotelImage from "../../assets/hotel.jpeg";

const projects = [
    {
        title: "Hotel Booking System",
        description: "The hotel aims to provide customers with better services, accommodate more guests, and offer a lifetime experience as it continues to rise in popularity.",
        image: hotelImage, 
    },
];

const Projects = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 text-white">
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
        </div>
    );
};

export default Projects;
