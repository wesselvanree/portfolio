import React from 'react';
import './footer.scss';
import ExternalLink from './ExternalLink';
import { socials } from './data';

const Footer = () => {
  const socialsList = socials
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .map(({ name, url, external }) => (
      <li>
        {external ? (
          <ExternalLink text={name} url={url} className="grey" />
        ) : (
          <a className="grey" href={url}>
            {name}
          </a>
        )}
      </li>
    ));

  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer--top">
        <div className="footer--left">
          <h3>Wessel van Ree</h3>
          <p>
            Student Econometrics and Operational Research at Erasmus University
            Rotterdam.
          </p>
        </div>
        <div className="footer--right">
          <h4>Social Links</h4>
          <ul>{socialsList}</ul>
        </div>
      </div>
      <div className="footer--bottom">
        <p>&copy; {currentYear} Wessel van Ree</p>
      </div>
    </footer>
  );
};

export default Footer;
