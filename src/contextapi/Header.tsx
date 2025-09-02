import { useTheme } from './ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="p-4 flex justify-between items-center bg-white dark:bg-gray-800 shadow-md">
      <h1 className="text-xl font-bold">Theme Switcher</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;