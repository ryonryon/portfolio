import React from "react";

import facebookIcon from "../../assets/footer-logo/facebook.png";
import githubIcon from "../../assets/footer-logo/github.png";
import linkedinIcon from "../../assets/footer-logo/linkedin.png";
import resumeIcon from "../../assets/footer-logo/resume.png";

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <a href="https://www.facebook.com/ryotogashi304">
      <img className="contact-icon" src={`${facebookIcon}`} />
    </a>
    <a href="https://github.com/ryotogashi">
      <img className="contact-icon" src={`${githubIcon}`} />
    </a>
    <a href="https://www.linkedin.com/in/ryotogashi/">
      <img className="contact-icon" src={`${linkedinIcon}`} />
    </a>
    <a
      href={`https://firebasestorage.googleapis.com/v0/b/portfolio-ryotogashi.appspot.com/o/Ryo%20Togashi%20Resume.pdf?alt=media&token=2c64ffc6-61b5-471c-8ab1-7a57e40adfae`}
    >
      <img className="contact-icon" src={`${resumeIcon}`} />
    </a>
    <p className="copyright">
      Copyright © 2019 Ryo Togashi. All Right Reserved.
    </p>
  </div>
);

export default Footer;
