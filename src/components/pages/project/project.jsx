import React from "react";
import { useRouteData } from "react-static";

const Project = () => {
  const { project } = useRouteData();

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <img src={`${project.windowImage}`} alt="image" />
    </div>
  );
};

export default Project;
