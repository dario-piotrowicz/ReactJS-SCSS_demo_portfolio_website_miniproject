import React, { FunctionComponent } from 'react';
import './stats-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faUsers,
  faAward,
  faHourglassStart,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';

interface StatBoxParams {
  icon: IconDefinition;
  title: string;
  value: number;
}

const StatBox: FunctionComponent<StatBoxParams> = ({ icon, title, value }) => {
  return (
    <div className="stat-box">
      <span className="fa-icon">
        <FontAwesomeIcon icon={icon} size="3x" />
      </span>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

const stats: StatBoxParams[] = [
  {
    icon: faUsers,
    title: 'Clients',
    value: 100,
  },
  {
    icon: faAward,
    title: 'Awards',
    value: 3,
  },
  {
    icon: faHourglassStart,
    title: 'Hours Worked',
    value: 3500,
  },
  {
    icon: faCodeBranch,
    title: 'Projects Completed',
    value: 135,
  },
];

const StatsSection: FunctionComponent = () => {
  return (
    <section id="stats">
      <div className="stats">
        {stats.map((stat, idx) => (
          <StatBox key={idx} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
