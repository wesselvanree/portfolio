import React from "react";
import "./projects.css";
import Project from "./Project";

interface HomeProps {
  projects: Projects;
}

const Projects = ({ projects }: HomeProps) => {
  return (
    <main>
      <section id="projects">
        <Project project={projects.hydrautronics} />
        <Project project={projects.ivdh} />
      </section>
    </main>
  );
};

export default Projects;
