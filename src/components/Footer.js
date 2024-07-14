import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} CID </p>
      <div className="footer-links">
        <a href="https://github.com/Darius939" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:dariuscojocaru123@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
