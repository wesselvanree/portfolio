import React from 'react';
import ExternalLink from '../ExternalLink';
import './ButtonLink.scss';

type Props = {
  label: string;
  url: string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary';
};

const ButtonLink = ({ label, url, color = 'primary', style }: Props) => {
  return (
    <ExternalLink
      style={style}
      text={label}
      url={url}
      className={`button button-${color}`}
    />
  );
};

export default ButtonLink;
