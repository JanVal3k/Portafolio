// sectionPortafolio.js
import React, { useState } from "react";
import styles from "../../styles/main.module.css";
import styles2 from "../../styles/portafolio.module.css";

const BrowserChrome = () => (
  <div className={styles2.browserChrome}>
    <div className={styles2.browserButtons}>
      <div className={`${styles2.browserButton} ${styles2.buttonRed}`} />
      <div className={`${styles2.browserButton} ${styles2.buttonYellow}`} />
      <div className={`${styles2.browserButton} ${styles2.buttonGreen}`} />
    </div>
  </div>
);

const ProjectPreview = ({ project, onClose }) => (
  <div className={styles2.previewContainer}>
    <BrowserChrome />
    <div className={styles2.previewContent}>
      <button className={styles2.closeButton} onClick={onClose}>
        ×
      </button>
      <img
        src={project.imageUrl}
        alt={project.title}
        className={styles2.previewImage}
      />
      <div className={styles2.previewOverlay}>
        <h3 className={styles2.previewTitle}>{project.title}</h3>
        <p className={styles2.previewDescription}>{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles2.previewButton}
        >
          Ver Proyecto Completo
        </a>
      </div>
    </div>
  </div>
);

const SectionPortafolio = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      thumb: "/images/thumbs/01.jpg",
      imageUrl: "/images/fulls/01.jpg",
      title: "E-commerce Website",
      description:
        "Una tienda en línea moderna construida con React y Next.js, integrada con un sistema de gestión de contenidos personalizado.",
      url: "https://ejemplo1.com",
    },
    {
      id: 2,
      thumb: "/images/thumbs/02.jpg",
      imageUrl: "/images/fulls/02.jpg",
      title: "Dashboard Analytics",
      description:
        "Panel de control interactivo para visualización de datos empresariales en tiempo real.",
      url: "https://ejemplo2.com",
    },
    {
      id: 3,
      thumb: "/images/thumbs/03.jpg",
      imageUrl: "/images/fulls/03.jpg",
      title: "Blog Platform",
      description:
        "Plataforma de blog con sistema de gestión de contenidos y editor WYSIWYG.",
      url: "https://ejemplo3.com",
    },
    {
      id: 4,
      thumb: "/images/thumbs/04.jpg",
      imageUrl: "/images/fulls/04.jpg",
      title: "Portfolio Template",
      description:
        "Plantilla de portfolio personalizable para desarrolladores y diseñadores.",
      url: "https://ejemplo4.com",
    },
  ];

  return (
    <section id={id} className={styles.mainSection}>
      <h2 className={styles2.title}>Proyectos</h2>

      <div className={styles2.grid}>
        {projects.map((project) => (
          <article
            key={project.id}
            className={styles2.card}
            onClick={() => setSelectedProject(project)}
          >
            <div className={styles2.imageContainer}>
              <img
                src={project.thumb}
                alt={project.title}
                className={styles2.thumbnail}
              />
            </div>
            <div className={styles2.cardContent}>
              <h3 className={styles2.cardTitle}>{project.title}</h3>
              <p className={styles2.cardDescription}>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div className={styles2.modal} onClick={() => setSelectedProject(null)}>
          <div
            className={styles2.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <ProjectPreview
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionPortafolio;
