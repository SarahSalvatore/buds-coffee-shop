import React from "react";

const Photo = ({ sectionClassName, text, buttonText, buttonAction }) => {
  return (
    <section className={sectionClassName}>
      <h2 className="photo-section-text white-text">{text}</h2>
      {buttonText && (
        <button className="photo-button white-text" onClick={buttonAction}>
          {buttonText}
        </button>
      )}
    </section>
  );
};

export default Photo;
