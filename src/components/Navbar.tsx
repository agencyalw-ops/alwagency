"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeTogle";
import { useLanguage } from "./LanguageProvider";
import { siteContent } from "@/lib/content";

const navLinks = siteContent.navigation;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

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
          {navLinks.map(({ href, key }) => (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link ${pathname === href ? "nav-active" : ""}`}
              >
                {t(key)}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="nav-cta">
              {t("startProject")}
            </Link>
          </li>
          <li><button className="language-toggle" onClick={() => setLanguage(language === "id" ? "en" : "id")} aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}>{language === "id" ? "EN" : "ID"}</button></li>
          <li><ThemeToggle /></li>
        </ul>

        <div className="nav-mobile-right">
          <ThemeToggle />
          <button className="language-toggle" onClick={() => setLanguage(language === "id" ? "en" : "id")} aria-label={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}>{language === "id" ? "EN" : "ID"}</button>
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
