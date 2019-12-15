import React from "react";

import SkillSet from "../skill-set/skill-set";

import "./skill-section.scss";

class SkillSection extends React.Component {
  render = () => (
    <section id="skill-section-id">
      <h1 className="section-title">Skill</h1>
      <div className="skill-section">
        <div className="skill-pane">
          <SkillSet
            skillLogoSrc="/assets/tech-logo/javascript.svg"
            skillName="Javascript"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/typescript.svg"
            skillName="Typescript"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/html-5.svg"
            skillName="HTML5"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/css-3.svg"
            skillName="CSS"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/bootstrap.svg"
            skillName="Bootstrap"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/react.svg"
            skillName="React"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/nodejs.svg"
            skillName="Nodejs"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/dart.svg"
            skillName="Dart"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/flutter.svg"
            skillName="Flutter"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/python.svg"
            skillName="Python"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/java.svg"
            skillName="Java"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/c-sharp.svg"
            skillName="C#"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/graphql.svg"
            skillName="GraphQL"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/database.svg"
            skillName="SQL"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/firebase.svg"
            skillName="Firebase"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/webpack.svg"
            skillName="Webpack"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/babel.svg"
            skillName="Babel"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/github.svg"
            skillName="Github"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/slack.svg"
            skillName="Slack"
          />
          <SkillSet
            skillLogoSrc="/assets/tech-logo/sketch.svg"
            skillName="Sketch"
          />
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
