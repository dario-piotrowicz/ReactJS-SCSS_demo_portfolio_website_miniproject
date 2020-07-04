import React, { FunctionComponent } from 'react';
import './specialize-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDesktop,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass } from '@fortawesome/free-brands-svg-icons';

interface SpecializeBoxParams {
  icon: IconDefinition;
  title: string;
  description: string;
}

const SpecializeBox: FunctionComponent<SpecializeBoxParams> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="specialization-box">
      <span className="fa-icon">
        <FontAwesomeIcon icon={icon} size="2x" />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const specializations: SpecializeBoxParams[] = [
  {
    icon: faDesktop,
    title: 'Demo',
    description: `
    I am a demo, or better a simple project made for practicing/demo
    purposes. Please do not take me seriously.
    `,
  },
  {
    icon: faUser,
    title: 'Portfolio',
    description: `
    More specifically I am a demo of a portfolio website, so you can
    kind of pretent that I am presenting the accomplishments or the
    like of someone.
    `,
  },
  {
    icon: faReact,
    title: 'React',
    description: `
    I am implemented in react (a very simple implementation with only
    presentational components) and coded in typescript.
    `,
  },
  {
    icon: faSass,
    title: 'Sass',
    description: `
    My styles have been written in sass, which is a css precompiler.
    The actual css is generated on build and used for deployment.
    `,
  },
];

const SpecializeSection: FunctionComponent = () => {
  return (
    <section id="specialize">
      <div className="centering-container">
        <h2>I Specialize In</h2>
        <div className="bottom-line" />
        <p>
          Being a Demo project as well as being a Portfolio project, implemented
          using React, SASS and Typescript
        </p>
        <div className="specializations">
          {specializations.map((s, idx) => (
            <SpecializeBox key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;
