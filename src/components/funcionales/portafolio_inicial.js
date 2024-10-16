import React, { useState } from "react";
import styles from "../../styles/main.module.css";
export default function SectionPortafolio({ id }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const imagenes = [
    {
      thumb: "images/thumbs/01.jpg",
      full: "images/fulls/01.jpg",
      titulo: "Proyecto 1",
      descipcion: "imagene del Poryecto N.1",
    },
    {
      thumb: "images/thumbs/02.jpg",
      full: "images/fulls/02.jpg",
      titulo: "Proyecto 2",
      descipcion: "imagene del Poryecto N.2",
    },
    {
      thumb: "images/thumbs/03.jpg",
      full: "images/fulls/03.jpg",
      titulo: "Proyecto 3",
      descipcion: "imagene del Poryecto N.3",
    },
    {
      thumb: "images/thumbs/04.jpg",
      full: "images/fulls/04.jpg",
      titulo: "Proyecto 4",
      descipcion: "imagene del Poryecto N.5",
    },
  ];
  return (
    <section id={id} className={styles.mainSection}>
      <h2>Cuadros</h2>
      <div className={`${styles.row} ${styles["gtr-50"]}`}>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <div
            onClick={() => setSelectedImage("/images/fulls/01.jpg")}
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/01.jpg" alt="" />
          </div>
          <h3>Cuadro numero 1</h3>
          <p>Descripcion del cudaro N.1</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <div
            onClick={() => setSelectedImage("/images/fulls/02.jpg")}
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/02.jpg" alt="" />
          </div>
          <h3>Cuadro numero 2</h3>
          <p>Descripcion del cudaro N.2</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <div
            onClick={() => setSelectedImage("/images/fulls/03.jpg")}
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/03.jpg" alt="" />
          </div>
          <h3>Cuadro numero 3</h3>
          <p>Descripcion del cudaro N.3</p>
        </article>
        <article
          className={`${styles["col-6"]} ${styles["col-12-xsmall"]} ${styles["work-item"]}`}
        >
          <div
            onClick={() => setSelectedImage("/images/fulls/04.jpg")}
            className={`${styles.image} ${styles.fit} ${styles.thumb}`}
          >
            <img src="/images/thumbs/04.jpg" alt="" />
          </div>
          <h3>Cuadro numero 4</h3>
          <p>Descripcion del cudaro N.4</p>
        </article>
      </div>

      {selectedImage && (
        <div
          className={styles.popoverOverlay}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={styles.popoverContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage} alt="" />
          </div>
        </div>
      )}

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
