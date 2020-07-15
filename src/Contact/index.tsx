import React from "react";
import "./contact.css";
import contact from "../images/contact.jpg";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact__background"></div>
      <div className="contact__inner">
        <div
          style={{ backgroundImage: `url(${contact})` }}
          className="contact__image"
        ></div>
        <div className="contact__content">
          <h2>Contact</h2>
          <div className="contact__info">
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Oude-Tonge, Nederland</p>
            </div>
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>wesselvanree@chello.nl</p>
            </div>
          </div>
          <div className="contact__social">
            <a
              href="https://www.linkedin.com/in/wesselvanree/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a
              href="https://github.com/wesselvanree"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:wesselvanree@chello.nl">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
