// Define common styles for input elements
const commonStyles = {
  s: {
    inputPadding: '4px 8px',
    inputFontSize: '1.8em',
    labelFontSize: '1.4em',
    labelLeft: '0.6em',
    placeholderFontSize: '1.6em',
    placeholderTop: '0.5em',
    placeholderLeft: '0.6em',
  },
  m: {
    inputPadding: '6px 10px',
    inputFontSize: '2em',
    labelFontSize: '1.6em',
    labelLeft: '0.5em',
    placeholderFontSize: '1.8em',
    placeholderTop: '0.5em',
    placeholderLeft: '0.6em',
  },
  l: {
    inputPadding: '8px 11px',
    inputFontSize: '2.2em',
    labelFontSize: '1.7em',
    labelLeft: '0.6em',
    placeholderFontSize: '2em',
    placeholderTop: '0.7em',
    placeholderLeft: '0.5em',
  },
  xl: {
    inputPadding: '10px 11px',
    inputFontSize: '2.4em',
    labelFontSize: '1.8em',
    labelLeft: '0.5em',
    placeholderFontSize: '2.1em',
    placeholderTop: '0.8em',
    placeholderLeft: '0.5em',
  },
};

// Define size variants for input elements, including padding, font sizes, and positions for label and placeholder
const inputSizeVariants = {
  // Variants for the 'box' layout
  box: {
    ...commonStyles,
    s: { ...commonStyles.s, labelTop: '-1.2em' },
    m: { ...commonStyles.m, labelTop: '-1.2em' },
    l: { ...commonStyles.l, labelTop: '-1.2em' },
    xl: { ...commonStyles.xl, labelTop: '-1.2em' },
  },
  // Variants for the 'bottom' layout
  bottom: {
    ...commonStyles,
    s: { ...commonStyles.s, labelTop: '2.3em', inputPadding: '4px 0px' },
    m: { ...commonStyles.m, labelTop: '2.5em', inputPadding: '6px 0px' },
    l: { ...commonStyles.l, labelTop: '2.8em', inputPadding: '8px 0px' },
    xl: { ...commonStyles.xl, labelTop: '3.3em', inputPadding: '10px 0px' },
  },
};

export { inputSizeVariants };
