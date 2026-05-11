import Link from "next/link";
import styles from "./ServicesHome.module.css";

const services = [
  {
    num: "01",
    title: "Company Profile Website",
    desc: "A professional digital home that builds trust instantly. Modern design, fast loading, mobile-first — built to make the right impression.",
    tags: ["Next.js", "SEO-ready", "CMS", "Mobile-first"],
    href: "/services#company-profile",
  },
  {
    num: "02",
    title: "E-Commerce & Online Store",
    desc: "Full-featured online stores with product management, payment integration, and analytics. Built to convert visitors into customers.",
    tags: ["Payment gateway", "Inventory", "Analytics", "Multi-currency"],
    href: "/services#ecommerce",
  },
  {
    num: "03",
    title: "Internal Business Systems",
    desc: "Custom web apps for your team — data management, reports, HR tools, inventory. Streamline operations with software built for your workflow.",
    tags: ["Custom logic", "Role-based access", "Reporting", "API integrations"],
    href: "/services#systems",
  },
  {
    num: "04",
    title: "Landing Page & Funnel",
    desc: "High-converting pages for products, campaigns, or events. Every element is optimised for one goal: turning visitors into leads.",
    tags: ["A/B ready", "Fast load", "Analytics", "Lead capture"],
    href: "/services#landing",
  },
];

export default function ServicesHome() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Our Services</div>
          <h2 className={styles.title}>What we <em>build</em><br />for you</h2>
          <Link href="/services" className={styles.viewAll}>View all services →</Link>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <Link key={s.num} href={s.href} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.arrow}>↗</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
