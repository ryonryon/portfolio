import React from "react";
import { useRouteData } from "react-static";

import Header from "../../header/header";
import Footer from "../../footer/footer";

import "./project.scss";

const Project = () => {
  const { project } = useRouteData();

  if (project !== undefined) {
    return (
      <div>
        <Header />
        <section className="project-main">
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <a href={project.url}>{project.url}</a>
          <br />
          <a href={project.github}>{project.github}</a>
          <p>{project.technologyUsed.join(" / ")}</p>
          <img src={`${project.windowImage.fields.file.url}`} alt="image" />
        </section>
        <Footer />
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
