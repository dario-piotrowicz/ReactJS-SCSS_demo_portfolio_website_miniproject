import React, { FunctionComponent } from 'react';
import './header.styles.scss';
import { Link, NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header: FunctionComponent = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header id="main-header" className={isHome ? '' : 'small'}>
      <div className="centering-container">
        <div className="top">
          <img className="logo" src="images/logo.png" alt="DP logo" />
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
            <h1>I Am DP The Demo Portfolio</h1>
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
