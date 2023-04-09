import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  const facebookUrl = "https://www.facebook.com/budscoffeebar/";
  const twitterUrl = "https://twitter.com/budscoffeebar";
  const instaUrl = "https://www.instagram.com/budscoffeebar/?hl=en";

  const handleRedirect = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="social-link-container">
      <FontAwesomeIcon
        icon={faFacebook}
        className="social-link"
        onClick={() => handleRedirect(facebookUrl)}
      />
      <FontAwesomeIcon
        icon={faInstagram}
        className="social-link"
        onClick={() => handleRedirect(instaUrl)}
      />
      <FontAwesomeIcon
        icon={faTwitter}
        className="social-link"
        onClick={() => handleRedirect(twitterUrl)}
      />
    </div>
  );
};

export default SocialLinks;
