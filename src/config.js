// Define common styles for input elements
const commonStyles = {
  s: {
    inputPadding: '4px 8px',
    inputFontSize: '1rem',
    labelFontSize: '0.7rem',
    labelLeft: '0.1rem',
    placeholderFontSize: '0.8rem',
    placeholderTop: '0.5rem',
    placeholderLeft: '0.6rem',
  },
  m: {
    inputPadding: '6px 10px',
    inputFontSize: '1.2rem',
    labelFontSize: '0.9rem',
    labelLeft: '0.1rem',
    placeholderFontSize: '1rem',
    placeholderTop: '0.5rem',
    placeholderLeft: '0.7rem',
  },
  l: {
    inputPadding: '8px 11px',
    inputFontSize: '1.4rem',
    labelFontSize: '1rem',
    labelLeft: '0.1rem',
    placeholderFontSize: '1.2rem',
    placeholderTop: '0.7rem',
    placeholderLeft: '0.7rem',
  },
  xl: {
    inputPadding: '10px 11px',
    inputFontSize: '1.6rem',
    labelFontSize: '1.1rem',
    labelLeft: '0.1rem',
    placeholderFontSize: '1.4rem',
    placeholderTop: '0.8rem',
    placeholderLeft: '0.7rem',
  },
};

// Define size variants for input elements, including padding, font sizes, and positions for label and placeholder
const inputSizeVariants = {
  // Variants for the 'box' layout
  box: {
    ...commonStyles,
    s: { ...commonStyles.s, labelTop: '-0.9rem' },
    m: { ...commonStyles.m, labelTop: '-1.2rem' },
    l: { ...commonStyles.l, labelTop: '-1.4rem' },
    xl: { ...commonStyles.xl, labelTop: '-1.6rem' },
  },
  // Variants for the 'bottom' layout
  bottom: {
    ...commonStyles,
    s: { ...commonStyles.s, labelTop: '2.2rem' },
    m: { ...commonStyles.m, labelTop: '2.4rem' },
    l: { ...commonStyles.l, labelTop: '2.8rem' },
    xl: { ...commonStyles.xl, labelTop: '3.3rem' },
  },
};

export { inputSizeVariants };
