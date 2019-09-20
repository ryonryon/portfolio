import React from "react";

import SkillSet from "../components/skill-set/skill-set";
import Header from "../components/header/header";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";

import "./skill.scss";

class skill extends React.Component {
  render = () => (
    <div>
      <Header />
      <div className="skill-page">
        <h2 className="title">SKILL</h2>
        <div className="skill-card card-shadow">
          <SkillSet
            skillLogoSrc="/assets/tech-logo/javascript.png"
            skillName="Javascript"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/typescript.png"
            skillName="Typescript"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/html-5.png"
            skillName="HTML5"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/css-3.png"
            skillName="CSS"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/bootstrap.png"
            skillName="Bootstrap"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/react.png"
            skillName="React"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/nodejs.png"
            skillName="Nodejs"
          />
          <br />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/dart.png"
            skillName="Dart"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/flutter.png"
            skillName="Flutter"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/python.png"
            skillName="Python"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/java.png"
            skillName="Java"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/c-sharp.png"
            skillName="C#"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/swift.png"
            skillName="Swift"
          />
          <SkillSet skillLogoSrc="/assets/tech-logo/sql.png" skillName="SQL" />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/firebase.png"
            skillName="Firebase"
          />
          <br />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/webpack.png"
            skillName="Webpack"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/babel.png"
            skillName="Babel"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/github.png"
            skillName="Github"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/slack.png"
            skillName="Slack"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/sketch.png"
            skillName="Sketch"
          />
        </div>
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default skill;
