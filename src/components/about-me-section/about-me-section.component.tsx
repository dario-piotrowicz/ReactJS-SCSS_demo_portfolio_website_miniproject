import React, { FunctionComponent } from 'react';
import './about-me-section.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

interface AwardBoxParams {
  title: string;
  description: string;
}

const AwardBox: FunctionComponent<AwardBoxParams> = ({
  title,
  description,
}) => {
  return (
    <div className="award">
      <span className="fa-icon">
        <FontAwesomeIcon icon={faAward} size="3x" />
      </span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const awards: AwardBoxParams[] = [
  {
    title: 'Award One',
    description: 'I have been awarded for being an awesome website',
  },
  {
    title: 'Award Two',
    description: 'I have been awarded for being an awesome demo project',
  },
  {
    title: 'Award Three',
    description: 'I have been awarder for being an awesome portfolio',
  },
];

const AboutMeSection: FunctionComponent = () => {
  return (
    <section id="about-me">
      <h2 className="main-title">About Me</h2>
      <div className="bottom-line" />
      <p className="intro-text">Let me tell you a little bit about myself...</p>
      <div className="content">
        <img src="images/about.jpg" alt="me" className="bio-image" />
        <div className="bio-text">
          <h4 className="title">I am just a demo website</h4>
          <p className="description">
            I am just a simple demo wesite made for practice by a developer, the
            one portraied in the image is not that developer, that it is what I
            would look like if I were human.
          </p>
        </div>
        {awards.map((award, idx) => (
          <AwardBox key={idx} {...award} />
        ))}
      </div>
    </section>
  );
};

export default AboutMeSection;
