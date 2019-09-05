import React from "react";
import { Link } from "components/Router";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.scss";

const Header = () => (
  <nav>
    <div className="header">
      <Link className="logo-container" to="/">
        {/* <Logo className="logo" /> */}Home
      </Link>
      <div className="options">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </div>
    </div>
  </nav>
);

export default Header;
