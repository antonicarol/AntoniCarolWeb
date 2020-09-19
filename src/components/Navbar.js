import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../contexts/StateProvider";
import "./css/Navbar.css";
import NavLink from "./NavLink";
function Navbar() {
  const [{ path }, dispatch] = useStateValue();
  return (
    <div className="navbar">
      <NavLink path={path} link="/" text="Home" />
      <NavLink path={path} link="/about" text="About" />
      <NavLink path={path} link="/resume" text="Resume" />
      <NavLink path={path} link="/skills" text="Skills" />
      <NavLink path={path} link="/projects" text="Projects" />
    </div>
  );
}

export default Navbar;
