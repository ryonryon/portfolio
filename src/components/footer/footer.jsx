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
    <a href="https://github.com/ryotogashi">
      <img className="contact-icon" src={`${linkedinIcon}`} />
    </a>
    <a href="https://drive.google.com/file/d/1_PvAc43SeKEHPmmEPw-qlDFBtcMRu1HA/view">
      <img className="contact-icon" src={`${resumeIcon}`} />
    </a>
    <p className="copyright">
      Copyright © 2019 Ryo Togashi. All Right Reserved.
    </p>
  </div>
);

export default Footer;
