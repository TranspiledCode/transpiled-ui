// Define common styles for input elements
const commonStyles = {
  s: {
    inputFontSize: '1rem',
    placeholderFontSize: '1rem',
    labelFontSize: '0.8rem',
  },
  m: {
    inputFontSize: '1.2rem',
    placeholderFontSize: '1.2rem',
    labelFontSize: '1rem',
  },
  l: {
    inputFontSize: '1.4rem',
    placeholderFontSize: '1.4rem',
    labelFontSize: '1.2rem',
  },
  xl: {
    inputFontSize: '1.8rem',
    placeholderFontSize: '1.8rem',
    labelFontSize: '1.4rem',
  },
};

const inputSizeVariants = {
  box: {
    ...commonStyles,
    s: {
      ...commonStyles.s,
      labelTop: '-1.2rem',
      inputPadding: '0.3rem 0.6rem 0.2rem 0.6rem',
      placeholderLeft: '0.6rem',
      labelLeft: '-0.1rem',
      placeholderTop: '0.3rem',
    },
    m: {
      ...commonStyles.m,
      labelTop: '-1.3rem',
      inputPadding: '0.4rem 0.7rem 0.2rem 0.7rem',
      placeholderLeft: '0.6rem',
      labelLeft: '-0.1rem',
      placeholderTop: '0.4rem',
    },
    l: {
      ...commonStyles.l,
      labelTop: '-1.5rem',
      inputPadding: '0.5rem 0.7rem 0.3rem 0.7rem',
      placeholderLeft: '0.7rem',
      labelLeft: '-0.1rem',
      placeholderTop: '0.5rem',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '-1.6rem',
      inputPadding: '0.5rem 0.7rem 0.3rem 0.7rem',
      placeholderLeft: '0.7rem',
      labelLeft: '-0.1rem',
      placeholderTop: '0.5rem',
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
