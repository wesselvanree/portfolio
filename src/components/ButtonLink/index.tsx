import React from 'react';
import ExternalLink from '../ExternalLink';
import './ButtonLink.scss';

type Props = {
  label: string;
  href: string;
  style?: React.CSSProperties;
  color?: 'primary' | 'black';
  external?: boolean;
  size?: 'normal' | 'large';
  ariaLabel?: string;
  variant?: 'filled' | 'outlined' | 'text';
};

const ButtonLink = ({
  label = '',
  href,
  color = 'primary',
  style,
  external = true,
  size = 'normal',
  ariaLabel = '',
  variant = 'filled',
}: Props) => {
  const className = `button button-${color} size-${size} variant-${variant}`;

  return (
    <>
      {external ? (
        <ExternalLink
          style={style}
          label={label}
          href={href}
          className={className}
          ariaLabel={ariaLabel}
        >
          <span className="button-background"></span>
        </ExternalLink>
      ) : (
        <a href={href} className={className} aria-label={ariaLabel}>
          {label}
        </a>
      )}
    </>
  );
};

export default ButtonLink;
