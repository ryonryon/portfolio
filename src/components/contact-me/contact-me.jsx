import React from "react";

import "./contact-me.scss";

const ContactMe = () => (
  <div className="contact-me" onClick={() => console.log(`clicked`)}>
    <a href="mailto:ryo.togashi.ca@gmail.com">
      <img
        className="contact-me-image"
        src="/assets/contact-me.png"
        alt="contact me"
      />
    </a>
  </div>
);

export default ContactMe;
