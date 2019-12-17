import React from "react";

import "./contact-logo.scss";

const ContactLogo = ({ url, img }) => (
  <a href={url}>
    <img className="contact-icon" src={img} />
  </a>
);

export default ContactLogo;
