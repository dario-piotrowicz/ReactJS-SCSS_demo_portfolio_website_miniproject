import React, { FunctionComponent } from 'react';
import './app.scss';
import Header from './components/header/header.component';
import SpecializeSection from './components/specialize-section/specialize-section.component';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <SpecializeSection />
    </>
  );
};

export default App;
