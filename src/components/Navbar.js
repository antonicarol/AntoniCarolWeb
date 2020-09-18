import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import "./css/Navbar.css";
function Navbar() {
  const [{ path }, dispatch] = useStateValue();
  return (
    <div className="navbar">
      <Link className={path === "/" && "link--active"} to="/">
        Home
      </Link>
      <Link className={path === "/about" && "link--active"} to="/about">
        About
      </Link>
      <Link className={path === "/resume" && "link--active"} to="/resume">
        Resume
      </Link>
      <Link className={path === "/skills" && "link--active"} to="/skills">
        Skills
      </Link>
      <Link className={path === "/projects" && "link--active"} to="/projects">
        Projects
      </Link>
    </div>
  );
}

export default Navbar;
