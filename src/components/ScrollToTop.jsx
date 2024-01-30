import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const ScrollToTop = ({
  backgroundColor = '#616161',
  iconColor = '#fff',
  hoverBackgroundColor = '#dbdbdb',
  hoverIconColor = '#000',
  shadowColor = 'rgba(0, 0, 0, 0.4)',
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTopButton
      aria-label='Scroll to top'
      onClick={scrollToTop}
      className='scroll-to-top-button'
      // Pass the color props to styled component
      $backgroundColor={backgroundColor}
      $iconColor={iconColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $hoverIconColor={hoverIconColor}
      $shadowColor={shadowColor}
    >
      <FontAwesomeIcon icon={faArrowUp} className='icon' />
    </ScrollToTopButton>
  );
};

export default ScrollToTop;

const ScrollToTopButton = styled.button`
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  padding: 15px;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $iconColor }) => $iconColor};
  box-shadow: 0 2px 4px ${({ $shadowColor }) => $shadowColor};

  &:hover {
    background-color: ${({ $hoverBackgroundColor }) => $hoverBackgroundColor};

    .icon {
      transform: scale(1.2);
      color: ${({ $hoverIconColor }) => $hoverIconColor};
    }
  }

  .icon {
    transition: transform 0.3s ease-in-out;
  }
`;
