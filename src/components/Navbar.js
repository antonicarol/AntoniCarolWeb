import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
    </div>
  );
}

export default Navbar;
