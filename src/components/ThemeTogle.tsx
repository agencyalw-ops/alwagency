"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.setAttribute("data-theme", saved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={mounted ? toggleTheme : undefined}
      className="theme-toggle"
      data-current-theme={mounted ? theme : "light"}
      aria-label="Toggle Theme"
    >
      <Sun
        className={`theme-toggle-icon theme-toggle-sun ${mounted && theme === "dark" ? "theme-toggle-hidden" : ""}`}
        size={18}
        strokeWidth={2}
      />
      <Moon
        className={`theme-toggle-icon theme-toggle-moon ${mounted && theme === "light" ? "theme-toggle-hidden" : ""}`}
        size={18}
        strokeWidth={2}
      />
    </button>
  );
}