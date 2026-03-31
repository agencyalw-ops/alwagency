"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import ThemeToggle from "./ThemeTogle";

export default function Navbar() { // ← hapus prop setPage
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      {/* Logo → scroll ke atas */}
      <Link href="/#hero" className={styles.logo} onClick={closeMenu}>
        alw<span>.</span>
      </Link>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li>
          <Link href="/#hero" onClick={closeMenu}>home</Link>
        </li>
        <li>
          <Link href="/#services" onClick={closeMenu}>Layanan</Link>
        </li>
        <li>
          <Link href="/#portfolio" onClick={closeMenu}>Portofolio</Link>
        </li>
        <li>
          <Link href="/#contact" className={styles.cta} onClick={closeMenu}>
            Hubungi Kami
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