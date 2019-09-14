import React, { Component } from "react";

import "./project-card.scss";

// class ProjectCard extends Component {
//   constructor(props) {
//     super(props);
//     this.addActiveClass = this.addActiveClass.bind(this);
//     this.state = {
//       active: false
//     };
//   }

//   toggleActiveClass() {
//     console.log("clicked");
//     const currentState = this.state.active;
//     this.setState({ active: !currentState });
//   }

//   render() {
//     return (
//       <div className="project-card box-shadow" onClick={toggleActiveClass}>
//         card
//       </div>
//     );
//   }
// }

const ProjectCard = () => (
  <div
    className="project-card box-shadow"
    onClick={() => {
      console.log("clicked");
    }}
  >
    card
  </div>
);
export default ProjectCard;
