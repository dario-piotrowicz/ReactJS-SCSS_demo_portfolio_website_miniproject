import React, { FunctionComponent } from 'react';
import './contact-form.styles.scss';

const ContactForm: FunctionComponent = () => {
  return (
    <section id="contact-form">
      <div className="centering-container">
        <h2 className="title">Contact Me</h2>
        <div className="bottom-line" />
        <p className="intro-text">Here is how you can reach me</p>
        <form method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="text-fields">
            <input
              type="text"
              className="input-name"
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="text"
              className="input-subject"
              placeholder="Subject"
              name="subject"
              required
            />
            <input
              type="email"
              className="input-email"
              placeholder="Email Address"
              name="email"
              required
            />
            <input
              type="text"
              className="input-phone"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
              className="input-message"
              placeholder="Enter Message"
              name="message"
            />
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
