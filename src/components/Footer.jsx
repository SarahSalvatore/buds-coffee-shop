import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <img className="nav-logo" src={logo} alt="Buds Coffee Bar logo" />
      <p className="paragraph-text orange-text">Bud's Coffee Bar</p>
      <p className="paragraph-text white-text">
        1966 Queen St E, Toronto, ON M4L 1H8
      </p>
    </footer>
  );
};

export default Footer;
