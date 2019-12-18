import React from "react";

import "./header.scss";

const onClick = () => {
  const element = document.getElementsByClassName("burger-menu-options");
  element[0].classList.toggle("barger-menue-options-inactive");
  element[0].classList.toggle("barger-menue-options-active");
};

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <a href="https://ryotogashi.com">
        <h1>Ryo Togashi</h1>
      </a>
      <div className="options">
        <div className="burger-menu" onClick={onClick}>
          <span></span>
        </div>
        <a href="https://ryotogashi.com#about">About</a>
        <a href="https://ryotogashi.com#skill">Skill</a>
        <a href="https://ryotogashi.com#projects">Projects</a>
        <a href="https://ryotogashi.com#contact">Contact</a>
      </div>
      <div className="burger-menu-options barger-menue-options-inactive">
        <a href="https://ryotogashi.com#about" onClick={onClick}>
          About
        </a>
        <a href="https://ryotogashi.com#skill" onClick={onClick}>
          Skill
        </a>
        <a href="https://ryotogashi.com#projects" onClick={onClick}>
          Projects
        </a>
        <a href="https://ryotogashi.com#contact" onClick={onClick}>
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
