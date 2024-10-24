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
      <h3>
        Inicie mi carrera en la programcion com mucho amor, pero la vida me
        llevo por otros caminos lavorales,
        <br /> durante mi ausencia en la programcion gestione y maneje datos en
        bodegas y logistica de perosonal.
        <br />
        Hoy en dia estoy deseoso de continuar con aquella pasion que desperto la
        programacion unos años atras.
        <br />
      </h3>
      <br />
      <strong>
        <h3>
          Actualmente me encuentro estudiando y avansando en el desarrollo de mi
          programacion.
        </h3>
      </strong>
      <br />
      <h3>
        Te dejo mi <strong>linkedIn</strong> para que veas mas afondo mi
        experiencia laboral. {"  "}
        <a
          className={styles.contactIcon}
          href="https://www.linkedin.com/in/hernan-dario-gomez-marquez-b12958203/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </h3>
    </section>
  );
}
