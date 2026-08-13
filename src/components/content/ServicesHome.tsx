import Link from "next/link";
import styles from "./ServicesHome.module.css";

const services = [
  {
    num: "01",
    title: "Marketing Websites",
    desc: "Fast, expressive websites that make your product easy to understand and impossible to ignore. Designed for trust, speed, and conversion.",
    tags: ["Next.js", "TypeScript", "SEO", "Responsive UI"],
    href: "/services#company-profile",
  },
  {
    num: "02",
    title: "E-Commerce Builds",
    desc: "Conversion-ready stores with thoughtful product flows, checkout integrations, and admin tools that make day-to-day selling simpler.",
    tags: ["Payments", "CMS", "Inventory", "Analytics"],
    href: "/services#ecommerce",
  },
  {
    num: "03",
    title: "Custom Web Apps",
    desc: "Internal tools, dashboards, and business systems built around the way your team actually works — not around a generic template.",
    tags: ["React", "Database", "Auth", "API"],
    href: "/services#systems",
  },
  {
    num: "04",
    title: "MVPs & Experiments",
    desc: "Turn a product idea into a working first version quickly. We help you test the concept, learn from users, and build the next release.",
    tags: ["Prototype", "Rapid build", "AI features", "Launch"],
    href: "/services#landing",
  },
];

export default function ServicesHome() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>What I build</div>
          <h2 className={styles.title}>From first idea<br />to <em>shipped product.</em></h2>
          <Link href="/services" className={styles.viewAll}>Explore capabilities →</Link>
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
