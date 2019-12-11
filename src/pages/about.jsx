import React from "react";

import Header from "../components/header/header";
// import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";
import AboutMePanel from "../components/about-me-panel/about-me-panel";
import AboutPanel from "../components/about-panel/about-panel";
// import { getAboutInfo } from "../services/contentful";

import "./about.scss";

class about extends React.Component {
  render = () => {
    return (
      <>
        <Header />
        <div className="about-page">
          <div className="about-left-page">
            <AboutMePanel
              icon="/assets/avatar.png"
              title="Ryo Togashi"
              description="I am a Full-Stack Developer from Japan based in Vancouver. I would be happy to talk about new oppotunities and your ideas. Let’s talk!"
            />
          </div>
          <div className="about-right-pane">
            <AboutPanel
              icon="/assets/collaborative.png"
              title="Collaborative"
              description="Willing to give an advice and always having positive behavior as a teammember."
            />
            <AboutPanel
              icon="/assets/clean.png"
              title="Clean"
              description="Variable to Class name, structure even on the desk, my work should be clean and arganized."
            />
            <AboutPanel
              icon="/assets/smile.png"
              title="Smile"
              description="It is my priority for working with people. Being happy while doing a job makes us successful."
            />
            <AboutPanel
              icon="/assets/race-flag.png"
              title="Initiative"
              description="Having autonomy and great leadership to guide a team and cherish them."
            />
          </div>
        </div>
        <Footer />
      </>
    );
  };
}

export default about;
