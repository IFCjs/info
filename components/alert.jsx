import React from "react";
import { IfcjsIcon } from "./icon";

export const IfcjsAlert = (props) => (
  <div
    className="alert alert--primary"
    role="alert"
    style={{ margin: "2rem" }}
  >
    <div style={{ marginBottom: "2rem" }}>
      <IfcjsIcon>lightbulb</IfcjsIcon> 
    </div>
    {props.children}
  </div>
);
