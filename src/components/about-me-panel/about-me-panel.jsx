import React from "react";

import "./about-me-panel.scss";

const AboutMePanel = ({ icon, title, description }) => (
  <div className="about-me-panel">
    <div className="panel-me-image">
      <img src={icon} alt="icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default AboutMePanel;
