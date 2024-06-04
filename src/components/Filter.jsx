import React from "react";
import styles from "./Filter.module.css";
export default function Filter({ opt }) {
  console.log("opt testing", opt);

  return (
    <div className={styles.form_container}>
      <label htmlFor="">{opt.label}: </label>
      <select name="city" id="city">
        <option value="pesh">{opt.val1}</option>
        <option value="kar">{opt.val2}</option>
        <option value="isb">{opt.val3}</option>
      </select>
      {/* For Buy Or Rent  */}
    </div>
  );
}
