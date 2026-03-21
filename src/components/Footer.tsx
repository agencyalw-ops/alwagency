import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        alw<span>.</span>
      </div>
      <p className={styles.copy}>© 2025 Alw Agency. All rights reserved.</p>
      <div className={styles.links}>
        <a href="https://www.instagram.com/alwgen/">Instagram</a>
        <a href="https://www.linkedin.com/in/alw-bruh-638311286/">LinkedIn</a>
        <a href="https://wa.me/628571275034">WhatsApp</a>
      </div>
    </footer>
  );
}
