import React from "react";

import Header from "../components/header/header";
import ContactMe from "../components/contact-me/contact-me";
import Footer from "../components/footer/footer";

import "./about.scss";

class about extends React.Component {
  render = () => (
    <div>
      <Header />
      <div className="about-page">
        <h2 className="title">WHOAMI</h2>
        <div className="column">
          <div className="text">
            <p>
              I believe that constant learning and self-improvement are basis
              for a healthy life and a succesful career. With this in mind,
              studying and reading books are some of the activities that consume
              most of my daily life. Enhancing interpersonal skills and finding
              humanity are also good ways to evolve as a person and a
              professional, so meeting friends and co-workers have a big
              importance for me
            </p>
          </div>
          <div className="image">
            <img
              className="avatar-image"
              src="/assets/avatar1.jpg"
              alt="avatar"
            />
          </div>
        </div>
        <div className="column">
          <div className="image">
            <img
              className="avatar-image"
              src="/assets/avatar.jpg"
              alt="avatar"
            />
          </div>

          <div className="text">
            <p>
              Borned and raised in a small town with big-city work ethics, I am
              a self-taught software engineer, who is mature beyond my years,
              with six years of work experience. Having an awesome mentor plus
              self-employed experiences, the contractor sends me to Hokkaido as
              a representative for the project. My experience working with
              multinational helped shape my logical thinking.
            </p>
          </div>
        </div>
      </div>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default about;