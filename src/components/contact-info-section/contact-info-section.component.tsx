import React, { FunctionComponent } from 'react';
import './contact-info-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPhone,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

interface ContactInfoBoxParams {
  icon: IconDefinition;
  title: string;
  text: string;
}

const ContactInfoBox: FunctionComponent<ContactInfoBoxParams> = ({
  icon,
  title,
  text,
}) => {
  return (
    <div className="contact-info-box">
      <span className="fa-icon">
        <FontAwesomeIcon icon={icon} size="2x" />
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

const contactInfos: ContactInfoBoxParams[] = [
  {
    icon: faEnvelope,
    title: 'Email',
    text: 'demo@portfolio.project',
  },
  {
    icon: faPhone,
    title: 'Phone',
    text: '(123) 123-1234',
  },
  {
    icon: faAddressCard,
    title: 'Address',
    text: '123 Nowhere St, Somewhere',
  },
];

const ContactInfoSection: FunctionComponent = () => {
  return (
    <section id="contact-info">
      <div className="centering-container">
        <div className="content">
          {contactInfos.map((contactInfo, idx) => (
            <ContactInfoBox key={idx} {...contactInfo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
