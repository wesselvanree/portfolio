import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer>
      <div className="footer--top">
        <div className="footer--top-left">
          <h3>Wessel van Ree</h3>
          <a className="grey" href="mailto:info@wesselvanree.com">
            info@wesselvanree.com
          </a>
        </div>
        <div className="footer--top-middle">
          <p>
            Student Econometrics and Operational Research at Erasmus University
            Rotterdam.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
