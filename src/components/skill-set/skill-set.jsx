import React from "react";

import "./skill-set.scss";

const SkillSet = ({ skillName, skillLogoSrc }) => (
  <div className="skill-set">
    <img src={`${skillLogoSrc}`} />
    <p>{skillName}</p>
  </div>
);

export default SkillSet;
