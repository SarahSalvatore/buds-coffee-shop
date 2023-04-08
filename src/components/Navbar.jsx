import React from "react";
import { Link } from "react-scroll";

const navLinks = ["home", "about", "menu", "contact"];

const Navbar = () => {
  return (
    <nav>
      {navLinks.map((navItem) => {
        return (
          <Link
            className="nav-link"
            key={navLinks.indexOf(navItem)}
            to={`#${navItem}}`}
          >
            {navItem}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
