import React, { FunctionComponent } from 'react';
import './specialize-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUser } from '@fortawesome/free-solid-svg-icons';
import { faReact, faSass } from '@fortawesome/free-brands-svg-icons';

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
          <div>
            <span className="fa-icon">
              <FontAwesomeIcon icon={faDesktop} size="2x" />
            </span>
            <h3>Demo</h3>
            <p>
              I am a demo, or better a simple project made for practicing/demo
              purposes. Please do not take me seriously.
            </p>
          </div>
          <div>
            <span className="fa-icon">
              <FontAwesomeIcon icon={faUser} size="2x" />
            </span>
            <h3>Portfolio</h3>
            <p>
              More specifically I am a demo of a portfolio website, so you can
              kind of pretent that I am presenting the accomplishments or the
              like of someone.
            </p>
          </div>
          <div>
            <span className="fa-icon">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </span>
            <h3>React</h3>
            <p>
              I am implemented in react (a very simple implementation with only
              presentational components) and coded in typescript.
            </p>
          </div>
          <div>
            <span className="fa-icon">
              <FontAwesomeIcon icon={faSass} size="2x" />
            </span>
            <h3>Sass</h3>
            <p>
              My styles have been written in sass, which is a css precompiler.
              The actual css is generated on build and used for deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializeSection;
