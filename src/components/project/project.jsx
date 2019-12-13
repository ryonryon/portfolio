import React from "react";

// import "./project.scss";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>{`${this.props.is404}`}</div>;
  }
}

export default Project;
