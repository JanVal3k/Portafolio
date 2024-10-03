import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/funcionales/App";
import reportWebVitals from "./components/clases/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
