import React from 'react';
import './footer.scss';
import ExternalLink from '../ExternalLink';
import {socials} from './data';
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  const socialsList = socials
    .sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))
    .map(({name, url, external}, i) => (
      <li key={i}>
        {external ? (
          <ExternalLink label={name} href={url} className="grey" />
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
          <h2>Wessel van Ree</h2>
          <p className="footer-paragraph">
            Econometrics and Operational Research student at Erasmus University
            Rotterdam.
          </p>
          <div
            style={{marginTop: '14px', marginBottom: 0, paddingLeft: '2px'}}
            className="horizontal-flex footer-grey"
          >
            <FontAwesomeIcon style={{opacity: 0.8}} icon={faMapMarkerAlt} />
            <p style={{margin: '0 0 0 7px'}}>Netherlands</p>
          </div>
        </div>
        <div className="footer-column footer--right">
          <h3>Social Links</h3>
          <ul>{socialsList}</ul>
        </div>
      </div>
      <div className="footer--bottom">
        <p>Copyright &copy; {currentYear} Wessel van Ree</p>
      </div>
    </footer>
  );
};

export default Footer;
