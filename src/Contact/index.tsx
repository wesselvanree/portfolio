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
          <h1>Contact</h1>
          <div className="contact__info">
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <p>Oude-Tonge, Nederland</p>
            </div>
            <div className="contact__info__element">
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:info@wesselvanree.com">info@wesselvanree.com</a>
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
          {/* <div className="contact__social">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
