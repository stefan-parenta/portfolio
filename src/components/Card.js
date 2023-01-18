import React from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-body"]}>
        <img className={styles["card-img"]} src={props.img} alt="Card" />
        <h2 className={styles["card-title"]}>{props.title}</h2>
        <p className={styles["card-desc"]}>{props.desc}</p>
      </div>
      <a
        className={styles["card-btn"]}
        href={props.href}
        target="_blank"
        rel="noreferrer"
      >
        {props.btn}
      </a>
    </div>
  );
};

export default Card;
