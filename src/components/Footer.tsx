import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div>
          <div className={styles.logo}>alw<span>.</span></div>
          <p className={styles.tagline}>Web development & digital products<br />for growing SMBs, worldwide.</p>
        </div>
        <div className={styles.cols}>
          <div>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.links}>
              <li><a href="#services">Company Profile</a></li>
              <li><a href="#services">E-Commerce</a></li>
              <li><a href="#services">Internal Systems</a></li>
              <li><a href="#services">Landing Pages</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Company</div>
            <ul className={styles.links}>
              <li><a href="#process">Our Process</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#portfolio">Our Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className={styles.colTitle}>Connect</div>
            <ul className={styles.links}>
              <li><a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="mailto:hello@agencyalw.com">Email</a></li>
              <li><a href="https://www.instagram.com/alwgen/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/alw-bruh-638311286/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.copy}>© 2025 Alw Agency. All rights reserved.</p>
        <div className={styles.social}>
          <a href="https://www.instagram.com/alwgen/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/alw-bruh-638311286/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://wa.me/6285716275034" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
