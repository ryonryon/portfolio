import React from "react";

import avatarImage from "../assets/avatar.png";

import "./about.scss";

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
        <p>
          Skill skill Skill skill Skill skill Skill skill Skill skill Skill
          skill Skill skill Skill skill Skill skill Skill skill Skill skill
          Skill skill Skill skill Skill skill Skill skill Skill skill Skill
          skill Skill skill Skill skill Skill skill Skill skill Skill skill
          Skill skill Skill skill Skill skill Skill skill Skill skill Skill
          skill Skill skill Skill skill Skill skill Skill skill Skill skill
        </p>
      </div>
    </div>
  </div>
);
