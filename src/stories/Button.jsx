import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.neutralGray};
  color: ${(props) => props.textColor || props.theme.text};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Button = ({ backgroundColor, textColor, label }) => {
  return (
    <StyledButton
      type='button'
      backgroundColor={backgroundColor}
      textColor={textColor}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  backgroundColor: '#000000',
  textColor: '#ffffff',
};
