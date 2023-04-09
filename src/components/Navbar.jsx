import React from "react";
import Logo from "./Logo";
import { Link } from "react-scroll";

const navLinks = ["home", "about", "menu", "contact"];

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div>
        {navLinks.map((navItem) => {
          return (
            <Link
              className="nav-link white-text"
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
