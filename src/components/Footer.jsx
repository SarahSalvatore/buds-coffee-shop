import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <p className="paragraph-text orange-text">Bud's Coffee Bar</p>
      <p className="paragraph-text white-text">
        1966 Queen St E, Toronto, ON M4L 1H8
      </p>
    </footer>
  );
};

export default Footer;
