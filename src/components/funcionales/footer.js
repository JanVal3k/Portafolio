import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import styles from "../../styles/main.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.copyright}>
          <li>&copy; Derechos</li>
          <li>
            Diseñador:{" "}
            <strong style={{ color: "#F5766E" }}>
              Hernan Dario Gomez Marquez
            </strong>
          </li>
        </ul>
        <ul className={styles.copyright}>
          <li>Esta pagina esta desarrollada con</li>
          <li>
            <FontAwesomeIcon icon={faHtml5} />
            {"  "}
            <FontAwesomeIcon icon={faCss3Alt} />
            {"  "}
            <FontAwesomeIcon icon={faJsSquare} />
            {"  "}
            <FontAwesomeIcon icon={faReact} />
          </li>
        </ul>
      </div>
    </footer>
  );
}
