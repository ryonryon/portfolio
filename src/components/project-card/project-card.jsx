import React from "react";

import "./project-card.scss";

const ProjectCard = props => {
  const { projectInfo } = props;
  return (
    <div className="project-card">
      <a className="button-a" href={`/project/${projectInfo.id}`}>
        <figure>
          <img
            src={projectInfo.windowImage}
            alt={`project image${projectInfo.id}`}
          />
          <figcaption>
            <h3>{projectInfo.name}</h3>
            <p>{`${projectInfo.technologyUsed.join(" / ")}`}</p>
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default ProjectCard;
