import React from "react";
import { useSiteData } from "react-static";

import ContactLogo from "../contact-logo/contact-logo";

import "./contact-section.scss";

const ContactSection = () => {
  const { contact } = useSiteData();
  return (
    <section id="contact">
      <h1 className="section-title">Contact</h1>
      <div className="contact-section">
        <ContactLogo img="/assets/footer-logo/email.svg" url={contact.email} />
        <ContactLogo
          img="/assets/footer-logo/facebook.svg"
          url={contact.facebook}
        />
        <ContactLogo
          img="/assets/footer-logo/github.svg"
          url={contact.github}
        />
        <ContactLogo
          img="/assets/footer-logo/linkedin.svg"
          url={contact.linkedIn}
        />
        <ContactLogo
          img="/assets/footer-logo/resume.svg"
          url={contact.resume}
        />
      </div>
    </section>
  );
};

export default ContactSection;
