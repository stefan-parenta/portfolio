import React from "react";
import styles from "./NavBar.module.scss";
import { DiGithubBadge } from "react-icons/di";
import { SiLinkedin } from "react-icons/si";
import resume from "../assets/Stefan-Parenta-Resume.pdf";

const NavBar = () => {
  return (
    <nav
      className={styles.nav}
    >
      <ul>
        <li>
          <h2 className={styles.h2}><a href="#aboutme">Stefan Parenta</a></h2>
        </li>
        <li className={styles.links}>
          <a href="#aboutme">Home</a>
        </li>
        <li className={styles.links}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={styles.links}>
          <a href="#contactme">Contact Me</a>
        </li>
        <li className={styles.resume}><a download href={resume}>Resume</a></li>
        <li className={styles.end}>
            <a className={styles.jump} href="https://www.github.com/stefan-parenta" target="_blank" rel="noreferrer" ><DiGithubBadge className={styles.icon} size={30}/></a>
        </li>
        <li>
          <a className={styles.jump} href="https://www.linkedin.com/in/stefan-parenta-59232b262/" target="_blank" rel="noreferrer" ><SiLinkedin className={styles.icon} size={20}/></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
