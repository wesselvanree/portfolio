import React from 'react';

export interface GithubProjectItem {
  name: string;
  url: string;
  description: string;
  topics: string[];
}

const GithubProject = ({
  name,
  url,
  description,
  topics,
}: GithubProjectItem) => {
  return (
    <div className="github-project">
      <a href={url} target="_blanc">
        <h3>{name}</h3>
      </a>
      <p className="github-project__description">{description}</p>
      <div className="github-project__subjects">
        {topics.map((topic, index) => (
          <span key={index} className="github-project__subject">
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GithubProject;
