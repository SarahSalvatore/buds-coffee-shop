import React from "react";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer>
      <Logo />
      <p className="footer-text orange-text">Bud's Coffee Bar</p>
      <SocialLinks />
    </footer>
  );
};

export default Footer;
