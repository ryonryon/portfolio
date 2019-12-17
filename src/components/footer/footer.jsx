import React from "react";
import { useSiteData } from "react-static";

import "./footer.scss";

const Footer = () => {
  const { contact } = useSiteData();
  const now = new Date();
  return (
    <footer className="footer">
      <a href={contact.facebook}>
        <img className="contact-icon" src="/assets/footer-logo/facebook.png" />
      </a>
      <a href={contact.github}>
        <img className="contact-icon" src="/assets/footer-logo/github.png" />
      </a>
      <a href={contact.linkedIn}>
        <img className="contact-icon" src="/assets/footer-logo/linkedin.png" />
      </a>
      <a href={contact.resume}>
        <img className="contact-icon" src="/assets/footer-logo/resume.png" />
      </a>
      <p className="copyright">
        Copyright © {now.getFullYear()} Ryo Togashi. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
