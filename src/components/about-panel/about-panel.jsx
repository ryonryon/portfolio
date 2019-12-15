import React from "react";

import "./about-panel.scss";

const AboutPanel = ({ icon, title, description }) => (
  <div className="about-panel">
    <div className="panel-image">
      <img src="/assets/hexagon.png" alt="hexagon" />
      <img className="panel-icon" src={icon} alt="icon" />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default AboutPanel;
