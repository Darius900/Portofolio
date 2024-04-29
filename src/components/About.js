import React, { useEffect } from 'react';
import './About.css'; 
import { FaGraduationCap, FaLaptopCode, FaRunning, FaReact, FaJsSquare, FaHtml5, FaCss3, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import aaaImage from './aab.png'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div id="about">
      <div className="about-section" data-aos="fade-up">
        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image">
              <img src={aaaImage} className="image-shadow" alt="Professional Headshot" />
              <img src={aaaImage} alt="Professional Headshot" />
            </div>
          </div>
          <div className="about-text-container">
            <div className="about-text">
              <h2 className="about-name">Nice to meet you!</h2>
              <p className="about-intro">
                As a recent graduate in Economic Informatics from Romania, I'm eager to leverage my skills to solve real-world problems and create impactful digital solutions. My determination and interest in technology fuel my readiness for new challenges and opportunities.
              </p>
              <div className="skills">
              <FaReact size={40} />
                  <FaJsSquare size={40} />
                  <FaHtml5 size={40} />
                  <FaCss3 size={40} />
                  <FaNodeJs size={40} />
                  <FaGitAlt size={40} />
              </div>
              <div className="about-info">
                <div className="info-item">
                  <FaGraduationCap size="1.5em" />
                  <p>
                    My education in Economic Informatics trained me to be a problem-solver. I'm now broadening my knowledge by pursuing a Master's degree in the same field.
                  </p>
                </div>
                <div className="info-item">
                  <FaLaptopCode size="1.5em" />
                  <p>
                    I've developed a full-stack e-commerce platform using React and Express. As a Web Developer, I am dedicated to creating efficient and innovative digital solutions.
                  </p>
                </div>
                <div className="info-item">
                  <FaRunning size="1.5em" />
                  <p>
                  Outside my professional interests, I'm a sports enthusiast with a special love for table tennis. I also enjoy going to the gym, gaming, and I have a passion for mountain-related activities.                 </p>
                </div>
              </div>
              <div className="about-hobbies">
                <h3>My Core Values</h3>
                <p>Integrity is at the heart of my personal and professional interactions. I believe in honesty, sincerity, and a relentless pursuit of hard work.</p>       

                <Link
                  to="projects"  
                  smooth={true} 
                  offset={10}  
                  duration={500} 
                  className="see-projects-btn" 
                >
                   Check out my projects! <span className="arrow">&darr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
