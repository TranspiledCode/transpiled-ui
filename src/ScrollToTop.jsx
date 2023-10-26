// ScrollToTop
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeProvider';
import styled, { keyframes } from 'styled-components';

const ScrollToTop = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Create a ref for the top-anchor element
  const topAnchorRef = useRef(null);

  // Create an IntersectionObserver to detect when the top-anchor element is in the viewport
  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsVisible(entry.isIntersecting);
    },
    {
      rootMargin: '0px 0px -100% 0px',
    }
  );

  useEffect(() => {
    if (topAnchorRef.current) {
      observer.observe(topAnchorRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [observer]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {/* Use the ref for the top-anchor element */}
      <div ref={topAnchorRef} />
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
