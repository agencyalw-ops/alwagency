"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeTogle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <Link href="/#hero" className={styles.logo} onClick={closeMenu}>
        alw<span>.</span>
      </Link>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><Link href="/#services" onClick={closeMenu}>Services</Link></li>
        <li><Link href="/#portfolio" onClick={closeMenu}>Work</Link></li>
        <li><Link href="/#process" onClick={closeMenu}>Process</Link></li>
        <li><Link href="/#pricing" onClick={closeMenu}>Pricing</Link></li>
        <li>
          <Link href="/#contact" className={styles.cta} onClick={closeMenu}>
            Start a Project
          </Link>
        </li>
        <ThemeToggle />
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
