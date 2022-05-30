import React from "react";
import styles from "./Scene.module.css";

export const Scene = (props) => {
  return (
    <iframe
      className={styles.threeScene}
      width="100%"
      height="600px"
      key={Math.random()}
      src={props.link}
      frameBorder="0"
    />
  );
};
