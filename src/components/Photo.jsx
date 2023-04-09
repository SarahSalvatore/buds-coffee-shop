import React from "react";

const Photo = ({ sectionClassName, text }) => {
  return (
    <section className={sectionClassName}>
      <h2 className="photo-section-text white-text">{text}</h2>
    </section>
  );
};

export default Photo;
