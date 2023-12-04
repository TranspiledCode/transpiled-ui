import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { defaultTheme } from './theme'; // Import defaultTheme

// Create a new context called ThemeContext
const ThemeContext = createContext();

// Custom hook to access the theme from ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component that provides the theme and a toggle function
export const ThemeProvider = ({ children, externalTheme }) => {
  // Add test to validate the external theme is valid

  const selectedTheme = externalTheme || defaultTheme;

  // State to track whether the dark theme is active
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  // Determine the current theme based on the state
  const theme = isDarkTheme ? selectedTheme.dark : selectedTheme.light;

  // Provide the theme and toggleTheme function to the components using ThemeContext
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};
