import React, { useState } from "react";
import { validateForm } from "../data/formValidation";

const ContactForm = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validateForm(formValues);
    setFormErrors(errors);
    if (!Object.values(errors).some((error) => error)) {
      console.log("Submitted");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formErrors.name && <span className="error-span">{formErrors.name}</span>}
      <input
        type="text"
        id="name"
        placeholder="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      {formErrors.email && (
        <span className="error-span">{formErrors.email}</span>
      )}
      <input
        type="email"
        id="email"
        placeholder="email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      {formErrors.message && (
        <span className="error-span">{formErrors.message}</span>
      )}
      <textarea
        id="message"
        name="message"
        placeholder="message"
        rows="12"
        value={formValues.message}
        onChange={handleInputChange}
      />
      <button className="form-button white-text" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
