import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import ParaDescargar from "../clases/paraDescargar";
import styles from "../../styles/main.module.css";

export default function SeccionTop({ id }) {
  const pdfUrl = process.env.PUBLIC_URL + "/CV_Hernán_Darío_Gomez_Marquez.pdf";
  return (
    <section
      id={id}
      className={`${styles.mainSection} ${styles.mainSectionFirst} ${styles.centrarContenido}`}
    >
      <header>
        <h4>
          Hola mi nombre es: <br />
        </h4>
        <h1>Hernan Gomez M.</h1>
      </header>
      <p>Bienvenid@, este es mi portafiolo de desarrollador.</p>
      <h4>
        Si quieres ponerte en contato conmigo puedes escribirme a{" "}
        <strong>
          <a>dariog_36@hotmail.com</a>
        </strong>
      </h4>
      <br />
      <span className={styles.Tecleado}>
        "Elimina los errores como el sabio depura su mente: línea por línea"
      </span>
      <br />
      <div className={styles.innerContact}>
        <ul className={styles.contactActions}>
          <li>
            <ParaDescargar
              rutaArchivo={pdfUrl}
              nombreDescarga="CvHernanDarioGomez.pdf"
              textoBoton="Descargar CV"
              textoDescargando="Descargando..."
            />
          </li>
        </ul>
        <ul className={styles.contactIcons}>
          <li>
            <a className={styles.contactIcon}>
              <FontAwesomeIcon icon={faGithub} />
              <span className={styles.label}>Github</span>
            </a>
          </li>
          <li>
            <a className={styles.contactIcon}>
              <FontAwesomeIcon icon={faLinkedin} />
              <span className={styles.label}>LinkedIn</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
