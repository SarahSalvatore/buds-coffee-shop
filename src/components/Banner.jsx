import React from "react";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section id="banner">
      <h2 className="banner-heading">Wake up and smell the coffee</h2>
      <Link className="banner-link white-text" to={"about"} smooth={true}>
        Explore
      </Link>
    </section>
  );
};

export default Banner;
