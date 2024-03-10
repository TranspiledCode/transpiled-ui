// Define common styles for input elements
const commonStyles = {
  s: {
    inputFontSize: '1.2em',
    placeholderFontSize: '1.2em',
    labelFontSize: '0.8em',
    clearIconFontSize: '1.2em',
    clearIconMargin: '0 1rem',
  },
  m: {
    inputFontSize: '1.4em',
    placeholderFontSize: '1.4em',
    labelFontSize: '1.0em',
    clearIconFontSize: '1.4em',
    clearIconMargin: '0 1rem',
  },
  l: {
    inputFontSize: '1.8em',
    placeholderFontSize: '1.8em',
    labelFontSize: '1.2em',
    clearIconFontSize: '1.8em',
    clearIconMargin: '0 1rem',
  },
  xl: {
    inputFontSize: '2.2em',
    placeholderFontSize: '2.2em',
    labelFontSize: '1.4em',
    clearIconFontSize: '2em',
    clearIconMargin: '0 1rem',
  },
};

const inputSizeVariants = {
  box: {
    ...commonStyles,

    s: {
      ...commonStyles.s,
      labelTop: '-1.3em',
      inputPadding: '0.4em 0.7em 0.2em 0.7em',
      placeholderLeft: '0.6em',
      labelLeft: '-0.1em',
      placeholderTop: '0.4em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '-1.3em',
      inputPadding: '0.5em 0.7em 0.3em 0.7em',
      placeholderLeft: '0.7em',
      labelLeft: '-0.1em',
      placeholderTop: '0.5em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '-1.4em',
      inputPadding: '0.5em 0.7em 0.3em 0.7em',
      placeholderLeft: '0.7em',
      labelLeft: '-0.1em',
      placeholderTop: '0.5em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '-1.5em',
      inputPadding: '0.5em 0.7em 0.3em 0.7em',
      placeholderLeft: '0.7em',
      labelLeft: '-0.1em',
      placeholderTop: '0.5em',
    },
  },
  bottom: {
    ...commonStyles,

    s: {
      ...commonStyles.s,
      labelTop: '2.6em',
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
      labelTop: '2.3em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
  },
};

export { inputSizeVariants };
