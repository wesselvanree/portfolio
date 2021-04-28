import React from 'react';
import { GithubProjectItem } from './data';
import ButtonLink from '../ButtonLink';

const GithubProject = ({
  name,
  url,
  description,
  topics,
  demoUrl,
}: GithubProjectItem) => {
  return (
    <div className="github-project">
      <div>
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
      {typeof demoUrl !== 'undefined' ? (
        <ButtonLink
          style={{ marginTop: '20px' }}
          label="View Demo"
          url={demoUrl}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default GithubProject;
