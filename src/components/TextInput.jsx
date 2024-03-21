import React, { useState } from 'react';
import styled from '@emotion/styled';
import Icon from './Icon';

// Custom Input component with dynamic styling based on focus and value presence.
const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 32px;

  // Testing purposes
  font-family: 'roboto', sans-serif;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  font-size: ${({ fontSize = 'inherit' }) =>
    typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
  padding: 0 30px 1px 1px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid #575757;
  outline: none;
  transition: border-color 0.3s ease, border-bottom-width 0.3s ease;

  &:focus {
    border-color: #00b3ff;
  }
`;

const Placeholder = styled.label`
  font-family: inherit;
  position: absolute;
  bottom: ${({ focused, hasValue, fontSize = 'inherit' }) => {
    // calc(-${fontSize}px * 0.8);
    // Calculate the font size. If is set to inherit

    return focused || hasValue ? size : '2px';
  }};
  left: 1px;
  color: ${({ focused }) => (focused ? '#007bff' : '#999')};
  font-size: ${({ fontSize = 'inherit', focused, hasValue }) =>
    focused || hasValue ? `calc(${fontSize}px * 0.6)` : `${fontSize}px`};
  transition: bottom 0.3s ease, font-size 0.3s ease;
  pointer-events: none;
`;

const ClearableIcon = styled.div`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #2c2c2c;
  border: none;
`;

const Input = ({ placeholder, type = 'text', fontSize, clearable = false }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
  };
  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0);
    setValue(e.target.value);
  };

  return (
    <Container>
      <StyledInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        fontSize={fontSize}
        value={value}
        aria-label={placeholder}
        role='textbox'
      />
      <Placeholder focused={focused} hasValue={hasValue} fontSize={fontSize}>
        {placeholder}
      </Placeholder>

      <ClearableIcon onMouseDown={(e) => e.preventDefault()}>
        {clearable && value && (
          <Icon
            size='1x'
            iconType='solid'
            iconName='close'
            onClick={() => {
              setValue('');
              setHasValue(false);
            }}
          />
        )}
      </ClearableIcon>
    </Container>
  );
};

export default Input;
