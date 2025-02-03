import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Home = () => {
  return (
    <div className="font-sans pt-20 min-h-screen bg-cover bg-center bg-gradient-to-r from-blue-100 via-teal-100 to-lime-100 animate-gradient text-gray-800">
      <main>
        {/* About Section */}
        <section id="about" className="py-12 px-4 md:px-8 lg:px-16">
          <div className="container mx-auto text-center">
            {/* Greeting */}
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center gap-2">
                Hi
                <span role="img" aria-label="waving hand">
                  👋
                </span>
                , I’m Brenda Nkatha Kithinji
              </h1>
            </div>

            {/* Round Image */}
            <div className="mb-6">
              <img
                src="./bree.png"
                alt="Brenda Nkatha Kithinji"
                className="mx-auto rounded-full shadow-lg w-32 sm:w-40 md:w-48 lg:w-56 border-4 border-blue-500"
              />
            </div>

            {/* Paragraph About Brenda */}
            <div className="mb-6 text-base sm:text-lg lg:text-xl font-medium text-gray-700 px-2 sm:px-6 md:px-12 lg:px-24">
              <p>
                I am a master’s student studying Electrical Power Systems Engineering at Glasgow Caledonian University, African Leadership Campus. I am passionate about energy, business, consulting, and sustainability. I bring creativity, problem-solving, and analytical thinking to help companies innovate and optimize processes. My ability to learn quickly and adapt to new challenges allows me to contribute effectively across dynamic industries. I am driven to provide sustainable, data-driven solutions that bridge technology and business strategy, adding value to organizations tackling global energy and environmental challenges.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center gap-4 mb-6 pt-10 flex-wrap">
              <a
                href="mailto:bkithi200@caledonian.ac.uk"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl sm:text-2xl hover:bg-blue-600 transition"
                title="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://wa.me/+23054720746"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl sm:text-2xl hover:bg-green-600 transition"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/brenda-kithinji-559718206"
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-xl sm:text-2xl hover:bg-blue-800 transition"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>

            {/* Resume Download */}
            <div>
              <a
                href="/Brenda_Kithinji_CV.pdf"
                download
                className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                <i className="fas fa-download"></i> Download Resume
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
