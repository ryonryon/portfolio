import React from "react";
import { useRouteData } from "react-static";

import ProjectCard from "../project-card/project-card";

import "./projects-section.scss";

const ProjectsSection = () => {
  const { projects } = useRouteData();

  if (projects) {
    return (
      <div id="projects-section-id" className="projects-section">
        <div className="project-list">
          {projects.map(project => (
            <ProjectCard key={project.id} projectInfo={project} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1>404 - Oh no's! We couldn't find this section</h1>
    </div>
  );
};

export default ProjectsSection;
