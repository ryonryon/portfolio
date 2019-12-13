import React from "react";

import ProjectCard from "../../project-card/project-card";
import Header from "../../header/header";
import Footer from "../../footer/footer";

import "./projects.scss";

import { useRouteData } from "react-static";

const Projects = () => {
  const { projects } = useRouteData();

  if (projects) {
    return (
      <div>
        <Header />
        <div className="projects-page">
          <div className="project-list">
            {projects.map(project => (
              <ProjectCard key={project.id} projectInfo={project} />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <h1>404 - Oh no's! We couldn't find that page</h1>
    </div>
  );
};

export default Projects;
