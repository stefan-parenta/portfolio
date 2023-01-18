import React from "react";
import styles from "./Portfolio.module.scss";
import Card from "./Card";
import portfolioImage from "../assets/portfolio.png";
import dino from "../assets/dino.jfif";

const Portfolio = () => {
  return (
    <section>
      <div id="portfolio" className={styles.anchor}></div>
      <div className={styles.container}>
        <div className={styles["card-container"]}>
          <Card
            img={portfolioImage}
            href="https://github.com/stefan-parenta/portfolio"
            title="Portfolio"
            desc="Built with React"
            btn="&lt;View Code /&gt;"
          />
          <Card
            img={dino}
            href="https://github.com/stefan-parenta/2D-Unity-Runner"
            title="Dino Runner"
            desc="Built in Unity"
            btn="&lt;View Code /&gt;"
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
