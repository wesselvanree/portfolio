import React from "react";
import Projects from "./Projects";
import Navigation from "./Navigation";
import hydrautronics from "./images/hydrautronics.jpg";
import ivdh from "./images/ivdh.jpg";

function App() {
  return (
    <>
      <Navigation />
      <Projects projects={projects} />
    </>
  );
}

const projects: Projects = {
  hydrautronics: {
    name: "Hydrautronics",
    year: 2019,
    image: hydrautronics,
    url: "https://hydrautronics.eu",
  },
  ivdh: {
    name: "Ivdh Interieurontwerp",
    year: 2020,
    image: ivdh,
    url: "https://ivdhinterieurontwerp.nl",
  },
};

export default App;
