import React from "react";

interface ProjectProps {
  project: Project;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <div className="project-showcase-container">
      <div className="project-showcase">
        <a
          href={project.url}
          target="_blanc"
          className="project-showcase__content"
        >
          <p>{project.year}</p>
          <h2>{project.name}</h2>
          <span className="project-showcase__line"></span>
          <span className="project-showcase__underline"></span>
        </a>
        <a
          href={project.url}
          target="_blanc"
          className="project-showcase__image-container"
        >
          <img
            className="project-showcase__image"
            src={project.image}
            alt={project.imageAlt}
          />
        </a>
        <div className="project-showcase__link">
          <a className="button-1" target="_blanc" href={project.url}>
            Bezoek pagina
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
