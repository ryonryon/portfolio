import React from "react";

import ProjectCard from "../project-card/project-card";

import "./projects-section.scss";

const ProjectsSection = props => {
  const { projects } = props;

  if (projects) {
    return (
      <section id="projects-section-id">
        <div className="projects-section">
          <h1 className="section-title">Projects</h1>
          <div className="project-list">
            {projects.map(project => (
              <ProjectCard key={project.id} projectInfo={project} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h1>404 - Oh no's! We couldn't find this section</h1>
    </section>
  );
};

export default ProjectsSection;
