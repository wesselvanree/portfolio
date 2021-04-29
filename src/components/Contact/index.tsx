import React from 'react';
import './contact.scss';

const Contact = () => {
  const mail = 'info@wesselvanree.com';

  return (
    <section id="contact">
      <div className="contact__wrapper">
        <div className="contact__inner">
          <h1>
            Interesting project? Let&nbsp;me&nbsp;know!<br></br>
            <a href={`mailto:${mail}`}>{mail}</a>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Contact;
