import React, { useState } from "react";
import styles from "./Image.module.css";
import Translate from '@docusaurus/Translate';

export const IfcImage = (props) => {
    console.log(props);
  return (
    <div>
      {props.image}
      <a target="_blank" href={props.ifcLink}> <i>
          {getSource(props)}
      </i> </a>
    </div>
  );

  function getSource(props) {
      if(props.hideSource) return null;
      return (<Translate description="The source of an image of the blog">
          Source
      </Translate>)

  }
};
