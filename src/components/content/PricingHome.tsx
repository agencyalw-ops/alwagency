import Link from "next/link";

const plans = [
  {
    tier: "Focused sprint", name: "Launch", price: "$499", per: "starting point",
    desc: "A focused website build for a clear brief, a tight scope, and a fast route to launch.",
    features: ["Up to 5 pages","Mobile-responsive design","Contact form & WhatsApp","Basic SEO setup","Google Analytics","1 round of revisions","2-week delivery"],
    featured: false, cta: "Get started",
  },
  {
    tier: "Product build", name: "Growth", price: "$1,200", per: "starting point",
    desc: "A deeper build for teams that need a distinctive digital presence and room to grow.",
    features: ["Up to 15 pages","Custom design system","CMS integration","Full SEO & schema","Performance optimised","Blog / news section","3 rounds of revisions","3-week delivery"],
    featured: true, cta: "Get started",
  },
  {
    tier: "Long-term partner", name: "Scale", price: "Custom", per: "scoped project",
    desc: "For custom apps, MVPs, integrations, and products that need thoughtful engineering over time.",
    features: ["E-commerce or custom app","Payment gateway","Custom business logic","API integrations","Admin dashboard","Ongoing support plan","Timeline based on scope"],
    featured: false, cta: "Discuss your project",
  },
];

export default function PricingHome() {
  return (
<<<<<<< HEAD
    <section className="pricing-home-section" id="pricing">
      <div className="pricing-home-inner">
        <div className="pricing-home-header">
          <p className="pricing-home-label">Pricing</p>
          <h2 className="pricing-home-title">Honest pricing,<br /><em>no surprises</em></h2>
          <p className="pricing-home-sub">
            Fixed packages for the most common needs. Not sure which fits?{" "}
            <Link href="/contact">Tell us about your project</Link> and we'll advise honestly.
=======
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Ways to work together</p>
          <h2 className={styles.title}>Clear scope,<br /><em>no mystery.</em></h2>
          <p className={styles.sub}>
          </p>
        </div>

        <div className="pricing-home-grid">
          {plans.map(plan => (
            <div key={plan.name} className={`pricing-home-card ${plan.featured ? "pricing-home-featured" : ""}`}>
              {plan.featured && <div className="pricing-home-badge">Most Popular</div>}
              <div className="pricing-home-tier">{plan.tier}</div>
              <div className="pricing-home-name">{plan.name}</div>
              <div className="pricing-home-price">{plan.price} <span>/ {plan.per}</span></div>
              <p className="pricing-home-desc">{plan.desc}</p>
              <ul className="pricing-home-features">
                {plan.features.map(f => <li key={f}><span className="pricing-home-check">✓</span>{f}</li>)}
              </ul>
              <Link href="/contact" className={`pricing-home-btn ${plan.featured ? "pricing-home-btn-featured" : ""}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
