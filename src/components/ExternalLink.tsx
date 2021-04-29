import React from 'react';

interface Props {
  label?: string;
  href: string;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
  children?: React.ReactChild;
}

export const ExternalLink = ({
  label = '',
  href,
  className,
  style,
  ariaLabel = '',
  children,
}: Props): JSX.Element => {
  return (
    <a
      href={href}
      className={typeof className === 'undefined' ? '' : className}
      target="_blank"
      rel="noopener noreferrer"
      style={style}
      aria-label={ariaLabel}
    >
      {label}
      {children}
    </a>
  );
};

export default ExternalLink;
