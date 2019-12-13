import React from "react";
import { useRouteData } from "react-static";

const Project = () => {
  const { project } = useRouteData();

  if (project) {
    return (
      <div>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <img src={`${project.windowImage}`} alt="image" />
      </div>
    );
  }

  return (
    <div>
      <h1>404 - Oh no's! We couldn't find that page</h1>
    </div>
  );
};

export default Project;
