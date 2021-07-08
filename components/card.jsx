import React from "react";

export const IfcjsCard = (props) => {
  
  const title = props.title ? (
    <div className="card__header">
      <h3>{props.title}</h3>
    </div>
  ) : (
    ""
  );

  return (
    <div className="card-demo" style={{ margin: "2rem" }}>
      <div className="card">
        {title}
        <div className="card__body">
          <p> {props.children} </p>
        </div>
      </div>
    </div>
  );
};
