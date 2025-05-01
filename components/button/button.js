import React from "react";
import styles from "./button.module.css";

const Button = ({ children }) => {
  return <children className={styles.button}>{children}</children>;
};

export default Button;
