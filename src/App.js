import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./footer"; 
import Home from "./home";
import Projects from "./projects";
import Experience from "./experience";
import "./index.css";

const App = () => {
  return (
    <Router>
      {/* Navbar - Appears on all pages */}
      <Navbar />

      {/* Main Content - Wrapped in a container for consistent padding/margin */}
      <div className="main-content pb-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />

          {/* Add more routes as needed */}
        </Routes>
      </div>

      {/* Footer - Appears on all pages */}
      <Footer />

    </Router>
  );
};

export default App;