import React from "react";

import "./skill-set.scss";

const SkillSet = ({ skillName, skillLogoSrc }) => (
  <div className="skill-set">
    <img className="skill-logo" src={`${skillLogoSrc}`} />
    <span className="skill-name">{skillName}</span>
  </div>
);

export default SkillSet;
