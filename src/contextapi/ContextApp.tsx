import { ThemeProvider } from './ThemeContext';
import Header from './Header';
import Content from './Content';
import { useEffect } from 'react';
import { useTheme } from './ThemeContext';

const AppContent = () => {
  const { theme } = useTheme();

  useEffect(() => {
    // Add or remove the 'dark' class on the body element
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <Content />
    </div>
  );
};

const ContextApp = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default ContextApp;