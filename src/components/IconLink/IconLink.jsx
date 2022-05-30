import React from "react";
import styles from "./IconLink.module.css";

export const IfcIconLink = (props) => {
  const visibility = " " + (props.active ? styles.visible : styles.hidden);

  const iconClass = styles.link + " " + (props.link && styles.clickable);

  return (
    <div className={styles.iconContainer + visibility}>
      <a href={props.link} className={iconClass}>
        {props.icon || "🚀"}
      </a>
    </div>
  );
};
