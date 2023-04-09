import React from "react";
import { Link } from "react-scroll";
import budExterior from "../assets/bud-exterior.png";
import coffeeCup from "../assets/cup.png";

const About = () => {
  return (
    <section id="about">
      <div className="about-photo-container">
        <img
          className="about-photo"
          src={budExterior}
          alt="exterior view of Bud's Coffee Bar, a painted white brick building with a large window and black door. "
        />
      </div>
      <div className="about-text-container">
        <h2 className="section-heading orange-text">About</h2>
        <p className="paragraph-text white-text">
          Welcome to Bud's Coffee Bar, where we offer big flavour in a cozy
          space! As a locally owned coffee shop in the Beaches neighbourhood of
          Toronto, we're proud to offer an extensive menu of drinks and snacks
          that will tantalize your taste buds. From our expertly crafted coffee
          to our mouth-watering pastries and savoury snacks, we're committed to
          delivering the ultimate coffee experience. Four stools provide a great
          people-watching perch, or enjoy your java while strolling along Queen
          Street or spending a sunny day at the beach.
        </p>
        <div className="about-image-link-container">
          <img
            className="cup-photo"
            src={coffeeCup}
            alt="takeout coffee cup with Bud's logo on sleeve"
          />
          <Link className="text-link orange-text" to={"menu"} smooth={true}>
            Check out our menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
