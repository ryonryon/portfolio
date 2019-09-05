import React from "react";
import backgroundImage from "../assets/background.png";

import "./index.scss";

export default () => (
  <div className="main-container">
    <div className="main-image">
      <img
        className="background-image"
        src={backgroundImage}
        alt="background image"
      />
    </div>
    <div className="main-content">
      <h2 className="main-text">
        Hi. I’m a Software Developer from Japan. <br />I want to help you to
        build the product.
      </h2>
    </div>
  </div>
);
