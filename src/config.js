// Define common styles for input elements
const commonStyles = {
  s: {
    inputFontSize: '1.4em',
    placeholderFontSize: '1.4em',
    labelFontSize: '1em',
    placeholderTop: '0.1em',
  },
  m: {
    inputFontSize: '1.6em',
    placeholderFontSize: '1.6em',
    labelFontSize: '1em',
    placeholderTop: '0.1em',
  },
  l: {
    inputFontSize: '1.8em',
    placeholderFontSize: '1.8em',
    labelFontSize: '1.2em',
    placeholderTop: '0.1em',
  },
  xl: {
    inputFontSize: '2.0em',
    placeholderFontSize: '2.0em',
    labelFontSize: '1.4em', // Font Size when the label moves put of the input area
    placeholderTop: '0.2em',
  },
};

// Define size variants for input elements, including padding, font sizes, and positions for label and placeholder
const inputSizeVariants = {
  // Variants for the 'box' layout
  box: {
    ...commonStyles,
    s: {
      ...commonStyles.s,
      labelTop: '-1.2em',
      inputPadding: '4px 8px',
      placeholderLeft: '0.6em',
      labelLeft: '0.1em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '-1.2em',
      inputPadding: '6px 10px',
      placeholderLeft: '0.6em',
      labelLeft: '0.5em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '-1.2em',
      inputPadding: '8px 11px',
      placeholderLeft: '0.5em',
      labelLeft: '0.6em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '-1.2em',
      inputPadding: '10px 11px',
      placeholderLeft: '0.5em',
      labelLeft: '0.5em',
    },
  },
  // Variants for the 'bottom' layout
  bottom: {
    ...commonStyles,
    s: {
      ...commonStyles.s,
      labelTop: '2.6em',
      inputPadding: '0.1em 0.1em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '2.4em',
      inputPadding: '0.1em 0.1em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '2.6em',
      inputPadding: '0.1em 0.1em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '2.4em',
      inputPadding: '0.1em 0.1em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
    },
  },
};

export { inputSizeVariants };
