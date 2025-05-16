import React from "react";
import styles from "./pagination.module.css";
const Pagination = () => {
  return <div className={styles.container}>
    <button>Prev</button>
    <button>Next</button>
  </div>;
};

export default Pagination;
