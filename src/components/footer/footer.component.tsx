import React, { FunctionComponent } from 'react';
import './footer.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const githubBaseUrl = 'https://github.com/dario-piotrowicz/';
const githubRepoName = 'ReactJS-SCSS_demo_portfolio_website_miniproject';
const githubRepoUrl = `${githubBaseUrl}${githubRepoName}`;

const Footer: FunctionComponent = () => {
  return (
    <footer id="main-footer">
      <div className="centering-container">
        <p>Copyright &copy; 2020. All rights Reserved</p>
        <span className="fa-icon">
          <a href={githubRepoUrl} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
