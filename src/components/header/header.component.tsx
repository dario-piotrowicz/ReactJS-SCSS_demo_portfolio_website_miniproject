import React, { FunctionComponent } from 'react';
import './header.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import TypeWriter from '../type-writer/type-writer.component';

const Header: FunctionComponent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header id="main-header" className={isHome ? '' : 'small'}>
      <div className="centering-container">
        <div className="top">
          <div className="logo">
            <Link to="/">
              <img src="images/logo.png" alt="DP logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" exact activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/work" exact activeClassName="active">
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={`content ${isHome ? '' : 'hidden'}`}>
          <div>
            <TypeWriter
              leadingFixedText="I Am DP The"
              waitTime={3000}
              phrases={[
                'Demo Portfolio',
                'Greatest Portfolio',
                'Demo Portfolio Project',
                'Demo Project',
              ]}
            />
            <p>I specialize in portoflioing, demoing and demo portfolioing</p>
            <Link to="/work" className="btn-light">
              View My Work
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
