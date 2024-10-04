import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import styles2 from "../../styles/pdfPopover.module.css";
//====================================
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
//====================================
const VisorDePDF = () => {
  //====================================
  const [abierto, setAbierto] = useState(false);
  const [paginas, setPaginas] = useState(null);
  const [viendo, setViendo] = useState(1);
  //====================================
  const pdfUrl = "../../../Descargas/Diploma_SENA.pdf";
  //====================================
  function onCargaDocumento({ paginas }) {
    setPaginas(paginas);
  }

  return (
    <div className={styles2.container}>
      <button
        onClick={() => setAbierto(!abierto)}
        className={styles2.openButton}
      >
        Ver PDF
      </button>

      {abierto && (
        <div className={styles2.overlay}>
          <div className={styles2.popover}>
            <button
              onClick={() => setAbierto(false)}
              className={styles2.closeButton}
            >
              ×
            </button>

            <Document
              file={pdfUrl}
              onLoadSuccess={onCargaDocumento}
              loading="Cargando PDF..."
              error="Ha ocurrido un error al cargar el PDF"
            >
              <Page viendo={viendo} width={800} loading="Cargando página..." />
            </Document>

            {paginas && (
              <div className={styles2.controls}>
                <button
                  disabled={viendo <= 1}
                  onClick={() => setViendo(viendo - 1)}
                  className={styles2.navButton}
                >
                  Anterior
                </button>
                <p className={styles2.pageInfo}>
                  Página {viendo} de {paginas}
                </p>
                <button
                  disabled={viendo >= paginas}
                  onClick={() => setViendo(viendo + 1)}
                  className={styles2.navButton}
                >
                  Siguiente
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default VisorDePDF;
