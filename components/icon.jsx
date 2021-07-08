import React from "react";
import Icon from "@material-ui/core/Icon";

export const IfcjsIcon = (props) => (
  <span style={{position: "absolute", margin: "0 0.5rem 0 0.5rem"}}>
    <Icon>{props.children}</Icon>
  </span>
);
