import React from "react";

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <a href="https://www.facebook.com/ryotogashi304">
      <img className="contact-icon" src="/assets/footer-logo/facebook.png" />
    </a>
    <a href="https://github.com/ryotogashi">
      <img className="contact-icon" src="/assets/footer-logo/github.png" />
    </a>
    <a href="https://www.linkedin.com/in/ryotogashi/">
      <img className="contact-icon" src="/assets/footer-logo/linkedin.png" />
    </a>
    <a
      href={`https://firebasestorage.googleapis.com/v0/b/portfolio-ryotogashi.appspot.com/o/Ryo%20Togashi%20Resume.pdf?alt=media&token=0a789015-4d63-471f-9b49-b9d3779709ed`}
    >
      <img className="contact-icon" src="/assets/footer-logo/resume.png" />
    </a>
    <p className="copyright">
      Copyright © 2019 Ryo Togashi. All Right Reserved.
    </p>
  </div>
);

export default Footer;
