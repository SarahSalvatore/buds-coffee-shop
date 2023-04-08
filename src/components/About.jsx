import React from "react";
import budExterior from "../assets/bud-exterior.png";

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
        <h1 className="section-heading orange-text">About</h1>
        <p className="paragraph-text white-text">
          Welcome to Bud's Coffee Bar! We are a locally owned coffee shop in the
          Beaches and offer a variety of drinks and snacks to satisfy any
          craving. Our menu includes a wide selection of coffee drinks,
          including lattes, cappuccinos, and mochas, as well as iced coffee and
          cold brew. If you're feeling hungry, we have a selection of pastries
          and other snacks available, including muffins, cookies, and
          croissants. We are passionate about coffee and creating a welcoming
          environment for all. We believe that a good cup of coffee can bring
          people together, and we strive to make every cup an experience that
          our customers will remember.
        </p>
      </div>
    </section>
  );
};

export default About;
