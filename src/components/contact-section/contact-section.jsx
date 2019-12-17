import React from "react";
import { useSiteData } from "react-static";

import "./contact-section.scss";

const ContactSection = () => {
  const { contact } = useSiteData();
  return (
    <section id="contact-section-id">
      <h1 className="section-title">Contact</h1>
      <div className="contact-section">
        <a href={contact.email}>
          <img
            className="contact-icon"
            src="/assets/footer-logo/facebook.png"
          />
        </a>
        <a href={contact.facebook}>
          <img
            className="contact-icon"
            src="/assets/footer-logo/facebook.png"
          />
        </a>
        <a href={contact.github}>
          <img className="contact-icon" src="/assets/footer-logo/github.png" />
        </a>
        <a href={contact.linkedIn}>
          <img
            className="contact-icon"
            src="/assets/footer-logo/linkedin.png"
          />
        </a>
        <a href={contact.resume}>
          <img className="contact-icon" src="/assets/footer-logo/resume.png" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
