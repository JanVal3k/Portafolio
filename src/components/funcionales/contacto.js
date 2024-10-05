import React from "react";
import styles from "../../styles/main.module.css";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Educacion({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.mainSectionFirst} ${styles.centrarContenido}`}
    >
      <h1>CONTACTA CONMIGO!</h1>
      <ul className={styles.contactActions}>
        <li>
          <FontAwesomeIcon icon={faEnvelope} />
          {"  "}
          Correo:
          {"  "}
          <a
            href="mailto:dariog_36@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            dariog_36@hotmail.com
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />
          {"    "}
          linkedIn:
          {"    "}
          <a
            href="https://www.linkedin.com/in/hernan-dario-gomez-marquez-b12958203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            in/hernangomezm94
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faWhatsapp} />
          {"  "}
          Whatsapp:
          {"  "}
          <a
            href="https://wa.me/573108657315"
            target="_blank"
            rel="noopener noreferrer"
          >
            +57 - 310 86 57 315
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {"  "}
          Github:
          {"  "}
          <a
            href="https://github.com/JanVal3k"
            target="_blank"
            rel="noopener noreferrer"
          >
            /JanVal3k
          </a>
        </li>
      </ul>
    </section>
  );
}
