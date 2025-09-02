import { useTheme } from './ThemeContext';

const Content = () => {
  const { theme } = useTheme();

  return (
    <main className="p-8">
      <p className="text-lg">
        This is the main content. The current theme is **{theme}**.
      </p>
    </main>
  );
};

export default Content;