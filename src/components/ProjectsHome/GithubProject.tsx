import React from 'react';
import {GithubProjectItem} from './data';
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
        <h2>{name}</h2>
        <p className="github-project__description">{description}</p>
        <div className="github-project__subjects">
          {topics.map((topic, index) => (
            <span key={index} className="github-project__subject">
              {topic}
            </span>
          ))}
        </div>
      </div>
      <div style={{marginTop: '20px'}}>
        {typeof demoUrl !== 'undefined' ? (
          <ButtonLink
            label="View Demo"
            href={demoUrl}
            style={{marginRight: '14px'}}
          />
        ) : (
          ''
        )}
        <ButtonLink label="Source code" href={url} variant="text" />
      </div>
    </div>
  );
};

export default GithubProject;
