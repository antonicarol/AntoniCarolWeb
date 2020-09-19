import React from "react";
import "./css/Navbar.css";
import NavLink from "./NavLink";
function Navbar({ location }) {
  return (
    <div className="navbar">
      <NavLink path={location?.pathname} link="/" text="Home" />
      <NavLink path={location?.pathname} link="/about" text="About" />
      <NavLink path={location?.pathname} link="/resume" text="Resume" />
      <NavLink path={location?.pathname} link="/skills" text="Skills" />
      <NavLink path={location?.pathname} link="/projects" text="Projects" />
    </div>
  );
}

export default Navbar;
