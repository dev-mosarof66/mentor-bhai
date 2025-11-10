"use client";

import { useTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react"; // modern, clean icon set
// Alternatively, you could use react-icons: 
// import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSetter = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors bg-purple-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 cursor-pointer duration-300 delay-75"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-purple-400" />
      ) : (
        <Moon className="w-4 h-4 text-purple-800" />
      )}
    </button>
  );
};

export default ThemeSetter;
