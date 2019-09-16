import React, { Component } from "react";

import "./project-card.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onClickHandler = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    return (
      <div
        className={`project-card box-shadow ${
          this.state.isActive ? "active-card" : ""
        }`}
        onClick={this.onClickHandler}
      >
        card
      </div>
    );
  }
}

export default ProjectCard;
