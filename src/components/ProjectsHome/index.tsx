import React from 'react';
import './projects.scss';
import Project from './Project';
import GithubProject from './GithubProject';
import { projects, githubProjects } from './data';

const Projects = () => {
  return (
    <>
      <section id="projects">
        {projects.map(({ name, image, imageAlt, url, year }, index) => (
          <Project
            key={index}
            name={name}
            image={image}
            imageAlt={imageAlt}
            url={url}
            year={year}
          />
        ))}
      </section>
      <section id="other-projects">
        <div className="other-projects__inner">
          <h1>Other Projects</h1>
          <div className="github-projects">
            {githubProjects.map(({ description, name, topics, url }, index) => (
              <GithubProject
                key={index}
                description={description}
                name={name}
                topics={topics}
                url={url}
              />
            ))}
          </div>
          <a
            href="https://github.com/wesselvanree"
            aria-label="Bekijk mijn github profiel"
            target="_blanc"
          >
            Bekijk meer op Github
          </a>
        </div>
      </section>
    </>
  );
};

export default Projects;
