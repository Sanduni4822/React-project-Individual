import backgroundImage from "../../assets/Background.webp";

const ContactPage = () => {
    return (
        <div
            className="bg-gray-900 text-white min-h-screen flex flex-col"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Main Content - Two Column Layout */}
            <div className="flex-grow flex items-center justify-center py-12 px-6 md:px-16">
                <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - Contact Info */}
                    <div className="text-center md:text-left">
                        <h1 className="text-5xl font-bold text-white mb-8 text-center md:text-left">
                            Contact Me
                        </h1>
                        <h2 className="text-4xl font-bold mb-6">
                            Let<span className="text-5xl font-semibold text-white">'s</span> Get in Touch
                        </h2>
                        <p className="mb-6 text-lg">
                            Feel free to reach out for collaborations, project discussions, or to say hello!
                        </p>

                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📞</span>
                                <span className="text-lg">(+94) 719892752</span>
                            </div>

                            {/* Email */}
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📧</span>
                                <span className="text-lg">sanduniwathsala0123@gmail.com</span>
                            </div>

                            {/* Address */}
                            <div className="flex items-center justify-center md:justify-start space-x-4">
                                <span className="text-lime-400 text-2xl">📍</span>
                                <span className="text-lg">No:200, Manikpuraya, 1st Lane, New Town, Embilipitiya.</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form (Without Outer Layout) */}
                    <form className="space-y-6 w-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 text-black rounded-lg focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 text-black rounded-lg focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 h-32 text-black rounded-lg focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-500 transition-shadow shadow-md hover:shadow-lg"
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
