import React from "react";
import styles from "../../styles/main.module.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SobreMi({ id }) {
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.centrarContenido}`}
    >
      <h1>SOBRE MI</h1>
      <p>
        Inicie mi carrera en la programación con mucho amor, pero la vida me
        llevó por otros caminos laborales.
        <br /> Durante mi ausencia en la programación, gestioné y manejé datos
        en bodegas y logística de personal.
        <br />
        Hoy en día estoy deseoso de continuar con aquella pasión que despertó la
        programación unos años atrás.
        <br />
      </p>
      <strong>
        <p>
          Actualmente me encuentro estudiando y avanzando en el desarrollo de mi
          programación.
        </p>
      </strong>
      <br />
      <p>
        Te dejo mi{" "}
        <strong>
          <a
            href="https://www.linkedin.com/in/hernan-dario-gomez-marquez-b12958203/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>
        </strong>{" "}
        para que veas más a fondo mi experiencia laboral. {"  "}
        <a
          className={styles.contactIcon}
          href="https://www.linkedin.com/in/hernan-dario-gomez-marquez-b12958203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </p>
    </section>
  );
}
