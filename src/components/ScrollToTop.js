import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTopStyled = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0;
  background-color: #333;  // Changed to a darker shade for better visibility
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(0,0,0,0.3); // Increased shadow for more depth

  &:hover {
    opacity: 1;
    background-color: #555; // Darker on hover for better interaction feedback
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;} // Fully visible when active
  }
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <ScrollToTopStyled onClick={scrollToTop} style={{ opacity: isVisible ? 0.7 : 0 }}>
      <FaArrowCircleUp size={30} color="#fff" />
    </ScrollToTopStyled>
  );
};

export default ScrollToTop;
