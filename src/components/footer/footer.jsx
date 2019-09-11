import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

import "./footer.scss";

const Footer = () => (
  <div className="footer">
    <a href="https://www.facebook.com/ryotogashi304" className="contact-icon">
      <FontAwesomeIcon icon={["fab", "facebook-square"]} />
    </a>
    <a href="https://github.com/ryotogashi" className="contact-icon">
      <FontAwesomeIcon icon={["fab", "linkedin"]} />
    </a>
    <a href="https://github.com/ryotogashi" className="contact-icon">
      <FontAwesomeIcon icon={["fab", "github-square"]} />
    </a>
    <a
      href="https://drive.google.com/file/d/1_PvAc43SeKEHPmmEPw-qlDFBtcMRu1HA/view"
      className="contact-icon"
    >
      <FontAwesomeIcon icon={["fas", "file"]} />
    </a>
    <p className="copyright">
      Copyright © 2019 Ryo Togashi. All Right Reserved.
    </p>
  </div>
);

export default Footer;
