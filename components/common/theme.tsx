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
      className="p-2 rounded-full transition-all bg-primary/10 hover:bg-primary/20 text-foreground cursor-pointer duration-300"
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
