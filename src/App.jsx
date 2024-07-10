import React from "react";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Projects from "./Projects";
import Contactme from "./Contactme";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Aboutme />
      <Education />
      <Projects />
      <Contactme />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
