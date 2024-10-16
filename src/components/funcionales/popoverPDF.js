import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import styles2 from "../../styles/pdfPopover.module.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const VisorDePDF = () => {
  const [abierto, setAbierto] = useState(false);
  const [paginas, setPaginas] = useState(null);
  const [viendo, setViendo] = useState(1);

  const pdfUrl = process.env.PUBLIC_URL + "/Diploma_SENA.pdf";

  function onCargaDocumento({ numPages }) {
    setPaginas(numPages);
  }

  return (
    <div className={styles2.container}>
      <button
        onClick={() => setAbierto(!abierto)}
        className={styles2.openButton}
      >
        Ver certificado.
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

            <div className={styles2.pdfContainer}>
              <Document
                file={pdfUrl}
                onLoadSuccess={onCargaDocumento}
                loading="Cargando PDF..."
                error="Ha ocurrido un error al cargar el PDF"
              >
                {paginas && (
                  <Page
                    pageNumber={viendo}
                    width={800}
                    loading="Cargando página..."
                  />
                )}
              </Document>
            </div>

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
