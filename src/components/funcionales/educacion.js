import React from "react";
import styles from "../../styles/main.module.css";
import VisorDePDF from "../funcionales/popoverPDF";
export default function Educacion({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.centrarContenido}`}
    >
      <div className={styles.innerContact}>
        <ul className={styles.contactActions}>
          <li>
            <h1>EDUCACION</h1>
          </li>
          <li>
            <h2>
              TECNOLOGO EN ANALISIS Y DESARROLLO DE SISTEMAS DE INFORMACION
              (ADSI) - SENA
            </h2>

            <h3>
              -Desarrolo web front-end, manejo de base de datos,
              <br />y aplicaciones de escritorio con C# en (.net).
              <h6>Periodo: 2014 - 2016</h6>
            </h3>
          </li>
          <li>
            <VisorDePDF />
          </li>
        </ul>
      </div>
    </section>
  );
}
