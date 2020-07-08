import React from "react";
import "./projects.css";
import Project from "./Project";
import GithubProject from "./GithubProject";

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <main>
      <section id="projects">
        <Project project={projects.hydrautronics} />
        <Project project={projects.ivdh} />
      </section>
      <section id="other-projects">
        <h1>Other</h1>
        <div className="github-projects">
          {githubProjects.map((project) => (
            <GithubProject project={project} />
          ))}
        </div>
      </section>
    </main>
  );
};

const githubProjects: Array<GithubProject> = [
  {
    name: "vsc-xcode-theme",
    url: "#",
    description: "Een kleurenthema voor Visual Studio Code",
  },
  {
    name: "mmi",
    url: "#",
    description:
      "Een website over maatschappelijke invloeden van de informatica",
  },
  {
    name: "mmi",
    url: "#",
    description:
      "Een website over maatschappelijke invloeden van de informatica",
  },
  {
    name: "mmi",
    url: "#",
    description:
      "Een website over maatschappelijke invloeden van de informatica",
  },
];

export default Projects;
