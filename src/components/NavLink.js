import React from "react";
import { Link } from "react-router-dom";
import "./css/NavLink.css";
function NavLink({ path, link, text }) {
  return (
    <>
      {path === link ? (
        <span className="navlink__span link--active">{text}</span>
      ) : (
        <Link className="navlink__a" to={link}>
          {text}
        </Link>
      )}
    </>
  );
}

export default NavLink;
