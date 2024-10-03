import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faReact,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../../styles/main.module.css";
export default function Tecnoligias({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.centrarContenido}`}
    >
      <h1>
        <strong style={{ color: "#F5766E" }}>TECNOLOGIAS</strong>
      </h1>
      <h2>LENGUAJES DE PROGRAMACION</h2>
      <ul className={styles.contactIcons}>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faHtml5} />
          </span>
        </li>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faCss3Alt} />
          </span>
        </li>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faJs} />
          </span>
        </li>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faPhp} />
          </span>
        </li>
      </ul>

      <h2>LIBRERIAS Y FRAMEWORKS</h2>

      <ul className={styles.contactIcons}>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faReact} />
          </span>
        </li>
      </ul>

      <h2>SOFTWARES</h2>
      <div className={styles.iconosSoftware}>
        <img src="/images/logos/krita.png" className={styles.imagenTecnolo} />
        <img
          src="/images/logos/photoshopLogo.png"
          className={styles.imagenTecnolo}
        />
      </div>
      <h3>EN PROCESO DE APRENDISAJE</h3>

      <ul>
        <li>
          primer punto de aprendizaje <a>el link</a>
        </li>
        <li>
          segundo punto de aprendizaje <a>el link</a>
        </li>
        <li>
          tercero punto de aprendizaje <a>el link</a>
        </li>
      </ul>
    </section>
  );
}
