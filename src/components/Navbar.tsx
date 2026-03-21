"use client";
import { useState } from "react";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeTogle";

export default function Navbar( { setPage }: { setPage: (page: string) => void }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo} onClick={() => setPage("home")}>
        alw<span>.</span>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>home</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Layanan</a></li>
        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Portofolio</a></li>
        <li>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Hubungi Kami
          </a>
        </li>
        <ThemeToggle/>
      </ul>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.barOpen : ""}></span>
        <span className={menuOpen ? styles.barOpen : ""}></span>
        <span className={menuOpen ? styles.barOpen : ""}></span>
      </button>
    </nav>
  );
}
