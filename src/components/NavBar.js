import React from "react";
import styles from "./NavBar.module.scss";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [pos, setPos] = useState(false);
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 900) {
        setPos(true);
      } else {
        setPos(false);
      }
    });
  }, []);

  return (
    <div
      className={styles.nav}
      style={{
        backgroundColor:
          pos === true ? "rgba(32, 0, 0, 1)" : "rgba(0, 0, 0, 0)",
        display: pos === true ? "unset" : "none",
        animation: pos === true ? "fadeInAnimation ease 3s" : "",
      }}
    >
      NavBar
    </div>
  );
};

export default NavBar;
