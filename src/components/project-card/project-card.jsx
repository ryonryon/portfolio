import React, { Component } from "react";

import "./project-card.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="project-card">
        <figure>
          <img
            src={this.props.projectInfo.windowImage}
            alt={`project image${this.props.projectInfo.id}`}
          />
          <figcaption>
            <h3>{this.props.projectInfo.name}</h3>
            <p>{`${this.props.projectInfo.technologyUsed.join(" / ")}`}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default ProjectCard;
