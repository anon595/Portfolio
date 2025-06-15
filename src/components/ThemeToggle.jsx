import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showPing, setShowPing] = useState(true);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const pingTimer = setTimeout(() => setShowPing(false), 4000);
    const labelTimer = setTimeout(() => setShowLabel(false), 4000);

    return () => {
      clearTimeout(pingTimer);
      clearTimeout(labelTimer);
    };
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-[70px] right-5 z-50 flex items-center space-x-2 p-2 rounded-full bg-background border border-border shadow-md transition-all duration-300"
    >
      <div className="relative flex items-center justify-center">
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-400" />
        ) : (
          <Moon className="h-6 w-6 text-blue-900" />
        )}
        {showPing && (
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75 animate-ping" />
        )}
      </div>

      {/* Texto temporário ao lado do ícone */}
      {showLabel && (
        <span className="text-sm text-muted-foreground animate-fade-in">
          Switch mode
        </span>
      )}
    </button>
  );
};
