import React from "react";
import backgroundImage from "../assets/background.jpg";
import Header from "../components/header/header";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";

import "./index.scss";

export default () => (
  <div>
    <Header />
    <div className="main-page">
      <img className="main-image" src={backgroundImage} alt="main image" />
      <div className="text-content">
        <h2>
          Hi. I’m a Software Developer from Japan. <br />I want to help you to
          build the product.
        </h2>
      </div>
    </div>
    <ContactMe />
    <Footer />
  </div>
);
