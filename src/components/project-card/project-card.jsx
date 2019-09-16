import React, { Component } from "react";

import "./project-card.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false
    };
  }

  onClickHandler() {
    console.log("clicked");
    this.setState({
      isActive: !isActive
    });

    if (this.state.isActive) {
      console.log("active");
    } else {
      console.log("inactive");
    }
  }

  render() {
    return (
      <div className={`project-card box-shadow`} onClick={this.onClickHandler}>
        card
      </div>
    );
  }
}

export default ProjectCard;
