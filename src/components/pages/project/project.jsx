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
          <div className="image">
            <img src={`${project.windowImage}`} alt="image" />
          </div>
          <hr />
          <div className="detail">
            <div className="left-pane">
              <div className="row">
                <div className="col-title">
                  <strong>Name</strong>
                </div>
                <div className="col-val">{project.name}</div>
              </div>
              <hr />
              <div className="row">
                <div className="col-title">
                  <strong>URL</strong>
                </div>
                <div className="col-val">
                  <a href={project.url}>{project.url}</a>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-title">
                  <strong>Github URL</strong>
                </div>
                <div className="col-val">
                  <a href={project.github}>{project.github}</a>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-title">
                  <strong>Technology Used</strong>
                </div>
                <div className="col-val">
                  {project.technologyUsed.join(" / ")}
                </div>
              </div>
              <hr />
            </div>
            <div className="right-pane">
              <p>{project.description}</p>
            </div>
          </div>
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
