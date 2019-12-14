import React from "react";
import { useRouteData } from "react-static";

import ProjectCard from "../project-card/project-card";

import "./projects-section.scss";

const ProjectsSection = () => {
  const { projects } = useRouteData();

  if (projects) {
    return (
      <section id="projects-section-id" className="projects-section">
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard key={project.id} projectInfo={project} />
          ))}
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
