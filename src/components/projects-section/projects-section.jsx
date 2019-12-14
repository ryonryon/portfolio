import React from "react";

import ProjectCard from "../project-card/project-card";

import "./projects-section.scss";

class ProjectsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects
    };
  }

  render = () => (
    <div id="projects-section" className="projects-page">
      <div className="project-list">
        {this.state.projects.map(project => (
          <ProjectCard key={project.id} projectInfo={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
