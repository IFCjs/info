import React from "react";
import styles from "./Alert.module.css";
import { IfcIconLink } from "../IconLink/IconLink";

export const IfcAlert = (props) => (
  <div className="alert alert--primary" role="alert" style={{ margin: "2rem" }}>
    <div className={styles.icon}>
      <IfcIconLink icon={"💡"} active={"true"} />
    </div>
    {props.children}
  </div>
);
