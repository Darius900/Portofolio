import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCss3, FaHtml5  } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';
import aaaImage from './MUNTEX.png';
import romarketplace from './romarketplace.png';
import TT from './TT.jpg'
import portofolio from './portofolio.png'
import { SiMysql } from 'react-icons/si';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    }
  }
}

const Project = ({ project, index }) => {
  const techIcons = {
    "React": <FaReact />,
    "Node.js": <FaNodeJs />,
    "Express": <FaNodeJs />,
    "SQLite": <FaDatabase />,
    "MySQL": <SiMysql />,
    "CSS": <FaCss3 />,
    "HTML": <FaHtml5/>,
    
  }

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      className={`project-section ${index % 2 === 0 ? '' : 'reverse'}`} 
      ref={ref} 
      variants={container} 
      initial='hidden' 
      animate={inView ? 'visible' : 'hidden'}
    >
      <motion.div className="project-image" variants={item}>
        <img src={project.image} className="image-shadow" alt={project.title} />
        <img src={project.image} alt={project.title} />
      </motion.div>
      <motion.div className="project-info" variants={item}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <motion.p className="tech-icons" variants={item}>
          {project.technologies.map(tech => techIcons[tech])}
        </motion.p>
        <motion.div className="project-links" variants={item}>
          <a href={project.link} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt/> View Live
          </a>
          <a href={project.code} target="_blank" rel="noreferrer">
            <FaGithub/> View Code
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: 'Muntex E-commerce Platform [Fullstack]',
      description: 'A full-stack e-commerce platform where users can register, login, add products to cart, place orders, pay with Stripe or cash on delivery, request refunds, and change passwords. The admin dashboard allows for managing products, stocks, orders, refund requests, employees, and providers.',
      technologies: ['React', 'SQLite', 'Express', 'HTML','CSS'],
      link: 'https://darius900.github.io/MUNTEX/',
      code: 'https://github.com/Darius900/MUNTEX/tree/master',
      image: aaaImage
    },
    {
      title: 'Table Tennis Shop [Frontend]',
      description: 'A frontend implementation for a table tennis shop, featuring a main page, header carousel, products page, and product categories.',
      technologies: ['React', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/TT/',
      code: 'https://github.com/Darius900/TT/tree/master',
      image: TT
    },
    {
      title: 'Personal Portfolio',
      description: 'A personal portfolio website with a black and white theme, particles on the main page, cool scroll transitions, and a minimalist, clean design.',
      technologies: ['React', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/Portofolio/',
      code: 'https://github.com/Darius900/Portofolio/tree/master',
      image: portofolio
    },
    {
      title: 'Marketplace [Fullstack] (In Progress)',
      description: 'A full-stack marketplace where users can register as sellers or buyers. Sellers can create and customize shops, add products, and manage orders and statistics.',
      technologies: ['React', 'Express', 'MySQL', 'HTML', 'CSS'],
      link: 'https://darius900.github.io/ROMARKETPLACE/',
      code: 'https://github.com/Darius900/ROMARKETPLACE/tree/master',
      image: romarketplace
    }
  ];

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {projects.map((project, index) => (
        <Project project={project} index={index} key={index} />
      ))}
    </div>
  );
}

export default Projects;
