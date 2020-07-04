import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import SpecializeSection from './components/specialize-section/specialize-section.component';
import StatsSection from './components/stats-section/stats-section.component';
import CreationProcessSection from './components/creation-process-section/creation-process-section.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <SpecializeSection />
      <StatsSection />
      <CreationProcessSection />
    </>
  );
};

export default App;
