import React, { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";

const navLinks = ["home", "about", "menu", "contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <Logo />
      <div className="nav-container">
        <FontAwesomeIcon
          icon={faBars}
          className="hamburger"
          onClick={toggleHamburgerMenu}
        />
        <div
          className={
            menuOpen ? "nav-link-container" : "nav-link-container-closed"
          }
        >
          {navLinks.map((navItem) => {
            return (
              <Link
                className="nav-link white-text"
                key={navLinks.indexOf(navItem)}
                to={`${navItem}`}
                smooth={true}
                onClick={toggleHamburgerMenu}
              >
                {navItem}
              </Link>
            );
          })}
          <button
            className="nav-button"
            onClick={() =>
              window.open(
                "https://food.google.com/chooseprovider?restaurantId=/g/11b75g3c0z&g2lbs=ADZRdkumWqz9iN5bCZYuhzJhbtNzSg9HRB1GywETqxfDHI-ovXNyMJ5aqs0dLDSu0BTKQbKx5SGeCD9jb5V-2nRYxD5sWNQxlL1qB3HB4frnzI_cb8huikN8RUXf_bfml81HGXw_uXRR&hl=en-CA&gl=ca&ssta=1&fo_m=MfohQo559jFvMWvkddHzV46uMT_RFPQ05bfKMQVr5-7IofUJMU_hT8vrWuwRMUv3d8yCO4PgMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=vBMzZISLB96cptQP3pq8CA&ei=vBMzZISLB96cptQP3pq8CA&fo_s=OA,AH&orderType=2&sei=CUgiWzc2QCCgESnr7yMeMySq&utm_campaign&utm_source=search",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Order
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
