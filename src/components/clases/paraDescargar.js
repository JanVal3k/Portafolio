import React, { useState } from "react";
import axios from "axios";
import styles from "../../styles/main.module.css";

export default function ParaBotonDescarga({
  rutaArchivo,
  nombreDescarga = "archivo.pdf",
  textoBoton = "Descargar archivo",
  textoDescargando = "Descargando...",
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const descargarArchivo = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.get(rutaArchivo, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", nombreDescarga);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error("Error al descargar el archivo:", err);
      setError(`Error al descargar el archivo: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className={styles.cvButton}
        onClick={descargarArchivo}
        disabled={isLoading}
      >
        {isLoading ? textoDescargando : textoBoton}
      </button>
      {error && <div className={styles.errorMessage}>{error}</div>}
    </>
  );
}
