import React from "react";
import githubLogo from './github-logo.png';
import './Footer.css';

function Footer() {
    return (
        <div id="footer">
          <img src={githubLogo} alt="Github logo" className="github-logo" />
          <p>Created by <a href="https://github.com/AndreasOun" target="_blank" rel="noreferrer">AndreasOun</a></p>
        </div>
      );
    }
    
export default Footer;
