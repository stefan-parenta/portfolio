import React from "react";
import styles from "./AboutMe.module.scss";
import selfie from "../assets/aistefan.jpg";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles["left-container"]}>
        <img className={styles.selfie} src={selfie} alt="Selfie" />
        <h1>Stefan Parenta</h1>
        <p>Software Development Student - Mohawk College</p>
      </div>
      <div className={styles["right-container"]}>
        <a href="#portfolio">Portfolio</a>

        <a href="#contactme">Contact Me</a>
      </div>
    </div>
  );
};

export default AboutMe;
