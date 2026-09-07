"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  return (
    <footer className="footer-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="footer-logo">alw<span>.</span></div>
            <p className="footer-tagline">
              <span dangerouslySetInnerHTML={{ __html: t("footerTagline") }} />
            </p>
            <div className="footer-socials">
              <a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer" className="footer-social">WA</a>
              <a href="https://www.instagram.com/alwgen/" target="_blank" rel="noopener noreferrer" className="footer-social">IG</a>
              <a href="https://www.linkedin.com/in/alw-bruh-638311286/" target="_blank" rel="noopener noreferrer" className="footer-social">LI</a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-col-title">{t("services")}</p>
              <ul>
                <li><Link href="/services#company-profile">Company Profile</Link></li>
                <li><Link href="/services#ecommerce">E-Commerce</Link></li>
                <li><Link href="/services#systems">Business Systems</Link></li>
                <li><Link href="/services#landing">Landing Pages</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">{t("company")}</p>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/portfolio">Our Work</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">{t("getInTouch")}</p>
              <ul>
                <li><a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="mailto:agencyalw@gmail.com">agencyalw@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© {year} Alw Agency. {t("allRights")}</p>
          <p className="footer-built">{t("builtIn")}</p>
        </div>
      </div>
    </footer>
  );
}
