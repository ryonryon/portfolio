import React from "react";

import "./footer.scss";

const Footer = () => {
  const now = new Date();
  return (
    <footer className="footer">
      <p className="copyright">
        Copyright © {now.getFullYear()} Ryo Togashi. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
