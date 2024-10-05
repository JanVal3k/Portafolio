import React, { useState } from "react";
import Descargas from "react-file-download";
import styles from "../../styles/main.module.css";

export default function ParaBotonDescarga({
  rutaArchivo,
  nombreDescarga = "archivo.pdf",
  textoBoton = "Descargar archivo",
  textoDescargando = "Descargando...",
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const DescargarArchivo = () => {
    setIsLoading(true);
    setError(null);

    try {
      Descargas(rutaArchivo, nombreDescarga);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <a
        className={styles.cvButton}
        onClick={DescargarArchivo}
        disabled={isLoading}
      >
        {isLoading ? textoDescargando : textoBoton}
      </a>
      {error && <div>Error al descargar el archivo: {error}</div>}
    </>
  );
}
