const skills = [
    { name: "HTML", level: 90, color: "bg-red-500" },
    { name: "CSS", level: 85, color: "bg-blue-500" },
    { name: "JavaScript", level: 80, color: "bg-yellow-500" },
    { name: "Java", level: 75, color: "bg-purple-500" },
    { name: "C", level: 70, color: "bg-indigo-500" },
    { name: "Python", level: 85, color: "bg-green-500" },
    { name: "React.js", level: 80, color: "bg-cyan-500" },
    { name: "Tailwind CSS", level: 90, color: "bg-teal-500" },
    { name: "Spring Boot", level: 75, color: "bg-lime-500" },
    { name: "MySQL", level: 80, color: "bg-orange-500" }
];

const SkillsPage = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
            <div className="space-y-4">
                {skills.map((skill, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-1">
                            <span className="text-lg font-semibold">{skill.name}</span>
                            <span className="text-lg font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-4">
                            <div className={`h-4 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default SkillsPage;
