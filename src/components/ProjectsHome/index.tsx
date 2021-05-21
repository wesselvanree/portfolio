import React from 'react'
import './projects.scss'
import Project from './Project'
import GithubProject from './GithubProject'
import {projects, githubProjects} from './data'
import ButtonLink from '../ButtonLink'

const Projects = () => {
  const githubProfile = 'https://github.com/wesselvanree'

  const githubProjectsList = githubProjects
    .sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
    .map(({description, name, topics, url, demoUrl}, index) => (
      <GithubProject
        key={index}
        description={description}
        name={name}
        topics={topics}
        url={url}
        demoUrl={demoUrl}
      />
    ))

  return (
    <>
      <section id="projects">
        {projects.map(
          ({name, image, imageMobile, imageAlt, url, year}, index) => (
            <Project
              key={index}
              name={name}
              image={image}
              imageMobile={imageMobile}
              imageAlt={imageAlt}
              url={url}
              year={year}
            />
          ),
        )}
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
            <ButtonLink
              href={githubProfile}
              label="View more on Github"
              ariaLabel="View mt Github profile"
              color="black"
              variant="outlined"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
