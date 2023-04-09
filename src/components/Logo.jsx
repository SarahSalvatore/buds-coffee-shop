import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link to={"home"} smooth={true}>
      <img className="nav-logo" src={logo} alt="Buds Coffee Bar logo" />
    </Link>
  );
};

export default Logo;
