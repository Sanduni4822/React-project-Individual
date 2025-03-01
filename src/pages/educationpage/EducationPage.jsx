import React from "react";

const educationData = [
    {
        institution: "Peradeniya University of Sri Lanka (Faculty of Science)",
        year: "2021",
        degree: "Bachelor of Science"
    },
    {
        institution: "R/Embilipitiya President College",
        year: "2019",
        degree: "Advanced Level - (Combined Mathematics, Physics, Chemistry)"
    },
    {
        institution: "R/Embilipitiya President College",
        year: "2014",
        degree: "Successfully Completed Ordinary Level Exam"
    }
];

const EducationPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            {educationData.map((edu, index) => (
                <div key={index} className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg w-80 text-center mb-6">
                    <h3 className="text-xl font-bold">{edu.institution}</h3>
                    <p className="text-white text-lg mt-1">{edu.year}</p>
                    <p className="text-white mt-2 whitespace-pre-line">{edu.degree}</p>
                </div>
            ))}
        </div>
    );
};

export default EducationPage;
