import React, { useState } from "react";
import styles from "../../styles/main.module.css";
import styles2 from "../../styles/portafolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faJs,
  faCss3Alt,
  faReact,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

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
      title: "Recetas y bebidas",
      description:
        "Pagina interactiva que muestra y filtra informacion traidas de las APIs The MealDB y  The CocktailDB",
      description2: (
        <ul className={styles.contactIcons}>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faHtml5} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <img src="/images/logos/Tailwind.svg" alt="Tailwind CSS" />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faJs} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faReact} />
            </span>
          </li>
        </ul>
      ),
      girhubUrl: "https://github.com/JanVal3k/Biblioteca-Comidas-y-Bebidas",
      url: "https://recetasybebidas.netlify.app",
    },
    {
      id: 2,
      thumb: "/images/thumbs/02.jpg",
      imageUrl: "/images/fulls/02.jpg",
      title: "Matatena",
      description:
        "Juego de dados para dos personas en las que se calcula datos con la interaccion de imagenes en un tablero",
      description2: (
        <ul className={styles.contactIcons}>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faHtml5} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faJs} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faReact} />
            </span>
          </li>
        </ul>
      ),
      girhubUrl: "https://github.com/JanVal3k/Matatena",
      url: "https://matatenagame.netlify.app",
    },
    {
      id: 3,
      thumb: "/images/thumbs/03.jpg",
      imageUrl: "/images/fulls/03.jpg",
      title: "Burbuja de notas",
      description:
        "widget flotante para pc donde se podra crear borrar modificar notas rapidas eventos en calendarios y alarmas ademas de otras funciones a futuro",
      description2: (
        <ul className={styles.contactIcons}>
          <li>
            <span className={styles.contactIcon2}>
              <img src="/images/logos/Csharp.svg" alt="C-sharp" />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <img src="/images/logos/VSLogo.svg" alt="VisualStudio" />
            </span>
          </li>
        </ul>
      ),
      girhubUrl: "https://github.com/JanVal3k/Bubuja-De-Notas",
      url: "https://ejemplo3.com",
    },
    {
      id: 4,
      thumb: "/images/thumbs/04.jpg",
      imageUrl: "/images/fulls/04.jpg",
      title: "Portfolio",
      description:
        "Este portafiolo tambien es un proyecto para demotrar las habilidades y el manejo de las tenologias aprendidas",
      description2: (
        <ul className={styles.contactIcons}>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faHtml5} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faJs} />
            </span>
          </li>
          <li>
            <span className={styles.contactIcon2}>
              <FontAwesomeIcon icon={faReact} />
            </span>
          </li>
        </ul>
      ),
      girhubUrl: "https://github.com/JanVal3k/Portafolio",
      url: "https://ejemplo4.com",
    },
  ];
  const handleGithubClick = (e, url) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };
  return (
    <section id={id} className={styles.mainSection}>
      <h1 className={styles2.title}>PROYECTOS</h1>

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
              <p className={styles2.cardDescription}>
                Este Proyecto esta realizado con: {project.description2}
              </p>
              <p className={styles2.cardDescription}>
                Codigo fuente en:{" "}
                <a
                  href={project.girhubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.contactIcon2} ${styles.githubLink}`}
                  onClick={(e) => handleGithubClick(e, project.girhubUrl)}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </p>
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
