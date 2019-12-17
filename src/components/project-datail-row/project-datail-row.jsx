import React from "react";

import "./project-datail-row.scss";

const ProjectDetailRow = ({ title, value, linked }) => (
  <>
    <div className="row">
      <div className="col-title">
        <strong>{title}</strong>
      </div>
      {linked ? (
        <div className="col-val">
          <a href={value}>{value}</a>
        </div>
      ) : (
        <div className="col-val">{value}</div>
      )}
    </div>
    <hr />
  </>
);

export default ProjectDetailRow;
