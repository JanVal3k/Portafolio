import React, { useState } from "react";
import Header from "./Header";
import DivMain from "./DivMain";
import Footer from "./footer";
import { ThemeProvider } from "../clases/verificarContexto";
//import styles from "../../styles/main.module.css";

function App() {
  const [scroll, setScroll] = useState(null);
  return (
    <ThemeProvider>
      <Header setScroll={setScroll} />
      <DivMain scroll={scroll} />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
