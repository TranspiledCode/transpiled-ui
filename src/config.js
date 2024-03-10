// Define common styles for input elements
const commonStyles = {
  xs: {
    inputFontSize: '1em',
    placeholderFontSize: '1em',
    labelFontSize: '0.6em',
  },
  s: {
    inputFontSize: '1.2em',
    placeholderFontSize: '1.2em',
    labelFontSize: '0.8em',
  },
  m: {
    inputFontSize: '1.4em',
    placeholderFontSize: '1.4em',
    labelFontSize: '1.0em',
  },
  l: {
    inputFontSize: '1.8em',
    placeholderFontSize: '1.8em',
    labelFontSize: '1.2em',
  },
  xl: {
    inputFontSize: '2.2em',
    placeholderFontSize: '2.2em',
    labelFontSize: '1.4em',
  },
};

const inputSizeVariants = {
  box: {
    ...commonStyles,
    xs: {
      ...commonStyles.xs,
      labelTop: '-1.3em',
      inputPadding: '0.3em 0.6em 0.2em 0.6em',
      placeholderLeft: '0.6em',
      labelLeft: '-0.1em',
      placeholderTop: '0.3em',
    },
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
    xs: {
      ...commonStyles.xs,
      labelTop: '2.4em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    s: {
      ...commonStyles.s,
      labelTop: '2.3em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    m: {
      ...commonStyles.m,
      labelTop: '2.2em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    l: {
      ...commonStyles.l,
      labelTop: '2.1em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '2em',
      placeholderLeft: '0.1em',
      labelLeft: '0.1em',
      placeholderTop: '0.1em',
    },
  },
};

export { inputSizeVariants };
