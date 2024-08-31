import React from "react";
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';   


function SocialLinks () {
    return (
      <div>
        <a href="https://www.linkedin.com/in/adrian-voiz" className="social-link" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="fa-icon" />
          LinkedIn
        </a>
        <a href="https://github.com/AdrianRamadhan27" className="social-link" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fa-icon" />
          GitHub
        </a>
      </div>
    );
  };

export default SocialLinks;