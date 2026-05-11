import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services — What We Build',
  description: 'Company profiles, e-commerce stores, internal business systems, landing pages, and SaaS MVPs. Professional web development for growing SMBs worldwide.',
}

const services = [
  {
    id: 'company-profile',
    num: '01',
    title: 'Company Profile Website',
    tagline: 'Your digital storefront, done right.',
    desc: 'A professional digital home that builds trust instantly. We craft beautiful, fast-loading, mobile-first websites that make the right impression on every visitor — whether they find you on Google or arrive from a referral.',
    details: ['Custom design tailored to your brand','5–15 pages depending on package','Fully mobile responsive','SEO-optimised from day one','CMS integration (edit your content easily)','Google Analytics & Search Console setup','Fast delivery — 1 to 3 weeks'],
    tags: ['Next.js', 'SEO-ready', 'CMS', 'Mobile-first'],
    from: '$499',
  },
  {
    id: 'ecommerce',
    num: '02',
    title: 'E-Commerce & Online Store',
    tagline: 'Sell more. Manage less.',
    desc: 'Full-featured online stores with everything you need to sell successfully: product management, payment integration, order tracking, and analytics. Built on proven platforms, customised to your business.',
    details: ['Product catalog & inventory management','Payment gateway integration (Stripe, PayPal, local options)','Multi-currency support','Order management & fulfilment','Customer accounts & wishlists','Promo codes & discount engine','Detailed sales analytics'],
    tags: ['Payment gateway', 'Inventory', 'Analytics', 'Multi-currency'],
    from: '$1,500',
  },
  {
    id: 'systems',
    num: '03',
    title: 'Internal Business Systems',
    tagline: 'Software built for your workflow.',
    desc: 'Custom web applications for your internal team — data management dashboards, automated reports, HR tools, inventory tracking, CRM systems. We replace spreadsheets and manual processes with clean, fast software.',
    details: ['Role-based access control','Custom database design','Automated reporting & exports','API integrations with existing tools','Real-time data updates','Admin dashboard','Mobile-friendly UI'],
    tags: ['Custom logic', 'Role-based access', 'Reporting', 'API integrations'],
    from: 'Custom',
  },
  {
    id: 'landing',
    num: '04',
    title: 'Landing Page & Funnel',
    tagline: 'One page. One goal. Maximum conversions.',
    desc: 'High-converting pages for product launches, ad campaigns, events, or lead generation. Every element is purposefully placed to guide visitors toward a single action — whether that\'s buying, signing up, or getting in touch.',
    details: ['Conversion-focused copywriting guidance','Fast load time (Core Web Vitals optimised)','A/B testing ready','Lead capture & CRM integration','Countdown timers & urgency elements','Heatmap & analytics integration','Mobile-first, pixel-perfect'],
    tags: ['A/B ready', 'Fast load', 'Analytics', 'Lead capture'],
    from: '$499',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.label}>Our Services</p>
            <h1 className={styles.heading}>
              Everything your business<br />
              needs <em>online</em>
            </h1>
            <p className={styles.sub}>
              Four core services. Thousands of businesses served.
              Whatever you need to build, we've built something like it before.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className={styles.services}>
          <div className={styles.inner}>
            {services.map((s, i) => (
              <div key={s.id} id={s.id} className={`${styles.service} ${i % 2 === 1 ? styles.alt : ''}`}>
                <div className={styles.serviceLeft}>
                  <span className={styles.serviceNum}>{s.num}</span>
                  <h2 className={styles.serviceTitle}>{s.title}</h2>
                  <p className={styles.serviceTagline}>{s.tagline}</p>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.serviceTags}>
                    {s.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <div className={styles.serviceFrom}>
                    Starting from <strong>{s.from}</strong>
                  </div>
                  <Link href="/contact" className={styles.serviceBtn}>
                    Get a Quote →
                  </Link>
                </div>
                <div className={styles.serviceRight}>
                  <ul className={styles.details}>
                    {s.details.map(d => (
                      <li key={d}>
                        <span className={styles.check}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>Not sure which service you need?</h2>
            <p className={styles.ctaSub}>Tell us about your business and we'll recommend the right approach — honestly.</p>
            <Link href="/contact" className={styles.ctaBtn}>Talk to us →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
