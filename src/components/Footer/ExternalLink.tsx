import React from 'react';

interface Props {
  text: string;
  url: string;
  className: string;
}

export const ExternalLink = ({ text, url, className }: Props): JSX.Element => {
  return (
    <a
      href={url}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default ExternalLink;
