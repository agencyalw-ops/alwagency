"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./Theme.module.css"; // Import file CSS di sini

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Mencegah Hydration Mismatch
  if (!mounted) return <div className="theme-toggle" style={{ border: 'none' }} />;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      data-current-theme={theme}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={20} fill="currentColor" />
      ) : (
        <Moon size={20} fill="currentColor" />
      )}
    </button>
  );
}