import React from "react";
import { useRouteData } from "react-static";

const Project = () => {
  const { project } = useRouteData();

  return (
    <div>
      <h1>{!project ? "" : project.name}</h1>
      <p>{!project ? "" : project.description}</p>
      <img src={`${!project ? "" : project.windowImage}`} alt="image" />
    </div>
  );
};

export default Project;
