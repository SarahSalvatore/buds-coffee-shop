import React from "react";
import ContactForm from "./ContactForm";
import hours from "../data/hours";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-form-container">
        <ContactForm />
      </div>
      <div className="contact-text-container">
        <h2 className="section-heading orange-text">Contact</h2>
        <p className="paragraph-text white-text">
          If you have any questions or feedback for us, please don't hesitate to
          get in touch! You can contact us by filling out our online contact
          form. We're always grateful to hear from our customers and are
          committed to providing the best possible service.
        </p>
        <h3 className="small-heading orange-text">Location</h3>
        <p className="paragraph-text white-text">
          1966 Queen St E, Toronto, ON M4L 1H8
        </p>
        <h3 className="small-heading orange-text">Hours</h3>
        <div className="hours-container">
          {hours.map((weekday) => {
            return (
              <div key={weekday.id}>
                <div className="hours-item">
                  <p>{weekday.day}</p>
                  <p>{weekday.times}</p>
                </div>
                <hr className="hours-hr" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
