<<<<<<< HEAD
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

// Specific variants only include properties that differ from commonStyles
=======
const commonStyles = {
  s: {
    inputFontSize: '12px',
    placeholderFontSize: '12px',
    labelFontSize: '8px',
    clearIconFontSize: '12px',
    clearIconMargin: '0 10px',
  },
  m: {
    inputFontSize: '14px',
    placeholderFontSize: '14px',
    labelFontSize: '10px',
    clearIconFontSize: '14px',
    clearIconMargin: '0 10px',
  },
  l: {
    inputFontSize: '18px',
    placeholderFontSize: '18px',
    labelFontSize: '12px',
    clearIconFontSize: '18px',
    clearIconMargin: '0 10px',
  },
  xl: {
    inputFontSize: '22px',
    placeholderFontSize: '22px',
    labelFontSize: '14px',
    clearIconFontSize: '20px',
    clearIconMargin: '0 10px',
  },
};

>>>>>>> test-input
const inputSizeVariants = {
  box: {
    s: {
      ...commonStyles.s,
<<<<<<< HEAD
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
=======
      labelTop: '-13px',
      inputPadding: '4px 7px 2px 7px',
      placeholderLeft: '6px',
      labelLeft: '-1px',
      placeholderTop: '4px',
    },
    m: {
      ...commonStyles.m,
      labelTop: '-13px',
      inputPadding: '5px 7px 3px 7px',
      placeholderLeft: '7px',
      labelLeft: '-1px',
      placeholderTop: '5px',
    },
    l: {
      ...commonStyles.l,
      labelTop: '-14px',
      inputPadding: '5px 7px 3px 7px',
      placeholderLeft: '7px',
      labelLeft: '-1px',
      placeholderTop: '5px',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '-15px',
      inputPadding: '5px 7px 3px 7px',
      placeholderLeft: '7px',
      labelLeft: '-1px',
      placeholderTop: '5px',
>>>>>>> test-input
    },
  },
  bottom: {
    s: {
      ...commonStyles.s,
<<<<<<< HEAD
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
=======
      labelTop: '26px',
      placeholderLeft: '1px',
      labelLeft: '1px',
      placeholderTop: '1px',
    },
    m: {
      ...commonStyles.m,
      labelTop: '24px',
      placeholderLeft: '1px',
      labelLeft: '1px',
      placeholderTop: '1px',
    },
    l: {
      ...commonStyles.l,
      labelTop: '23px',
      placeholderLeft: '1px',
      labelLeft: '1px',
      placeholderTop: '1px',
    },
    xl: {
      ...commonStyles.xl,
      labelTop: '23px',
      placeholderLeft: '1px',
      labelLeft: '1px',
      placeholderTop: '1px',
>>>>>>> test-input
    },
  },
};

export { inputSizeVariants };
