// ScrollToTop

// Import necessary dependencies and components
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeProvider';
import styled, { keyframes } from 'styled-components';

// Define the ScrollToTop component
const ScrollToTop = () => {
  // Access the theme from the ThemeProvider context
  const { theme } = useTheme();

  // State to track whether the scroll-to-top button should be visible
  const [isVisible, setIsVisible] = useState(false);

  // Create an IntersectionObserver to detect when the top-anchor element is in the viewport
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      rootMargin: '0px 0px -100% 0px', // Trigger when the top-anchor is 100% out of the viewport
    }
  );

  // Effect hook to observe the top-anchor element
  useEffect(() => {
    const target = document.getElementById('top-anchor');
    if (target) {
      observer.observe(target);
    }
    // Cleanup: Disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, [observer]);

  // Function to scroll to the top of the page smoothly when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Render the ScrollToTop component
  return (
    <div>
      {/* Anchor element used for IntersectionObserver */}
      <div id='top-anchor'></div>
      {/* Render the scroll-to-top button when not visible */}
      {!isVisible && (
        <ScrollToTopButton
          aria-label='Scroll to top'
          theme={theme}
          onClick={scrollToTop}
          className='scroll-to-top-button'
        >
          <FontAwesomeIcon icon={faArrowUp} className='icon' />
        </ScrollToTopButton>
      )}
    </div>
  );
};

export default ScrollToTop;

// Styled component for the scroll-to-top button
const ScrollToTopButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 2px 4px ${(props) => props.theme.shadowColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.neutralGray};

    .icon {
      transform: scale(1.2);
      color: ${(props) => props.theme.primaryColor};
    }
  }

  .icon {
    transition: transform 0.3s ease-in-out;
  }
`;
