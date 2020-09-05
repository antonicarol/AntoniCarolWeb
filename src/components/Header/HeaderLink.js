import React from "react";
import { Link } from "react-router-dom";
import "./css/HeaderLink.css";

function HeaderLink({ label, icon, comingSoon, link }) {
  return (
    <div className="headerLink">
      <img alt={label} src={icon} />
      <Link to={link}>
        <button>{label}</button>
        {comingSoon && (
          <img
            className="headerLink__comingSoon"
            src="https://api.iconify.design/emojione-monotone:soon-arrow.svg?color=red"
            alt=""
          />
        )}
      </Link>
    </div>
  );
}

export default HeaderLink;
