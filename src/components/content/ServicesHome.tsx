import Link from "next/link";

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
    <section className="services-home-section" id="services">
      <div className="services-home-inner">
        <div className="services-home-header">
          <div className="services-home-label">Our Services</div>
          <h2 className="services-home-title">What we <em>build</em><br />for you</h2>
          <Link href="/services" className="services-home-view-all">View all services →</Link>
        </div>

        <div className="services-home-grid">
          {services.map((s) => (
            <Link key={s.num} href={s.href} className="services-home-card">
              <div className="services-home-card-top">
                <span className="services-home-num">{s.num}</span>
                <span className="services-home-arrow">↗</span>
              </div>
              <h3 className="services-home-card-title">{s.title}</h3>
              <p className="services-home-card-desc">{s.desc}</p>
              <div className="services-home-tags">
                {s.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
