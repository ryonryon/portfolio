import React from "react";

import "./main-section.scss";

class MainSection extends React.Component {
  render = () => (
    <section className="main-section">
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
    </section>
  );
}

export default MainSection;
