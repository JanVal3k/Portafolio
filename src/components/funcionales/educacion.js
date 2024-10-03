import React from "react";
import styles from "../../styles/main.module.css";
import ParaDescargar from "../clases/paraDescargar";
export default function Educacion({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.centrarContenido}`}
    >
      <div className={styles.innerContact}>
        <ul className={styles.contactActions}>
          <li>
            <ParaDescargar />
          </li>
        </ul>
      </div>
    </section>
  );
}
