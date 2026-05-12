"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import styles from "./Theme.module.css";

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
      className={styles.toggle}
      data-current-theme={mounted ? theme : "light"}
      aria-label="Toggle Theme"
    >
      <Sun
        className={`${styles.icon} ${styles.sun} ${mounted && theme === "dark" ? styles.hidden : ""}`}
        size={18}
        strokeWidth={2}
      />
      <Moon
        className={`${styles.icon} ${styles.moon} ${mounted && theme === "light" ? styles.hidden : ""}`}
        size={18}
        strokeWidth={2}
      />
    </button>
  );
}