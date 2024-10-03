import React from "react";
import styles from "../../styles/main.module.css";

export default function Educacion({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.mainSectionFirst} ${styles.centrarContenido}`}
    >
      <h1>SECCION DE CONTACTO</h1>
    </section>
  );
}
