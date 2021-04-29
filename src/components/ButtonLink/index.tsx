import React from 'react';
import ExternalLink from '../ExternalLink';
import './ButtonLink.scss';

type Props = {
  label: string;
  href: string;
  style?: React.CSSProperties;
  color?: 'primary' | 'secondary';
  external?: boolean;
  size?: 'normal' | 'large';
  ariaLabel?: string;
};

const ButtonLink = ({
  label,
  href,
  color = 'primary',
  style,
  external = true,
  size = 'normal',
  ariaLabel = '',
}: Props) => {
  return (
    <>
      {external ? (
        <ExternalLink
          style={style}
          label={label}
          href={href}
          className={`button button-${color} size-${size}`}
          ariaLabel={ariaLabel}
        />
      ) : (
        <a href={href} aria-label={ariaLabel}>
          {label}
        </a>
      )}
    </>
  );
};

export default ButtonLink;
