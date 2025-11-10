/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { ReactNode, useEffect, useState, createContext, useContext } from "react";

type Props = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

const ThemeProvider = ({ children }: Props) => {
  const [theme, setThemeState] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  const setTheme = (theme: "light" | "dark") => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const initialTheme = localTheme || (media.matches ? "dark" : "light");
    setTheme(initialTheme);

    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    media.addEventListener("change", handleThemeChange);
    setMounted(true);

    return () => {
      media.removeEventListener("change", handleThemeChange);
    };
  }, []);

  if (!mounted) {
    // Prevents flicker on initial load
    return <div className="w-full h-screen bg-gray-200 dark:bg-gray-900" />;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
