import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { HashRouter as Router } from 'react-router-dom';

const Root = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
