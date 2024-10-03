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
      <div className="gallery-container">
        <h2>Cuadros</h2>
        <div className="image-grid">
          {imagenes.map((image, index) => (
            <article key={index} className="image-item">
              <div
                className="image-thumb"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.thumb} alt={image.title} />
              </div>
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </article>
          ))}
        </div>

        {selectedImage && (
          <div
            className="popover-overlay"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="popover-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-button"
                onClick={() => setSelectedImage(null)}
              >
                ×
              </button>
              <img src={selectedImage.full} alt={selectedImage.title} />
            </div>
          </div>
        )}

        <style jsx>{`
          .gallery-container {
            padding: 20px;
          }
          .image-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .image-item {
            flex: 1 1 calc(50% - 10px);
            min-width: 250px;
          }
          .image-thumb {
            cursor: pointer;
            transition: opacity 0.3s;
          }
          .image-thumb:hover {
            opacity: 0.8;
          }
          .image-thumb img {
            width: 100%;
            height: auto;
          }
          .popover-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .popover-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
          }
          .popover-content img {
            max-width: 100%;
            max-height: 90vh;
          }
          .close-button {
            position: absolute;
            top: -40px;
            right: 0;
            background: none;
            border: none;
            color: white;
            font-size: 30px;
            cursor: pointer;
          }
        `}</style>
      </div>
    </section>
  );
}
