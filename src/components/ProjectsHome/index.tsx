import React from 'react';
import './projects.scss';
import Project from './Project';
import GithubProject from './GithubProject';
import { projects, githubProjects } from './data';

const Projects = () => {
  const githubProfile = 'https://github.com/wesselvanree';

  const githubProjectsList = githubProjects
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .map(({ description, name, topics, url, demoUrl }, index) => (
      <GithubProject
        key={index}
        description={description}
        name={name}
        topics={topics}
        url={url}
        demoUrl={demoUrl}
      />
    ));

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
          <div className="github-projects">{githubProjectsList}</div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '0 10px',
            }}
          >
            <a
              href={githubProfile}
              aria-label="View my github profile"
              target="_blanc"
            >
              View more on Github
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
