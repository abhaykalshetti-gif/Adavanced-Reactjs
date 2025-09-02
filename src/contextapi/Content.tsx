// App.tsx
import { useTheme } from "./ThemeContext";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">🌗 Dark / Light Mode</h1>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button 
        onClick={toggleTheme} 
        className="mt-4 px-4 py-2 rounded bg-blue-500 text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
}
