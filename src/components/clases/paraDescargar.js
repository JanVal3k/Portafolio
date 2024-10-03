import React, { useState, useEffect } from "react";
import Descargas from "react-file-download";
import styles from "../../styles/main.module.css";

export default function ParaBotonDescarga() {
  const [isLoading, setIsLoading] = useState(false); // para manejar el estado de la carga
  const [error, setError] = useState(null); // para manejar el estado del error

  const DescargarArchivo = () => {
    setIsLoading(true);
    try {
      Descargas(
        "../../../Descargas/Pago_internet.pdf",
        "CvHernanDarioGomez.pdf"
      );
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  return (
    <>
      <a
        className={styles.cvButton}
        onClick={DescargarArchivo}
        disabled={isLoading}
      >
        {isLoading ? "Descargando..." : "Descargar CV"}
      </a>
      {error && <div>Error al descargar el archivo: {error}</div>}
    </>
  );
}
