import React from "react";

import avatarImage from "../assets/avatar.jpg";

import javascriptLogo from "../assets/tech-logo/javascript.png";
import typescriptLogo from "../assets/tech-logo/typescript.png"; // TODO
import html5Logo from "../assets/tech-logo/html-5.png";
import css3Logo from "../assets/tech-logo/css-3.png";
import bootstrapLogo from "../assets/tech-logo/bootstrap.png";
import csharpLogo from "../assets/tech-logo/c-sharp.png";
import javaLogo from "../assets/tech-logo/java.png";
import firebaseLogo from "../assets/tech-logo/firebase.png";
import githubLogo from "../assets/tech-logo/github.png";
import slackLogo from "../assets/tech-logo/slack.png";
import sketchLogo from "../assets/tech-logo/sketch.png";
import reactLogo from "../assets/tech-logo/react.png";
import dartLogo from "../assets/tech-logo/dart.png";
import flutterLogo from "../assets/tech-logo/flutter.png";
import pythonLogo from "../assets/tech-logo/python.png";
import swiftLogo from "../assets/tech-logo/swift.png";
import sqlLogo from "../assets/tech-logo/sql.png";

import "./about.scss";
import SkillSet from "../components/skill-set/skill-set";

export default () => (
  <div>
    <div className="about-page">
      <h2>WHOAMI</h2>
      <div className="introduction-section">
        <div className="image-box">
          <img className="avatar-image" src={avatarImage} alt="avatar" />
        </div>

        <div className="text-box">
          <p>
            Borned and raised in a small town with big-city work ethics, I am a
            self-taught software engineer, who is mature beyond my years, with
            six years of work experience. Having an awesome mentor plus
            self-employed experiences, the contractor sends me to Hokkaido as a
            representative for the project. My experience working with
            multinational helped shape my logical thinking.
          </p>
        </div>
      </div>
      <h2>SKILL</h2>
      <div className="skill-card card-shadow">
        <SkillSet skillLogoSrc={`${javascriptLogo}`} skillName="Javascript" />
        <SkillSet skillLogoSrc={`${typescriptLogo}`} skillName="Typescript" />
        <SkillSet skillLogoSrc={`${html5Logo}`} skillName="HTML5" />
        <SkillSet skillLogoSrc={`${css3Logo}`} skillName="CSS" />
        <SkillSet skillLogoSrc={`${bootstrapLogo}`} skillName="Bootstrap" />
        <SkillSet skillLogoSrc={`${reactLogo}`} skillName="React" />
        <SkillSet skillLogoSrc={`${dartLogo}`} skillName="Dart" />
        <SkillSet skillLogoSrc={`${flutterLogo}`} skillName="Flutter" />
        <SkillSet skillLogoSrc={`${pythonLogo}`} skillName="Python" />
        <SkillSet skillLogoSrc={`${javaLogo}`} skillName="Java" />
        <SkillSet skillLogoSrc={`${csharpLogo}`} skillName="C#" />
        <SkillSet skillLogoSrc={`${swiftLogo}`} skillName="Swift" />
        <SkillSet skillLogoSrc={`${sqlLogo}`} skillName="SQL" />
        <SkillSet skillLogoSrc={`${firebaseLogo}`} skillName="Firebase" />
        <br />
        <SkillSet skillLogoSrc={`${githubLogo}`} skillName="Github" />
        <SkillSet skillLogoSrc={`${slackLogo}`} skillName="Slack" />
        <SkillSet skillLogoSrc={`${sketchLogo}`} skillName="Sketch" />
      </div>
    </div>
  </div>
);
