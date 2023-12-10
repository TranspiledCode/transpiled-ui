import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: ${(props) => props.border || 'none'};
  background-color: ${(props) => props.backgroundColor || '#5f5f5f'};
  color: ${(props) => props.color || '#fff'};
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#eee'};
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Button = ({
  children,
  onClick,
  ariaLabel,
  backgroundColor,
  color,
  border,
  hoverColor,
  ...props
}) => (
  <StyledButton
    backgroundColor={backgroundColor}
    color={color}
    border={border}
    onClick={onClick}
    aria-label={ariaLabel}
    hoverColor={hoverColor}
    {...props}
  >
    {children}
  </StyledButton>
);

export default Button;
