import React from "react";
import { Link } from "components/Router";
import logo from "../../assets/logo.png";

import "./header.scss";

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo image" />
      </Link>
      <div className="options">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skill">Skill</Link>
        <Link to="/projects">Projects</Link>
        {/* <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link> */}
      </div>
    </div>
  </nav>
);

export default Header;
