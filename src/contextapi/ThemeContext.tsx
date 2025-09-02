import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Create the context with a default undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Define the type for the provider's props
type ThemeProviderProps = {
  children: ReactNode;
};

// Create the provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // State to hold the current theme
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value to be provided to consumers
  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};