import React from "react";

import facebookIcon from "../assets/facebook.png";

library.add(fab, fas);

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <a href="https://www.facebook.com/ryotogashi304" className="contact-icon">
      <img className="" src={`${facebookIcon}`} />
    </a>
    <a href="https://github.com/ryotogashi" className="contact-icon">
      linkedin
    </a>
    <a href="https://github.com/ryotogashi" className="contact-icon">
      github
    </a>
    <a
      href="https://drive.google.com/file/d/1_PvAc43SeKEHPmmEPw-qlDFBtcMRu1HA/view"
      className="contact-icon"
    >
      resume
    </a>
    <p className="copyright">
      Copyright © 2019 Ryo Togashi. All Right Reserved.
    </p>
  </div>
);

export default Footer;
