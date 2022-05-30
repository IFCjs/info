import React from "react";
import { IfcIconLink } from "../IconLink/IconLink";
import styles from "./InfoCard.module.css";

export const IfcCard = (props) => {
  const title = props.title ? (
    <div className="card__header">
      <span className={styles.iconContainer}>
        {props.icon && (
          <IfcIconLink icon={props.icon} link={props.link} active="true" />
        )}
      </span>
      <h3 className={props.icon && styles.titleOffset}>{props.title}</h3>
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
