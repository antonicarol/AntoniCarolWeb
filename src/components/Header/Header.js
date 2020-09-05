import React from "react";
import "./css/Header.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="header__navigation">
        <HeaderLink
          link="/portfolio"
          label="Portfolio"
          icon="https://api.iconify.design/zondicons:portfolio.svg?color=%234ecca3"
        />

        <HeaderLink
          label="RoadMap"
          comingSoon
          icon="https://api.iconify.design/raphael:roadmap.svg?color=%234ecca3"
        />
        <HeaderLink
          label="Social"
          comingSoon
          icon="https://api.iconify.design/bx:bxs-user-rectangle.svg?color=%234ecca3"
        />
      </div>
    </div>
  );
}

export default Header;
