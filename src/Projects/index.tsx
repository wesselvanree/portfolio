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
        <div className="other-projects__inner">
          <h1>Other</h1>
          <div className="github-projects">
            {githubProjects.map((project) => (
              <GithubProject project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const githubProjects: Array<GithubProject> = [
  {
    name: "vsc-xcode-theme",
    url: "#",
    description: "Een kleurenthema voor Visual Studio Code.",
    topics: ["json"],
  },
  {
    name: "mmi",
    url: "#",
    description:
      "Een website over maatschappelijke invloeden van de informatica",
    topics: ["React", "javascript", "html", "css"],
  },
];

export default Projects;
