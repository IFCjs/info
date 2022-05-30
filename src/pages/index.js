import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures/HomepageFeatures";
import logo from "../../static/img/logo.png";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero shadow--lw", styles.heroBanner)}>
      <div className="container">
        <img className="landing-logo" src={logo} alt="asdf"></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          <Translate
            id="homepage.tagline"
            description="Tagline of the welcome page."
          >
            BIM toolkit for JavaScript.
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--primary button--lg"
            to="/docs/introduction"
          >
            <Translate
              id="homepage.getStarted"
              description="The welcome button of the documentation. Brings the user to the Introduction page."
            >
              Get started
            </Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Docs`} description="BIM toolkit for JavaScript">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
