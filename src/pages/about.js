import React from "react";

import avatarImage from "../assets/avatar.jpg";
import avatar1Image from "../assets/avatar1.jpg";

import "./about.scss";

export default () => (
  <div className="about-page">
    <h2>WHOAMI</h2>
    <div className="introduction-section">
      <div className="text-box">
        <p>
          Lorem ipsum dolor sit amet, vehicula a. Ultricies nec, velit tellus.
          Lectus id, in consequat, ridiculus porttitor vel. Massa sit, quam non
          wisi. Quis pellentesque lacus, quisque magna, vestibulum amet. Odio
          lectus accumsan, augue elementum et.
        </p>
      </div>
      <div className="image-box1">
        <img className="avatar-image" src={avatar1Image} alt="avatar" />
      </div>
    </div>
    <div className="introduction-section">
      <div className="image-box">
        <img className="avatar-image" src={avatarImage} alt="avatar" />
      </div>

      <div className="text-box">
        <p>
          Borned and raised in a small town with big-city work ethics, I am a
          self-taught software engineer, who is mature beyond my years, with six
          years of work experience. Having an awesome mentor plus self-employed
          experiences, the contractor sends me to Hokkaido as a representative
          for the project. My experience working with multinational helped shape
          my logical thinking.
        </p>
      </div>
    </div>
  </div>
);
