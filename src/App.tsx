import React from "react";
import Projects from "./Projects";
import Navigation from "./Navigation";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
