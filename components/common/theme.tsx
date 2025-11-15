"use client";
import { useTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";

const ThemeSetter = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all bg-orange-100 dark:bg-orange-100/10 hover:bg-orange-200 dark:hover:bg-orange-100/20 text-orange-800 dark:text-orange-300 cursor-pointer duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="size-3.5 sm:size-4" />
      ) : (
        <Moon className="size-3.5 sm:size-4" />
      )}
    </div>
  );
};

export default ThemeSetter;
