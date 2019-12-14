import React from "react";
import { Link } from "components/Router";

import "./header.scss";

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <Link to="/">
        <h1>Ryo Togashi</h1>
      </Link>
      <div className="options">
        <a href="#about-section">About</a>
        <a href="#skill-section">Skill</a>
        <a href="#projects-section">Projects</a>
      </div>
    </div>
  </nav>
);

export default Header;
