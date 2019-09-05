import React from "react";
import { Link } from "components/Router";

import Logo from "../../assets/logo.png";
import "./header.scss";

const Header = () => (
  <nav>
    <div className="header box-shadow">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="logo image" />
      </Link>
      <div className="options">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </div>
    </div>
  </nav>
);

export default Header;
