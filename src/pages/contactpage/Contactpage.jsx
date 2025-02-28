import backgroundImage from "../../assets/Background.webp";

const ContactPage = () => {
    return (
        <div
            className="bg-gray-900 text-white min-h-screen flex items-center justify-center py-12 px-6 md:px-16"
            style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="max-w-6xl mx-auto w-full">
                
                {/* Contact Info Section */}
                <div className="w-full text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">
                        Let<span className="text-4xl font-semibold text-white">'s</span> Get in Touch
                    </h2>
                    <p className="mb-6">
                        Feel free to reach out for collaborations, project discussions, or to say hello!
                    </p>

                    <div className="space-y-6">
                        {/* Phone */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <span className="text-lime-400 text-xl">📞</span>
                            <span>(+94) 719892752</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <span className="text-lime-400 text-xl">📧</span>
                            <span>sanduniwathsala0123@gmail.com</span>
                        </div>

                        {/* Address */}
                        <div className="flex items-center justify-center md:justify-start space-x-4">
                            <span className="text-lime-400 text-xl">📍</span>
                            <span>No:200, Manikpuraya, 1st Lane, New Town, Embilipitiya.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
