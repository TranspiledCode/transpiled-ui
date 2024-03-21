import React, { useState, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Icon from './Icon';

const defaultColors = {
  inputBorderColor: '#CFD8DC',
  inputBorderFocusColor: '#4b8fb1',
  inputFontColor: '#455A64',
  inputLabelColor: '#b4b8ba',
  inputLabelFocusColor: '#4b8fb1',
  inputBackgroundColor: 'transparent',
  inputClearIconColor: '#B0BEC5',
};

const useMergedColors = (theme, customColors) => {
  return useMemo(
    () => ({
      ...defaultColors,
      ...theme,
      ...customColors,
    }),
    [theme, customColors]
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  // Testing purposes
  font-family: 'roboto', sans-serif;
`;

const StyledInput = styled.input`
  font-family: inherit;
  width: 100%;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  padding: 0 30px 1px 1px;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid ${({ colors }) => colors.inputBorderColor};
  background-color: ${({ colors }) => colors.inputBackgroundColor};
  color: ${({ colors }) => colors.inputFontColor};
  outline: none;
  transition: border-color 0.3s ease, border-bottom-width 0.3s ease;

  &:focus {
    border-color: ${({ colors }) => colors.inputBorderFocusColor};
    /* border-bottom-width: 2px; */
  }
`;

const Placeholder = styled.label`
  font-family: inherit;
  position: absolute;
  bottom: ${({ focused, hasValue, fontSize }) =>
    focused || hasValue ? `calc(-${fontSize}px * 0.8)` : '2px'};
  left: 1px;
  color: ${({ focused, colors }) =>
    focused ? colors.inputLabelFocusColor : colors.inputLabelColor};
  font-size: ${({ fontSize, focused, hasValue }) =>
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
  color: ${({ colors }) => colors.inputClearIconColor};
  border: none;
`;

const Input = ({
  placeholder,
  type = 'text',
  fontSize = 14,
  clearable = false,
  colorOverrides = {},
  theme = {},
}) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const inputRef = useRef(null);

  const colors = useMergedColors(theme, colorOverrides);

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
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        fontSize={fontSize}
        value={value}
        aria-label={placeholder}
        role='textbox'
        colors={colors}
      />
      <Placeholder
        focused={focused}
        hasValue={hasValue}
        fontSize={fontSize}
        colors={colors}
      >
        {placeholder}
      </Placeholder>
      <ClearableIcon onMouseDown={(e) => e.preventDefault()} colors={colors}>
        {clearable && value && (
          <Icon
            size='1x'
            iconType='solid'
            iconName='close'
            onClick={() => {
              setValue('');
              setHasValue(false);
              inputRef.current.focus();
            }}
          />
        )}
      </ClearableIcon>
    </Container>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.required,
  type: PropTypes.string.required,
  fontSize: PropTypes.number.required,
  clearable: PropTypes.bool,
  colorOverrides: PropTypes.object,
  theme: PropTypes.object,
};

Input.defaultProps = {
  clearable: false,
  colorOverrides: {},
  theme: {},
};

export default Input;
