import React, { FunctionComponent } from 'react';
import './progress-bars-section.styles.scss';

interface ProgressBoxParams {
  title: string;
  percentage: number;
}

const ProgressBox: FunctionComponent<ProgressBoxParams> = ({
  title,
  percentage,
}) => {
  if (percentage < 0) percentage = 0;
  if (percentage > 100) percentage = 100;
  return (
    <div className="progress-box">
      <h4>{title}:</h4>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

const progresses: ProgressBoxParams[] = [
  {
    title: 'Typescript',
    percentage: 61.1,
  },
  {
    title: 'CSS',
    percentage: 31.1,
  },
  {
    title: 'Javascript',
    percentage: 5.4,
  },
  {
    title: 'HTML',
    percentage: 2.4,
  },
];

const ProgressBarsSection: FunctionComponent = () => {
  return (
    <section id="progress-bars">
      <div className="centering-container">
        <h2>Languages Used</h2>
        <div className="bottom-line" />
        {progresses.map((progress, idx) => (
          <ProgressBox key={idx} {...progress} />
        ))}
      </div>
    </section>
  );
};

export default ProgressBarsSection;
