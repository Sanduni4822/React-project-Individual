import { useState } from "react";
import backgroundImage from "../../assets/Background.webp";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear errors on input
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div
            className="bg-gray-900 text-white min-h-screen flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="text-center py-12">
                <h1 className="text-5xl font-bold text-white">Contact Me</h1>
            </div>

            <div className="flex-grow flex items-center justify-center px-6 md:px-16">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold mb-6">
                            Let<span className="text-5xl font-semibold text-white">'s</span> Get in Touch
                        </h2>
                        <p className="mb-6 text-lg">Feel free to reach out for collaborations, project discussions, or to say hello!</p>

                        <div className="space-y-6">
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📞</span>
                                <span className="text-lg">(+94) 719892752</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📧</span>
                                <span className="text-lg">sanduniwathsala0123@gmail.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📍</span>
                                <span className="text-lg">No:200, Manikpuraya, 1st Lane, New Town, Embilipitiya.</span>
                            </div>
                        </div>
                    </div>

                    <form className="space-y-6 w-full" onSubmit={handleSubmit} noValidate>
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="w-full p-3 text-black rounded-lg focus:outline-none"
                                required
                            />
                            {errors.name && <p className="text-white-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="w-full p-3 text-black rounded-lg focus:outline-none"
                                required
                            />
                            {errors.email && <p className="text-white-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                className="w-full p-3 h-32 text-black rounded-lg focus:outline-none"
                                required
                            />
                            {errors.message && <p className="text-white-500 text-sm">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-300 transition-shadow shadow-md hover:shadow-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
