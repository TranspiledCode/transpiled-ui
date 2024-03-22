import { useMemo } from 'react';

const defaultColors = {
  inputBorderColor: '#CFD8DC',
  inputBorderFocusColor: '#4b8fb1',
  inputFontColor: '#ff00d0',
  inputLabelColor: '#b4b8ba',
  inputLabelFocusColor: '#4b8fb1',
  inputBackgroundColor: 'transparent',
  inputClearIconColor: '#B0BEC5',
};

const useMergedColors = (theme, customColors) => {
  return useMemo(
    () => ({
      ...defaultColors,
      ...theme,
      ...customColors,
    }),
    [theme, customColors]
  );
};

export default useMergedColors;
