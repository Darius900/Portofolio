import React from 'react';
import { scroller } from 'react-scroll';
import './Intro.css';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import Particles from 'react-tsparticles';

import { loadLinksPreset } from 'tsparticles-preset-links';

const Intro = () => {
  const scrollToAbout = () => {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  const particlesInit = async (engine) => {
    await loadLinksPreset(engine);
  };

  const options = {
    preset: 'links',
    background: {
      color: '#000'
    },
    particles: {
      color: {
        value: '#fff'
      }
    }
  };

  return (
    <div className="intro-section">
      <Particles id="tsparticles" options={options} init={particlesInit} />
      <div className="content-wrapper">
        <div className="intro-text">
          <h1 className="section-title">Hello, World! 👋</h1>
          <h2 className="intro-name">I'm Cojocaru Darius.</h2>
          <p className="intro-role">A passionate Web Developer.</p>
          <p className="intro-bio">Creating awesome web experiences for all.</p>
          <button className="btn intro-btn" onClick={scrollToAbout}>
            Discover My Journey
          </button>
          <div className="social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={30} />
            </a>
            <a href="https://github.com/Darius939" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} />
            </a>
            <a href="mailto:dariuscojocaru123@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;