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
            <h1>EDUCACION</h1>
          </li>
          <li>
            <h2>
              TECNOLOGO EN ANALISIS Y DESARROLLO DE SISTEMAS DE INFORMACION
              (ADSI) - SENA
            </h2>

            <h3
              style={{
                borderBottom: "2px solid rgba(128, 128, 128, 0.5)",
                paddingBottom: "5px",
              }}
            >
              -Desarrolo web front-end, manejo de base de datos,
              <br />y aplicaciones de escritorio con C# (.net).
            </h3>
          </li>
          <li>
            <ParaDescargar />
          </li>
        </ul>
      </div>
    </section>
  );
}
