import React from "react";
import { useRouteData } from "react-static";

import Header from "../../header/header";
import Footer from "../../footer/footer";
import ProjectDetailRow from "../../project-datail-row/project-datail-row";

import "./project.scss";

const Project = () => {
  const { project } = useRouteData();
  return (
    <>
      <Header />
      <section className="project-main">
        <div className="image">
          <img src={`${project.windowImage}`} alt="image" />
        </div>
        <hr />
        <div className="detail">
          <div className="left-pane">
            <ProjectDetailRow title="Name" value={project.name} />
            <ProjectDetailRow title="URL" value={project.url} linked={true} />
            <ProjectDetailRow
              title="Github URL"
              value={project.github}
              linked={true}
            />
            <ProjectDetailRow
              title="Technology Used"
              value={project.technologyUsed.join(" / ")}
            />
          </div>
          <div className="right-pane">
            <p>{project.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Project;
