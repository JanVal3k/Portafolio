import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
      </div>
    </footer>
  );
}
