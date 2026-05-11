import Link from "next/link";
import styles from "./PricingHome.module.css";

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
    <section className={styles.section} id="pricing">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Pricing</p>
          <h2 className={styles.title}>Honest pricing,<br /><em>no surprises</em></h2>
          <p className={styles.sub}>
            Fixed packages for the most common needs. Not sure which fits?{" "}
            <Link href="/contact">Tell us about your project</Link> and we'll advise honestly.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map(plan => (
            <div key={plan.name} className={`${styles.card} ${plan.featured ? styles.featured : ""}`}>
              {plan.featured && <div className={styles.badge}>Most Popular</div>}
              <div className={styles.tier}>{plan.tier}</div>
              <div className={styles.name}>{plan.name}</div>
              <div className={styles.price}>{plan.price} <span>/ {plan.per}</span></div>
              <p className={styles.desc}>{plan.desc}</p>
              <ul className={styles.features}>
                {plan.features.map(f => <li key={f}><span className={styles.check}>✓</span>{f}</li>)}
              </ul>
              <Link href="/contact" className={`${styles.btn} ${plan.featured ? styles.btnFeatured : ""}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
