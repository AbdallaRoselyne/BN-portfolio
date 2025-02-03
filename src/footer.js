import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto text-center">
        <div className="text-center">
          <span className="text-4xl font-bold text-gray-50 block">“</span>
          <p className="text-lg text-indigo-200 italic">
            Let’s connect to work on impactful projects or discuss exciting
            opportunities.
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <a
            href="mailto:bkithi200@caledonian.ac.uk"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl hover:bg-blue-600 transition"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://wa.me/+23054720746"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl hover:bg-green-600 transition"
            title="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/brenda-kithinji-559718206"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-700 text-white text-2xl hover:bg-blue-800 transition"
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
