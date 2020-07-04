import React, { FunctionComponent } from 'react';
import './home.page.styles.scss';
import SpecializeSection from '../../components/specialize-section/specialize-section.component';
import StatsSection from '../../components/stats-section/stats-section.component';
import CreationProcessSection from '../../components/creation-process-section/creation-process-section.component';

const HomePage: FunctionComponent = () => {
  return (
    <>
      <SpecializeSection />
      <StatsSection />
      <CreationProcessSection />
    </>
  );
};

export default HomePage;
