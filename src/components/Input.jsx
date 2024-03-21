import React, { useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Icon from './Icon';
import useMergedColors from '../hooks/useMergedColors';

const getLabelColor = ({ focused, colors }) =>
  focused ? colors.inputLabelFocusColor : colors.inputLabelColor;

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: inherit;
  font-size: inherit;
`;

const StyledInput = styled.input`
  font-family: inherit;
  font-size: inherit;
  width: 100%;
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
  font-size: inherit;
  position: absolute;
  bottom: 2px;
  left: 1px;
  color: ${(props) => getLabelColor(props)};
  transition: bottom 0.3s ease, font-size 0.3s ease, color 0.3s ease;
  pointer-events: none;

  &[data-focused='true'],
  &[data-has-value='true'] {
    bottom: calc(-1em * 1.3);
    font-size: calc(1em * 0.6);
  }
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
  clearable = false,
  colorOverrides = {},
  theme = {},
  ariaLabel,
  className,
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
    <Container className={className}>
      <StyledInput
        id={id}
        name={name}
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        value={value}
        aria-label={ariaLabel}
        role='textbox'
        colors={colors}
      />
      <Placeholder
        data-focused={focused.toString()}
        data-has-value={hasValue.toString()}
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
