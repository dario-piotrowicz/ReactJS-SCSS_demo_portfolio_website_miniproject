import React, { FunctionComponent, useEffect } from 'react';
import './app.scss';
import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/home/home.page.component';
import AboutPage from './pages/about/about.page.component';
import WorkPage from './pages/work/work.page.component';

const App: FunctionComponent = () => {
  const history = useHistory();

  useEffect(() => {
    return history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, [history]);

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/work" component={WorkPage} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
