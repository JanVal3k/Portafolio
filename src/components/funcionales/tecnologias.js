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
      <h1>TECNOLOGIAS</h1>
      <p>LENGUAJES DE PROGRAMACION</p>
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
      </ul>

      <p>LIBRERIAS Y FRAMEWORKS</p>

      <ul className={styles.contactIcons}>
        <li>
          <span className={styles.contactIcon2}>
            <FontAwesomeIcon icon={faReact} />
          </span>
        </li>
        <li>
          <span className={styles.contactIcon2}>
            <img src="/images/logos/Tailwind.svg" alt="Tailwind CSS" />
          </span>
        </li>
      </ul>

      <p>SOFTWARES</p>
      <div className={styles.iconosSoftware}>
        <img src="/images/logos/krita.png" className={styles.imagenTecnolo} />
        <img
          src="/images/logos/photoshopLogo.png"
          className={styles.imagenTecnolo}
        />
      </div>
      <p>EN PROCESO DE APRENDISAJE</p>
    </section>
  );
}
