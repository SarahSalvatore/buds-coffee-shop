import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const navLinks = ["home", "about", "menu", "contact"];

const Navbar = () => {
  return (
    <nav>
      <img className="nav-logo" src={logo} alt="Buds Coffee Bar logo" />
      <div>
        {navLinks.map((navItem) => {
          return (
            <Link
              className="nav-link"
              key={navLinks.indexOf(navItem)}
              to={`${navItem}`}
              smooth={true}
            >
              {navItem}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
