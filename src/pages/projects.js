import React from "react";

import ProjectCard from "../components/project-card/project-card";

import "./projects.scss";

export default () => (
  <div className="projects-page">
    <h2>PROJECTS</h2>
    <div className="project-card-box">
      <ProjectCard />
    </div>
  </div>
);
