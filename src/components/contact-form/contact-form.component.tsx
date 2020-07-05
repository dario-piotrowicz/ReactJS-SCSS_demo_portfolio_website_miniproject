import React, { FunctionComponent } from 'react';
import './contact-form.styles.scss';

const ContactForm: FunctionComponent = () => {
  return (
    <section id="contact-form">
      <div className="centering-container">
        <h2 className="title">Contact Me</h2>
        <div className="bottom-line" />
        <p className="intro-text">Here is how you can reach me</p>
        <form>
          <div className="text-fields">
            <input type="text" className="input-name" placeholder="Name" />
            <input
              type="text"
              className="input-subject"
              placeholder="Subject"
            />
            <input
              type="email"
              className="input-email"
              placeholder="Email Address"
            />
            <input
              type="text"
              className="input-phone"
              placeholder="Phone Number"
            />
            <textarea className="input-message" placeholder="Enter Message" />
          </div>
          <button type="submit" className="submit-btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
