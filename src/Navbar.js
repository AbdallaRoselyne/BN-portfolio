import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-50 text-black p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">Brenda Nkatha Kithinji</h1>
          {/* Hamburger Menu */}
          <button
            className="block md:hidden text-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
          {/* Navigation Links */}
          <nav className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li>
                <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:underline" onClick={() => setIsOpen(false)}>
                  Education
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
