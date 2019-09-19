import React from "react";
import { Link } from "components/Router";

import "./header.scss";

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <Link className="logo-container" to="/">
        <img src="/assets/logo.png" alt="logo image" />
      </Link>
      <div className="options">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </div>
  </nav>
);

export default Header;
