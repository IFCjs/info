import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate, { translate } from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Native speed</Translate>,
    Svg: require("../../../static/img/iconmonstr-time-19.svg").default,
    description: (
      <Translate>
        The IFC.js parsing engine is based on WebAssembly and C++, and is
        specifically designed to read data from large files as fast as a desktop
        application.
      </Translate>
    ),
  },
  {
    title: <Translate>Multiplatform</Translate>,
    Svg: require("../../../static/img/iconmonstr-smartphone-16.svg").default,
    description: (
      <Translate>
        IFC.js is compatible with any platform: web application (frontend and
        backend), desktop applications (Windows, Mac and Linux) and mobile
        applications (Android and iOS).
      </Translate>
    ),
  },
  {
    title: <Translate>Lightweight</Translate>,
    Svg: require("../../../static/img/iconmonstr-paper-plane-2.svg").default,
    description: (
      <Translate>
        An open BIM application created with IFC.js can weigh less than 1 MB.
        This library allows the creation of web and native applications with
        almost no impact on the final weight of the application.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
