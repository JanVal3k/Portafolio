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
            <p>
              TECNOLOGO EN ANALISIS Y DESARROLLO DE SISTEMAS DE INFORMACION
              (ADSI) - SENA
            </p>

            <p>
              -Desarrolo web front-end, manejo de base de datos,
              <br />y aplicaciones de escritorio con C# en (.net).
              <h6>Periodo: 2014 - 2016</h6>
            </p>
          </li>
          <li>
            <VisorDePDF archivo="SENA" />
          </li>
        </ul>
        <ul className={styles.contactActions}>
          <li>
            <p>
              Cursos gratuitos completados en:{" "}
              <a
                href="https://www.codecademy.com/profiles/Hernan_Gomez"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codecademy
              </a>
            </p>
            <li>
              <VisorDePDF archivo="CodeCademy" />
            </li>
          </li>
        </ul>
      </div>
    </section>
  );
}
