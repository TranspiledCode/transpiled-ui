import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: relative;
  font-size: 10px; /* Adjust base font size as needed */
  width: 400px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 1em; /* Ensures input font size matches container's */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
  }

  &:focus + label {
    top: -10px;
    left: 0;
    color: #007bff;
    font-size: 0.75em;
  }
`;

const Placeholder = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #999;
  transition: all 0.3s ease;
  pointer-events: none;
`;

const Input = ({ placeholder, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <Container>
      <StyledInput
        {...props}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Placeholder>{placeholder}</Placeholder>
    </Container>
  );
};

export default Input;
