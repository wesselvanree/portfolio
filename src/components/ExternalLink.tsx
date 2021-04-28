import React from 'react';

interface Props {
  text: string;
  url: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ExternalLink = ({
  text,
  url,
  className,
  style,
}: Props): JSX.Element => {
  return (
    <a
      href={url}
      className={typeof className === 'undefined' ? '' : className}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
    >
      {text}
    </a>
  );
};

export default ExternalLink;
