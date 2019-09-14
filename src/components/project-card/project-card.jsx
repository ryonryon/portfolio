import React from "react";

import "./project-card.scss";

const ProjectCard = () => (
  <div
    className="project-card box-shadow"
    onClick={() => console.log("clicked")}
  >
    card
  </div>
);

export default ProjectCard;
