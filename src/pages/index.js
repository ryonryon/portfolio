import React from "react";
import backgroundImage from "../assets/background.jpg";

import "./index.scss";

export default () => (
  <div className="main-page">
    <div className="main-div">
      <img className="main-image" src={backgroundImage} alt="main image" />
      <div className="text-content">
        <div className="text">
          Hi. I’m a Software Developer from Japan. <br />I want to help you to
          build the product.
        </div>
      </div>
    </div>
  </div>
);
