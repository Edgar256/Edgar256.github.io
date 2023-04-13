import { createContext, useContext, useState } from 'react';

// Create a ThemeContext to hold the current theme
export const ThemeContext = createContext({
  isDark: true,
  toggleTheme: () => {},
});

// Create a ThemeProvider that will provide the ThemeContext to your app
export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  // Create a toggle function that will toggle between light and dark mode
  const toggleTheme = () => {
    setIsDark(!isDark)
  };

  // Pass the current theme and toggle function to the ThemeContext
  const value = {
    isDark,
    toggleTheme,
  };

  // Return the ThemeProvider with the ThemeContext value and children
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
