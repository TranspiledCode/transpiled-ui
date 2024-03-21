import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from './Icon';
import useMergedColors from '../hooks/useMergedColors';

// Style generating functions for Placeholder
const getBottomPosition = ({ focused, hasValue, fontSize }) =>
  focused || hasValue ? `calc(-${fontSize}px * 0.8)` : '2px';

const getFontSize = ({ fontSize, focused, hasValue }) =>
  focused || hasValue ? `calc(${fontSize}px * 0.6)` : `${fontSize}px`;

const getLabelColor = ({ focused, colors }) =>
  focused ? colors.inputLabelFocusColor : colors.inputLabelColor;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ colors }) => colors.inputBorderFocusColor};
  }
`;

const Placeholder = styled.label`
  font-family: inherit;
  position: absolute;
  bottom: ${(props) => getBottomPosition(props)};
  left: 1px;
  color: ${(props) => getLabelColor(props)};
  font-size: ${(props) => getFontSize(props)};
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
  id,
  name,
  placeholder,
  type = 'text',
  fontSize = 14,
  clearable = false,
  colorOverrides = {},
  theme = {},
  ariaLabel,
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
        id={id}
        name={name}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        fontSize={fontSize}
        value={value}
        aria-label={ariaLabel}
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
      {/* Replace with a button */}
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
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fontSize: PropTypes.number.isRequired,
  clearable: PropTypes.bool,
  colorOverrides: PropTypes.object,
  theme: PropTypes.object,
};

Input.defaultProps = {
  id: '',
  name: '',
  clearable: false,
  colorOverrides: {},
  theme: {},
};

export default Input;
