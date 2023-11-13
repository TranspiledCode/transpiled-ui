// ScrollToTop
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import useVisibility from './hooks/useVisibility';

const ScrollToTop = ({
  backgroundColor = '#ff0000',
  iconColor = '#fff',
  hoverBackgroundColor = '#dbdbdb',
  hoverIconColor = '#000',
  shadowColor = 'rgba(0, 0, 0, 0.4)',
}) => {
  const topAnchorRef = useRef(null);
  const isVisible = useVisibility(topAnchorRef);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div ref={topAnchorRef} />
      {!isVisible && (
        <ScrollToTopButton
          aria-label='Scroll to top'
          onClick={scrollToTop}
          className='scroll-to-top-button'
          // Pass the color props to styled component
          backgroundColor={backgroundColor}
          iconColor={iconColor}
          hoverBackgroundColor={hoverBackgroundColor}
          hoverIconColor={hoverIconColor}
          shadowColor={shadowColor}
        >
          <FontAwesomeIcon icon={faArrowUp} className='icon' />
        </ScrollToTopButton>
      )}
    </div>
  );
};

export default ScrollToTop;

const ScrollToTopButton = styled.button`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ iconColor }) => iconColor};
  border: none;
  border-radius: 50%;
  padding: 15px;
  box-shadow: 0 2px 4px ${({ shadowColor }) => shadowColor};
  cursor: pointer;
  z-index: 999;

  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};

    .icon {
      transform: scale(1.2);
      color: ${({ hoverIconColor }) => hoverIconColor};
    }
  }

  .icon {
    transition: transform 0.3s ease-in-out;
  }
`;
