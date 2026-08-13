"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeTogle";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <nav className={`nav-nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="nav-inner">
        <Link href="/" className="nav-logo">
          alw<span className="nav-dot">.</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${pathname === href ? "nav-active" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">
              Start a Project →
            </Link>
          </li>
          <li><ThemeToggle /></li>
        </ul>

        <div className="nav-mobile-right">
          <ThemeToggle />
          <button
            className={`nav-hamburger ${menuOpen ? "nav-is-open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
