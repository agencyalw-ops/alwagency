import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>alw<span>.</span></div>
            <p className={styles.tagline}>
              Web development & digital products<br />
              for growing SMBs, worldwide.
            </p>
            <div className={styles.socials}>
              <a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer" className={styles.social}>WA</a>
              <a href="https://www.instagram.com/alwgen/" target="_blank" rel="noopener noreferrer" className={styles.social}>IG</a>
              <a href="https://www.linkedin.com/in/alw-bruh-638311286/" target="_blank" rel="noopener noreferrer" className={styles.social}>LI</a>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <p className={styles.colTitle}>Services</p>
              <ul>
                <li><Link href="/services#company-profile">Company Profile</Link></li>
                <li><Link href="/services#ecommerce">E-Commerce</Link></li>
                <li><Link href="/services#systems">Business Systems</Link></li>
                <li><Link href="/services#landing">Landing Pages</Link></li>
              </ul>
            </div>
            <div className={styles.col}>
              <p className={styles.colTitle}>Company</p>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/portfolio">Our Work</Link></li>
                <li><Link href="/pricing">Pricing</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className={styles.col}>
              <p className={styles.colTitle}>Get in Touch</p>
              <ul>
                <li><a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="mailto:hello@agencyalw.com">hello@agencyalw.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© {year} Alw Agency. All rights reserved.</p>
          <p className={styles.built}>Built in Wonosobo, serving the world.</p>
        </div>
      </div>
    </footer>
  );
}
