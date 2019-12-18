import React from "react";

import ProjectCard from "../project-card/project-card";

import "./projects-section.scss";

const ProjectsSection = props => {
  const { projects } = props;

  return (
    <section id="projects-section-id">
      <h1 className="section-title">Projects</h1>
      <div className="projects-section">
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard key={project.id} projectInfo={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
