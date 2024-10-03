import React from "react";
import styles from "../../styles/main.module.css";
export default function SectionPortafolio({ id }) {
  return (
    <section id={id} className={styles.mainSection}>
      <h2>Cuadros</h2>
      <div className={`${styles.row} ${styles["gtr-50"]}`}>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <a
            href="/images/fulls/01.jpg"
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/01.jpg" alt="" />
          </a>
          <h3>Cuadro numero 1</h3>
          <p>Descripcion del cudaro N.1</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <a
            href="/images/fulls/02.jpg"
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/02.jpg" alt="" />
          </a>
          <h3>Cuadro numero 2</h3>
          <p>Descripcion del cudaro N.2</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <a
            href="/images/fulls/03.jpg"
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/03.jpg" alt="" />
          </a>
          <h3>Cuadro numero 3</h3>
          <p>Descripcion del cudaro N.3</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <a
            href="/images/fulls/04.jpg"
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/04.jpg" alt="" />
          </a>
          <h3>Cuadro numero 4</h3>
          <p>Descripcion del cudaro N.4</p>
        </article>
      </div>
      <ul className={styles.actions}>
        <li>
          <a href="#" className={styles.button}>
            Portfolio completo
          </a>
        </li>
      </ul>
    </section>
  );
}
