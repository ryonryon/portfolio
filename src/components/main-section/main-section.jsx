import React from "react";

import "./main-section.scss";

class MainSection extends React.Component {
  render = () => (
    <div>
      <div className="main-page">
        <img
          className="main-image"
          src="/assets/background.jpg"
          alt="main image"
        />
        <div className="text-content">
          <h2>
            Hi. I’m a Software Developer from Japan. <br />I want to help you to
            build the product.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
