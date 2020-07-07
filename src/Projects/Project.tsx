import React from "react";

interface ProjectProps {
  project: Project;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project-showcase">
      <div className="project-showcase__content">
        <div>
          <p>{project.year}</p>
          <h1>{project.name}</h1>
          <span className="project-showcase__line"></span>
        </div>
      </div>
      <div
        className="project-showcase__image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="project-showcase__link">
        <a className="button-1" target="_blanc" href={project.url}>
          Bezoek pagina
        </a>
      </div>
    </div>
  );
};

export default Project;
