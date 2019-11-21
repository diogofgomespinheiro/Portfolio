import React from 'react';

import './Contact.css';

import contactImage from '../../assets/contact-img.svg';

const Contact = () => {
  return (
    <section className="contact" id="contact-section">
      <h1>Get in touch</h1>
      <div className="container">
        <form >
          <div className="name-information">
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
          </div>
          <input type="Email" placeholder="Email"/>
          <textarea name="" id="" rows="10" placeholder="Write your message here..."/>
        </form>
        <img src={contactImage} alt="hire"/>
      </div>
    </section>
  );
}

export default Contact;