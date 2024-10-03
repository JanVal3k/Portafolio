import React, { useState } from "react";
import Header from "./Header";
import DivMain from "./DivMain";
import Footer from "./footer";
//import styles from "../../styles/main.module.css";

function App() {
  const [scroll, setScroll] = useState(null);
  return (
    <>
      <Header setScroll={setScroll} />
      <DivMain scroll={scroll} />
      <Footer />
    </>
  );
}

export default App;
