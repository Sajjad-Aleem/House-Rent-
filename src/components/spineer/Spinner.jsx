import React from "react";
import styles from "./Spinner.module.css";
export default function Spinner() {
  return (
    <div className="container">
      <div className={styles.loader}></div>
    </div>
  );
}
