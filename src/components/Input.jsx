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
  inputBackgroundColor: 'transparent',
  inputClearIconColor: '#b19aad',
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
  font-size: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ colors }) => colors.inputBackgroundColor};
  border: ${({ borderStyle, colors }) =>
    borderStyle === 'bottom' ? 'none' : `1px solid ${colors.inputBorderColor}`};
  border-bottom: ${({ borderStyle, colors }) =>
    borderStyle === 'bottom'
      ? `1px solid ${colors.inputBorderColor}`
      : `1px solid ${colors.inputBorderColor}`};
  border-left: ${({ borderStyle, colors }) =>
    borderStyle !== 'bottom' ? `1px solid ${colors.inputBorderColor}` : 'none'};

  &:focus-within {
    color: ${({ colors }) => colors.inputBorderFocusColor};
    border-color: ${({ colors }) => colors.inputBorderFocusColor};
    border-left: ${({ borderStyle, colors }) =>
      borderStyle !== 'bottom'
        ? `2px solid ${colors.inputBorderFocusColor}`
        : 'none'};
    border-bottom: ${({ borderStyle, colors }) =>
      borderStyle !== 'bottom'
        ? `1px solid ${colors.inputBorderFocusColor}`
        : `2px solid ${colors.inputBorderFocusColor}`};
  }
`;

const StyledInput = styled.input`
  position: relative;
  display: block;
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
  background-color: ${({ colors }) => colors.inputBackgroundColor};
  padding: ${({ borderStyle, size }) =>
    inputSizeVariants[borderStyle][size].inputPadding};
  font-family: inherit;
  font-size: ${({ borderStyle, size }) =>
    inputSizeVariants[borderStyle][size].inputFontSize};
  overflow: hidden;
  text-overflow: ellipsis;
  box-sizing: border-box;
  white-space: nowrap;
  color: ${({ colors }) => colors.inputFontColor};

  &:focus {
    border-bottom: none;
    &::placeholder {
      color: transparent;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    display: ${({ fieldLabel }) => (fieldLabel ? 'block' : 'none')};
    top: ${({ borderStyle, size }) =>
      inputSizeVariants[borderStyle][size].labelTop};
    left: ${({ borderStyle, size }) =>
      inputSizeVariants[borderStyle][size].labelLeft};
    font-size: ${({ borderStyle, size }) =>
      inputSizeVariants[borderStyle][size].labelFontSize};
    color: ${({ colors }) => colors.inputLabelColor};
  }
`;

const PlaceholderLabel = styled.label`
  position: absolute;
  top: ${({ borderStyle, size }) =>
    inputSizeVariants[borderStyle][size].placeholderTop};
  left: ${({ borderStyle, size }) =>
    inputSizeVariants[borderStyle][size].placeholderLeft};
  font-size: ${({ borderStyle, size }) =>
    inputSizeVariants[borderStyle][size].placeholderFontSize};
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
  color: ${({ colors }) => colors.inputClearIconColor};
  background-color: ${({ colors }) => colors.inputBackgroundColor};
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
  borderStyle,
  fieldLabel = true,
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(placeholder);

  // Use merged colors from default, theme, and custom colors prop
  const inputColors = useMergedColors(theme, colors);

  const handleChnange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container colors={inputColors} borderStyle={borderStyle}>
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
        colors={inputColors}
        borderStyle={borderStyle}
        fieldLabel={fieldLabel}
      />
      <PlaceholderLabel
        size={size}
        htmlFor={id}
        colors={inputColors}
        borderStyle={borderStyle}
      >
        {placeholder}
      </PlaceholderLabel>
      <ClearableIcon
        colors={inputColors}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        {clearable && value && (
          <Icon
            size='1x'
            iconType='solid'
            iconName='close'
            onClick={() => {
              setValue('');
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
    inputBorderColor: PropTypes.string,
    inputBorderFocusColor: PropTypes.string,
    inputFontColor: PropTypes.string,
    inputLabelColor: PropTypes.string,
    inputPlaceholderColor: PropTypes.string,
    inputBackgroundColor: PropTypes.string,
    inputClearIconColor: PropTypes.string,
  }),
  theme: PropTypes.shape({}),
  borderStyle: PropTypes.oneOf(['box', 'bottom']),
};

Input.defaultProps = {
  autocomplete: 'off',
  size: 'm',
  clearable: false,
  colors: {},
  theme: {},
  borderStyle: 'box',
};

export default Input;
