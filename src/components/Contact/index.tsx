import React from 'react';
import './contact.scss';
import contact from '../../images/contact.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const mail = 'info@wesselvanree.com';

  return (
    <section id="contact">
      <div className="contact__background"></div>
      <div className="contact__inner">
        <div
          style={{ backgroundImage: `url(${contact})` }}
          className="contact__image"
        ></div>
        <div className="contact__content">
          <h1>Contact</h1>
          <div className="contact__info">
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Oude-Tonge, Nederland</p>
            </div>
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href={`mailto:${mail}`}>{mail}</a>
            </div>
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faLinkedinIn} />
              <a
                href="https://www.linkedin.com/in/wesselvanree/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/wesselvanree"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
