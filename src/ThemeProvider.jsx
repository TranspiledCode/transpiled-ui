import React, { createContext, useContext, useState } from 'react';

// Create a new context called ThemeContext
const ThemeContext = createContext();

// Define default theme colors
const defaultTheme = {
  primaryColor: '#013F6A',
  secondaryColor: '#2EBFD4',
  tertiaryColor: '#93CCEA',
  accentColor: '#FF910F',
  black: '#090909',
  white: '#ffffff',
  neutralGray: '#ACACAC',
  text: '#090909',
  background: '#ffffff',
  shadowColor: 'rgba(0, 0, 0, 0.1)',
};

// Define dark theme colors
const darkTheme = {
  primaryColor: '#2EBFD4',
  secondaryColor: '#013F6A',
  tertiaryColor: '#1A1A1A',
  accentColor: '#FF910F',
  black: '#ffffff',
  white: '#090909',
  neutralGray: '#757575',
  text: '#ffffff',
  background: '#090909',
  shadowColor: 'rgba(255, 255, 255, 0.1)',
};

// Custom hook to access the theme from ThemeContext
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component that provides the theme and a toggle function
export const ThemeProvider = ({ children }) => {
  // State to manage the current theme
  const [theme, setTheme] = useState(defaultTheme);
  // State to track whether the dark theme is active
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between default and dark themes
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    setTheme((prevIsDarkTheme) =>
      prevIsDarkTheme === defaultTheme ? darkTheme : defaultTheme
    );
  };

  // Provide the theme and toggleTheme function to the components using ThemeContext
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
