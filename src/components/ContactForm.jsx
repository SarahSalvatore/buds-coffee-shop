import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // send form data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        id="email"
        placeholder="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        id="message"
        name="message"
        placeholder="message"
        rows="12"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="white-text" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
