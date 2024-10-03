import React from "react";
import styles from "../../styles/main.module.css";

export default function Header({ setScroll }) {
  const handleClick = (scrollPosition) => (e) => {
    setScroll(scrollPosition);
  };

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img
          className={`${styles.image} ${styles.avatar}`}
          src="/images/foto.jpeg"
          alt=""
        />
        <a onClick={handleClick("top")}>
          <h1 className={styles.h1Cursor}>
            <strong>HERNAN</strong>
          </h1>
        </a>
        <br />
        <a onClick={handleClick("sobreMi")}>
          <b>SOBRE MI</b>
        </a>
        <br />
        <a onClick={handleClick("portafolio")}>
          <b>PORTAFOLIO</b>
        </a>
        <br />
        <a onClick={handleClick("tecnologias")}>
          <b>TECNOLOGIAS </b>
        </a>
        <br />
        <a onClick={handleClick("educacion")}>
          <b>EDUCACION</b>
        </a>
        <br />
        <a onClick={handleClick("contacto")}>
          <b>CONTACTO</b>
        </a>
      </div>
    </header>
  );
}
