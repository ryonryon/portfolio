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
        <a href="https://ryotogashi.com#about-section-id">About</a>
        <a href="https://ryotogashi.com#skill-section-id">Skill</a>
        <a href="https://ryotogashi.com#projects-section-id">Projects</a>
        <a href="https://ryotogashi.com#contact-section-id">Contact</a>
      </div>
    </div>
  </nav>
);

export default Header;
