import React from "react";
import styles from "./AboutMe.module.scss";
import selfie from "../assets/aistefan.jpg";
import Typist from "react-typist-component";

const AboutMe = () => {
  return (
    <section id="aboutme">
      <div className={styles.container}>
        <div className={styles["right-container"]}>
          <img src={selfie} className={styles.selfie} alt="Me"></img>
        </div>
        <div className={styles.abouttext}>
          <div className={styles.info}>
            <Typist>
              <Typist.Delay ms={100} />
              <span className={styles.span}>&lt;body&gt;</span>
            </Typist>
            <div className={styles.description}>
              <Typist>
                <Typist.Delay ms={2000} />
                <span className={styles.span}>&lt;h1&gt;</span>
                <h2 className={styles.h2}>
                  Hello! <br />
                  I'm Stefan. <br /> Developer from Hamilton, Ontario.
                </h2>
                <span className={styles.span}>&lt;/h1&gt;</span>
              </Typist>
            </div>
            <Typist>
              <Typist.Delay ms={1000} />
              <span className={styles.span}>&lt;/body&gt;</span>
            </Typist>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
