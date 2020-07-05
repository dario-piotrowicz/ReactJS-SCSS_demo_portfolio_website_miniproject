import React, { FunctionComponent } from 'react';
import './about.page.styles.scss';
import AboutMeSection from '../../components/about-me-section/about-me-section.component';
import ProgressBarsSection from '../../components/progress-bars-section/progress-bars-section.component';

const AboutPage: FunctionComponent = () => {
  return (
    <>
      <AboutMeSection />
      <ProgressBarsSection />
    </>
  );
};

export default AboutPage;
