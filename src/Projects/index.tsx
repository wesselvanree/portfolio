import React from "react";
import "./projects.css";
import Project from "./Project";
import GithubProject from "./GithubProject";

// images
import hydrautronics from "../images/hydrautronics.jpg";
import ivdh from "../images/ivdh.jpg";
import mmi from "../images/mmi.jpg";

const Projects = () => {
  return (
    <>
      <section id="projects">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </section>
      <section id="other-projects">
        <div className="other-projects__inner">
          <h1>Andere Projecten</h1>
          <div className="github-projects">
            {githubProjects.map((project, index) => (
              <GithubProject key={index} project={project} />
            ))}
          </div>
          <a
            href="https://github.com/wesselvanree"
            aria-label="View my github profile"
            target="_blanc"
          >
            View More on Github
          </a>
        </div>
      </section>
    </>
  );
};

// featured projects
const projects: Array<Project> = [
  {
    name: "Hydrautronics",
    year: 2019,
    image: hydrautronics,
    imageAlt: "Bekijk de website van Hydrautronics",
    url: "https://hydrautronics.eu",
  },
  {
    name: "Ivdh Interieurontwerp",
    year: 2020,
    image: ivdh,
    imageAlt: "Bekijk de website van Ivdh Interieurontwerp",
    url: "https://ivdhinterieurontwerp.nl",
  },
  {
    name: "MMI",
    year: 2019,
    image: mmi,
    imageAlt: "Bekijk de website over MMI en Maatschappelijke invloeden.",
    url: "https://wesselvanree.github.io/mmi",
  },
];

// github projects
const githubProjects: Array<GithubProject> = [
  {
    name: "smooth-scrolling",
    url: "https://github.com/wesselvanree/smooth-scrolling",
    description: "Vloeiend scrollen op webpagina's",
    topics: ["Typescript"],
  },
  {
    name: "vsc-xcode-theme",
    url: "https://github.com/wesselvanree/vsc-xcode-theme",
    description: "Een kleurenthema voor Visual Studio Code.",
    topics: ["json"],
  },
];

export default Projects;
