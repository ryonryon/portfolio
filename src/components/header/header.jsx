import React from "react";

import "./header.scss";

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <a href="https://ryotogashi.com">
        <h1>Ryo Togashi</h1>
      </a>
      <div className="options">
        <a href="https://ryotogashi.com#about">About</a>
        <a href="https://ryotogashi.com#skill">Skill</a>
        <a href="https://ryotogashi.com#projects">Projects</a>
        <a href="https://ryotogashi.com#contact">Contact</a>
      </div>
    </div>
  </nav>
);

export default Header;
