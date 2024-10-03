import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/main.module.css";
import SectionPortafolio from "./sectionPortafolio";
import SectionTop from "./sectionTop";
import SectionSobreMi from "./sectionSobreMi";
import Tecnoligias from "./tecnologias";
import Educacion from "./educacion";
import Contacto from "./contacto";
//-----------------------------
export default function DivMain({ scroll }) {
  const mainRef = useRef(null);
  const [sectionOffsets, setSectionOffsets] = useState({});

  useEffect(() => {
    const calculateOffsets = () => {
      const topElement = document.getElementById("top-section");
      const sobreMiElement = document.getElementById("sobreMi-section");
      const portafolioElement = document.getElementById("portafolio-section");
      const TecnoligiasElement = document.getElementById("tecnologias-section");
      const EducacionElement = document.getElementById("educacion-section");
      const ContactoElement = document.getElementById("contacto-section");

      setSectionOffsets({
        top: topElement?.offsetTop || 0,
        sobreMi: sobreMiElement?.offsetTop || 0,
        portafolio: portafolioElement?.offsetTop || 0,
        tecnologias: TecnoligiasElement?.offsetTop || 0,
        educacion: EducacionElement?.offsetTop || 0,
        contacto: ContactoElement?.offsetTop || 0,
      });
    };

    calculateOffsets();
    window.addEventListener("resize", calculateOffsets);

    return () => window.removeEventListener("resize", calculateOffsets);
  }, []);

  useEffect(() => {
    console.log("Valor del boton:", scroll);
    if (scroll && mainRef.current && sectionOffsets[scroll] !== undefined) {
      mainRef.current.scrollTo({
        top: sectionOffsets[scroll],
        behavior: "smooth",
      });
    }
  }, [scroll, sectionOffsets]);

  return (
    <div ref={mainRef} className={styles.main}>
      <SectionTop id="top-section" />
      <SectionSobreMi id="sobreMi-section" />
      <SectionPortafolio id="portafolio-section" />
      <Tecnoligias id="tecnologias-section" />
      <Educacion id="educacion-section" />
      <Contacto id="contacto-section" />
    </div>
  );
}
