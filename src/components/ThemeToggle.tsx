import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeToggle = ({ darkMode, setDarkMode }: ThemeToggleProps) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      {darkMode ? (
        <SunIcon className="w-5 h-5" /> // Sun icon for Dark mode
      ) : (
        <MoonIcon className="w-5 h-5" /> // Moon icon for Light mode
      )}
    </button>
  );
};

export default ThemeToggle;
