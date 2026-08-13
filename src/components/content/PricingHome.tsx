import Link from "next/link";

const plans = [
  {
    tier: "Starter", name: "Launch", price: "$499", per: "one-time",
    desc: "For new businesses that need a professional online presence, fast.",
    features: ["Up to 5 pages","Mobile-responsive design","Contact form & WhatsApp","Basic SEO setup","Google Analytics","1 round of revisions","2-week delivery"],
    featured: false, cta: "Get started",
  },
  {
    tier: "Most Popular", name: "Growth", price: "$1,200", per: "one-time",
    desc: "For established SMBs ready to compete online with a complete digital presence.",
    features: ["Up to 15 pages","Custom design system","CMS integration","Full SEO & schema","Performance optimised","Blog / news section","3 rounds of revisions","3-week delivery"],
    featured: true, cta: "Get started",
  },
  {
    tier: "Custom", name: "Scale", price: "Custom", per: "scoped project",
    desc: "E-commerce, SaaS MVP, internal systems, or anything with complex requirements.",
    features: ["E-commerce or custom app","Payment gateway","Custom business logic","API integrations","Admin dashboard","Ongoing support plan","Timeline based on scope"],
    featured: false, cta: "Discuss your project",
  },
];

export default function PricingHome() {
  return (
    <section className="pricing-home-section" id="pricing">
      <div className="pricing-home-inner">
        <div className="pricing-home-header">
          <p className="pricing-home-label">Pricing</p>
          <h2 className="pricing-home-title">Honest pricing,<br /><em>no surprises</em></h2>
          <p className="pricing-home-sub">
            Fixed packages for the most common needs. Not sure which fits?{" "}
            <Link href="/contact">Tell us about your project</Link> and we'll advise honestly.
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
