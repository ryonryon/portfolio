import React from "react";

import ProjectCard from "../components/project-card/project-card";
import Header from "../components/header/header";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";

import "./projects.scss";

class projects extends React.Component {
  render = () => (
    <div>
      <Header />
      <div className="projects-page">
        <h2 className="title">PROJECTS</h2>
        <div className="project-card-box">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default projects;
