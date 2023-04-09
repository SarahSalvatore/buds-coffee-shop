export const validateName = (name) => {
  return name ? "" : "Please enter your name";
};

export const validateEmail = (email) => {
  return email
    ? /\S+@\S+\.\S+/.test(email)
      ? ""
      : "Please enter a valid email address"
    : "Please enter your email address";
};

export const validateMessage = (message) => {
  return message ? "" : "Please enter a message";
};

export const validateForm = ({ name, email, message }) => {
  const errors = {};
  errors.name = validateName(name);
  errors.email = validateEmail(email);
  errors.message = validateMessage(message);
  return errors;
};
