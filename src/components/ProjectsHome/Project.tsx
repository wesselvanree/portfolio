import React from 'react';

export interface ProjectItem {
  name: string;
  year: number;
  image: string;
  imageAlt: string;
  url: string;
}

const Project = ({ name, year, image, imageAlt, url }: ProjectItem) => {
  return (
    <div className="project-showcase-container">
      <div className="project-showcase">
        <a href={url} target="_blanc" className="project-showcase__content">
          <p>{year}</p>
          <h2>{name}</h2>
          <span className="project-showcase__line"></span>
          <span className="project-showcase__underline"></span>
        </a>
        <a
          href={url}
          target="_blanc"
          className="project-showcase__image-container"
        >
          <img className="project-showcase__image" src={image} alt={imageAlt} />
        </a>
        <div className="project-showcase__link">
          <a className="button-1" target="_blanc" href={url}>
            Bezoek pagina
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
