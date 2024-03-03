import React, { useState, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from './Icon';

import { inputSizeVariants } from '../config';
import validateAutocompleteValue from '../utils/autoCompleteValidation';

const defaultColors = {
  inputBorderColor: '#CBD2D9',
  inputBorderFocusColor: '#5A76A8',
  inputFontColor: '#2E3D49',
  inputLabelColor: '#5A76A8',
  inputPlaceholderColor: '#9AA5B1',
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: 1px solid ${({ colors }) => colors.inputBorderColor};
  border-left: 3px solid ${({ colors }) => colors.inputBorderColor};
  box-sizing: border-box;

  &:focus-within {
    border-left: 3px solid ${({ colors }) => colors.inputBorderFocusColor};
    border-color: ${({ colors }) => colors.inputBorderFocusColor};
  }
`;

const StyledInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  padding: ${({ size }) => inputSizeVariants[size].inputPadding};
  font-family: inherit;
  font-size: ${({ size }) => inputSizeVariants[size].inputFontSize};
  transition: border-color 0.3s, border-left-width 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  white-space: nowrap;
  color: ${({ colors }) => colors.inputFontColor};

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: ${({ size }) => inputSizeVariants[size].labelTop};
    left: ${({ size }) => inputSizeVariants[size].labelLeft};
    font-size: ${({ size }) => inputSizeVariants[size].labelFontSize};
    color: ${({ colors }) => colors.inputLabelColor};
  }
`;

const PlaceholderLabel = styled.label`
  position: absolute;
  top: ${({ size }) => inputSizeVariants[size].placeholderTop};
  left: ${({ size }) => inputSizeVariants[size].placeholderLeft};
  font-size: ${({ size }) => inputSizeVariants[size].placeholderFontSize};
  color: ${({ colors }) => colors.inputPlaceholderColor};
  transition: all 0.3s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
`;

const ClearableIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.5rem;
`;

const Input = ({
  id,
  placeholder,
  name,
  type,
  autocomplete,
  size = 'm',
  clearable = false,
  colors = {},
  theme = {},
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(placeholder);

  // Use merged colors from default, theme, and custom colors prop
  const mergedColors = useMergedColors(theme, colors);

  const handleChnange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container colors={mergedColors}>
      <StyledInput
        id={id}
        ref={inputRef}
        placeholder={label ? '' : placeholder}
        name={name}
        type={type}
        autoComplete={autocomplete || 'off'}
        size={size}
        clearable={clearable}
        onChange={(e) => {
          handleChnange(e);
        }}
        value={value}
        colors={mergedColors}
      />
      <PlaceholderLabel size={size} htmlFor={id} colors={mergedColors}>
        {placeholder}
      </PlaceholderLabel>
      <ClearableIcon>
        {clearable && value && (
          <Icon
            size='1x'
            iconType='solid'
            iconName='close'
            onClick={() => {
              setValue('');
              inputRef.current.focus();
            }}
          />
        )}
      </ClearableIcon>
    </Container>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  autocomplete: validateAutocompleteValue,
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  clearable: PropTypes.bool,
  colors: PropTypes.shape({
    border: PropTypes.string,
    borderFocus: PropTypes.string,
    labelColor: PropTypes.string,
    inputPlaceholderColor: PropTypes.string,
  }),
  theme: PropTypes.shape({}),
};

Input.defaultProps = {
  autocomplete: 'off',
  size: 'm',
  clearable: false,
  colors: {},
  theme: {},
};

export default Input;
