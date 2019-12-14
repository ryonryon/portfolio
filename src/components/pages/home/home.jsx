import React from "react";
import { useRouteData } from "react-static";

import Header from "../../header/header";
import MainSection from "../../main-section/main-section";
import AboutSection from "../../about-section/about-section";
import SkillSection from "../../skill-section/skill-section";
import ProjectsSection from "../../projects-section/projects-section";
import Footer from "../../footer/footer";

import "./home.scss";

const Home = () => {
  const { projects } = useRouteData();

  if (projects) {
    return (
      <div>
        <Header />
        <MainSection />
        <AboutSection />
        <SkillSection />
        <ProjectsSection projects={projects} />
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

export default Home;
