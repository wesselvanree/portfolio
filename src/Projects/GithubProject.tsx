import React from "react";

const GithubProject = ({ project }: GithubProjectProps) => {
  return (
    <div className="github-project">
      <a href={project.url}>
        <h3>{project.name}</h3>
      </a>
      <p className="github-project__description">{project.description}</p>
      <div className="github-project__subjects">
        <span className="github-project__subject">json</span>
      </div>
    </div>
  );
};

export default GithubProject;
