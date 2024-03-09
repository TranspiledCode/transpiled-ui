// Define common styles for input elements
const commonStyles = {
  s: {
    inputFontSize: '1.4em',
    placeholderFontSize: '1.4em',
    labelFontSize: '1em',
  },
  m: {
    inputFontSize: '1.6em',
    placeholderFontSize: '1.6em',
    labelFontSize: '1.2em',
  },
  l: {
    inputFontSize: '1.8em',
    placeholderFontSize: '1.8em',
    labelFontSize: '1.4em',
  },
  xl: {
    inputFontSize: '2.0em',
    placeholderFontSize: '2.0em',
    labelFontSize: '1.6em',
  },
};

const inputSizeVariants = {
  box: {
    ...commonStyles,
    s: {
      ...commonStyles.s,
      labelTop: '-1.3em',
      inputPadding: '4px 8px 2px 8px',
      placeholderLeft: '0.6em',
      labelLeft: '-0.1em',
      placeholderTop: '0.3em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '-1.3em',
      inputPadding: '6px 10px 4px 10px',
      placeholderLeft: '0.6em',
      labelLeft: '-0.1em',
      placeholderTop: '0.4em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '-1.3em',
      inputPadding: '8px 12px 6px 12px',
      placeholderLeft: '0.5em',
      labelLeft: '-0.1em',
      placeholderTop: '0.45em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '-1.3em',
      inputPadding: '10px 11px 8px 11px',
      placeholderLeft: '0.5em',
      labelLeft: '-0.1em',
      placeholderTop: '0.5em',
    },
  },
  bottom: {
    ...commonStyles,
    s: {
      ...commonStyles.s,
      labelTop: '2.5em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '2.4em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '2.3em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '2.2em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
  },
};

export { inputSizeVariants };
