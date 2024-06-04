import React, { useContext } from "react";
import styles from "./FilterList.module.css";
import { CONTEXT_FILTER } from "../store-context/Context_Filter";
import Filter from "./Filter";
export default function FilterList() {
  const { option } = useContext(CONTEXT_FILTER);
  const onFilterSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFilterSearch} className={styles.filtr_container}>
      {option.map((opt, index) => (
        <Filter opt={opt} key={index} />
      ))}
      <button type="submit" className={styles.btn_search}>
        Search
      </button>
    </form>
  );
}
