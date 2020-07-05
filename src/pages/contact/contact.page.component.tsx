import React, { FunctionComponent } from 'react';
import './contact.page.styles.scss';
import ContactForm from '../../components/contact-form/contact-form.component';
import ContactInfoSection from '../../components/contact-info-section/contact-info-section.component';

const ContactPage: FunctionComponent = () => {
  return (
    <>
      <ContactForm />
      <ContactInfoSection />
    </>
  );
};

export default ContactPage;
