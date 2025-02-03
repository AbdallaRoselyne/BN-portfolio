import React from "react";
import { Link } from "react-router-dom"; 

const Navbar = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-blue-50 text-black p-4 shadow-lg fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif font-bold">
            Brenda Nkatha Kithinji
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experience" className="hover:underline">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:underline">
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
