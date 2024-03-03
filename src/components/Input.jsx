import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Icon from './Icon';
import validateAutocompleteValue from '../utils/autoCompleteValidation';

const defaultColors = {
  border: '#ccc',
  borderFocus: '#1554bb',
  labelColor: '#565656',
  placeholderColor: '#aaa',
};

const sizeVariants = {
  s: {
    inputPadding: '4px 8px',
    inputFontSize: '1rem',
    labelFontSize: '0.8rem',
    labelTop: '-1.2rem',
    placeholderTop: '0.4rem',
  },
  m: {
    inputPadding: '6px 10px',
    inputFontSize: '1.2rem',
    labelFontSize: '1rem',
    labelTop: '-1.5rem',
    placeholderTop: '0.6rem',
  },
  l: {
    inputPadding: '8px 11px',
    inputFontSize: '1.4rem',
    labelFontSize: '1.2rem',
    labelTop: '-1.8rem',
    placeholderTop: '0.7rem',
  },
  xl: {
    inputPadding: '10px 11px',
    inputFontSize: '1.6rem',
    labelFontSize: '1.4rem',
    labelTop: '-2.1rem',
    placeholderTop: '0.8rem',
  },
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border: 1px solid red;
  border: 1px solid ${({ theme }) => theme.border || defaultColors.border};
  border-left: 3px solid ${({ theme }) => theme.border || defaultColors.border};
  // When the StyledInput has focus
  &:focus-within {
    border-left: 3px solid
      ${({ theme }) => theme.borderFocus || defaultColors.borderFocus};
    border-color: ${({ theme }) =>
      theme.borderFocus || defaultColors.borderFocus};
  }
`;

const StyledInput = styled.input`
  width: 90%;
  outline: none;
  border: none;
  padding: ${({ size }) => sizeVariants[size].inputPadding};
  font-family: inherit;
  font-size: ${({ size }) => sizeVariants[size].inputFontSize};
  transition: border-color 0.3s, border-left-width 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: ${({ size }) => sizeVariants[size].labelTop};
    left: 0.8rem;
    font-size: ${({ size }) => sizeVariants[size].labelFontSize};
    color: ${({ theme }) => theme.labelColor || defaultColors.labelColor};
  }
`;

// initial placeholder styling
const PlaceholderLabel = styled.label`
  position: absolute;
  top: ${({ size }) => sizeVariants[size].placeholderTop};
  left: 0.8rem;
  font-size: ${({ size }) => sizeVariants[size].labelFontSize};
  color: ${({ theme }) =>
    theme.placeholderColor || defaultColors.placeholderColor};
  transition: all 0.3s;
  pointer-events: none;

  @media (min-width: 768px) {
    font-size: ${({ size }) => sizeVariants[size].labelFontSize};
  }
`;

const ClearableIcon = styled.button`
  position: absolute;
  right: 0;
`;

const Input = ({
  id,
  placeholder,
  name,
  type,
  autocomplete,
  size = 'm',
  clearable = false,
}) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  const [label, setLabel] = useState(placeholder);

  const handleChnange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container>
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
      />
      <PlaceholderLabel size={size} htmlFor={id}>
        {placeholder}
      </PlaceholderLabel>
      {clearable && value && (
        <Icon
          size='1x'
          iconType='solid'
          iconName='times'
          onClick={() => {
            setValue('');
            inputRef.current.focus();
          }}
        >
          x
        </Icon>
      )}
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
};

Input.defaultProps = {
  autocomplete: 'off',
  size: 'm',
  clearable: false,
};

export default Input;
