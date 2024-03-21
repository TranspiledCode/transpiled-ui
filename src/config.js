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

const inputSizeVariants = {
  box: {
    s: {
      ...commonStyles.s,
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
    },
  },
  bottom: {
    s: {
      ...commonStyles.s,
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
    },
  },
};

export { inputSizeVariants };
