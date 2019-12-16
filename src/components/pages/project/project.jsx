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
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Name</strong>
                    </td>
                    <td>{project.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>URL</strong>
                    </td>
                    <td>
                      <a href={project.url}>{project.url}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Github URL</strong>
                    </td>
                    <td>
                      <a href={project.github}>{project.github}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Technology Used</strong>
                    </td>
                    <td>{project.technologyUsed.join(" / ")}</td>
                  </tr>
                </tbody>
              </table>
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
