import { createContext, useState } from "react";

export const themes = {
  light: {
    foreground: "#000000",
    background: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#343a40",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
