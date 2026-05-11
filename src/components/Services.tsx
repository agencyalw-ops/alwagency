import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Company Profile Website",
    desc: "A professional digital home that builds trust instantly. Modern design, fast loading, mobile-first — built to make the right impression on every visitor.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    tags: ["Next.js", "SEO-ready", "CMS", "Mobile-first"],
  },
  {
    num: "02",
    title: "E-Commerce & Online Store",
    desc: "Full-featured online stores with product management, payment integration, and sales analytics. Built to convert visitors into paying customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
    tags: ["Payment gateway", "Inventory", "Analytics", "Multi-currency"],
  },
  {
    num: "03",
    title: "Internal Business Systems",
    desc: "Custom web apps for your team — data management, automated reports, HR tools, inventory tracking. Streamline operations with software built for your workflow.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M9 9h6M9 12h4" />
      </svg>
    ),
    tags: ["Custom logic", "Role-based access", "Reporting", "API integrations"],
  },
  {
    num: "04",
    title: "Landing Page & Funnel",
    desc: "High-converting pages for products, campaigns, or events. Every element is optimised for one goal: turning visitors into leads or customers.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    tags: ["A/B ready", "Fast load", "Analytics", "Lead capture"],
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className={styles.label}>Our Services</div>
        <h2 className={styles.title}>What we <em>build</em><br />for you</h2>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.cardNum}>{s.num}</div>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
            {s.tags && (
              <div className={styles.tags}>
                {s.tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
