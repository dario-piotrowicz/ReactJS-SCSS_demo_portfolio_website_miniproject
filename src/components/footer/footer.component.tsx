import React, { FunctionComponent } from 'react';
import './footer.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer: FunctionComponent = () => {
  return (
    <footer id="main-footer">
      <div className="centering-container">
        <p>Copyright &copy; 2020. All rights Reserved</p>
        <span className="fa-icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
