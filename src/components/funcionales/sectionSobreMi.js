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
      <h1 style={{ color: "#F5766E" }}>SOBRE MI</h1>
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
      <h3 style={{ color: "#F5766E" }}>
        Actualmente me encuentro estudiando y avansando en el desarrollo de mi
        programacion.
      </h3>
      <br />
      <h3>
        Te dejo mi <strong>linkedIn</strong> para que veas mas afondo mi
        esperiencia laboral. {"  "}
        <a className={styles.contactIcon}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </h3>
    </section>
  );
}
