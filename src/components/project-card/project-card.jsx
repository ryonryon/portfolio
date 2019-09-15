import React, { Component } from "react";

import "./project-card.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="project-card box-shadow"
        onClick={() => {
          console.log("clicked");
        }}
      >
        card
      </div>
    );
  }
}

export default ProjectCard;
