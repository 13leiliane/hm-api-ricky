import React from "react";
import NotFound from "../assets/morty2.jpg";
import NotFoundMorty from "../assets/morty.jpg";
import styles from "./style/PageNotFound.module.css";

const PageNotFound = () => (
  <div className={styles.notFound}>
    <img src={NotFound} alt="NotFound404" className={styles.rick} />
    <img src={NotFoundMorty} alt="NotFound404" className={styles.morty} />
    <h1>404</h1>
    <h2>Not Found</h2>
  </div>
);

export default PageNotFound;
