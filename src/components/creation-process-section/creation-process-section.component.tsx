import React, { FunctionComponent } from 'react';
import './creation-process-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faHandHoldingUsd,
  faFilm,
  faCode,
  faPalette,
} from '@fortawesome/free-solid-svg-icons';

interface ProcessStepBoxParams {
  stepNumber: number;
  icon: IconDefinition;
  title: string;
  description: string;
}

const ProcessStepBox: FunctionComponent<ProcessStepBoxParams> = ({
  stepNumber,
  icon,
  title,
  description,
}) => {
  return (
    <div className="process-step-box">
      <div className="icon-container">
        <div className="fa-icon">
          <FontAwesomeIcon icon={icon} size="4x" />
          <div className="step-number">{stepNumber}</div>
        </div>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const steps: ProcessStepBoxParams[] = [
  {
    stepNumber: 1,
    icon: faHandHoldingUsd,
    title: 'Bought Course',
    description: `
    Bough an HTML/CSS course on Udemy. The course contains various projects, of which I am one.
    `,
  },
  {
    stepNumber: 2,
    icon: faFilm,
    title: 'Watched Project Coding',
    description: `
    Watched the course and coded along the instructor, this includes this portofolio project.
    `,
  },
  {
    stepNumber: 3,
    icon: faCode,
    title: 'Coded Along',
    description: `
    Coded along the instructor, keeping the design the same but refining the implementation where needed.
    `,
  },
  {
    stepNumber: 4,
    icon: faPalette,
    title: 'Personalized',
    description: `
    Applied various changes to the designs and the code, personalizing and improving the project.
    `,
  },
];

const CreationProcessSection: FunctionComponent = () => {
  return (
    <section id="creation-process">
      <div className="centering-container">
        <h2>Creation Process</h2>
        <div className="bottom-line" />
        <p>
          The following steps who how I, Demo Portfolio was created by a great
          web developer
        </p>
        <div className="steps">
          {steps
            .sort((stepA, stepB) => stepA.stepNumber - stepB.stepNumber)
            .map((step) => (
              <ProcessStepBox key={step.stepNumber} {...step} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CreationProcessSection;
