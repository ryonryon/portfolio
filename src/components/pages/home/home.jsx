import React from "react";

import Header from "../../header/header";
import MainSection from "../../main-section/main-section";
import AboutSection from "../../about-section/about-section";
import SkillSection from "../../skill-section/skill-section";
import ProjectsSection from "../../projects-section/projects-section";
import Footer from "../../footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <MainSection />
      <AboutSection />
      <SkillSection />
      <ProjectsSection />
      <Footer />
    </>
  );
};

export default Home;
