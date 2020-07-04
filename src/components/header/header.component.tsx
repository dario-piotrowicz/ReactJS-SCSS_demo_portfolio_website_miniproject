import React, { FunctionComponent } from 'react';
import './header.styles.scss';

const Header: FunctionComponent = () => {
  return (
    <header id="main-header">
      <div className="centering-container">
        <div className="top">
          <img className="logo" src="images/logo.png" alt="DP logo" />
          <nav>
            <ul>
              <li>
                <a href="#" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="content">
          <div>
            <h1>I Am DP The Demo Portfolio</h1>
            <p>I specialize in portoflioing, demoing and demo portfolioing</p>
            <a href="#" className="btn-light">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
