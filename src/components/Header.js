import React from 'react';
import './Header.css'; 
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa'; 
import logo from './logo2.png';
import resume from './resume1.pdf';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <p className="tagline">Coding with passion and precision.</p>
      </div>
      <img src={logo} alt="Logo" className="header-logo" /> 
      <nav className="header-nav">
     
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration= {500}>About</Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={0} duration= {500}>Projects</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration= {500}>Contact</Link>
        <a className="resume-download" href={resume} target="_blank" rel="noreferrer" download>
          <FaDownload /> Download Resume
        </a>
      
      </nav>
    </header>
  );
};

export default Header;
