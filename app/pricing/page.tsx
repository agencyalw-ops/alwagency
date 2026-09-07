"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'
import { siteContent } from '@/lib/content'
import { useLanguage } from '@/components/LanguageProvider'

const plans = siteContent.plans
/*
const legacyPlans = [
  {
    tier: 'Starter', name: 'Launch', price: '$499', per: 'one-time',
    desc: 'For new businesses that need a professional online presence, fast.',
    features: ['Up to 5 pages','Mobile-responsive design','Contact form & WhatsApp button','Basic SEO setup','Google Analytics integration','1 round of revisions','2-week delivery'],
    featured: false, cta: 'Get started',
  },
  {
    tier: 'Most Popular', name: 'Growth', price: '$1,200', per: 'one-time',
    desc: 'For established SMBs ready to compete online with a complete digital presence.',
    features: ['Up to 15 pages','Custom design system','CMS integration (editable content)','Full SEO & schema markup','Performance optimised','Blog / news section','3 rounds of revisions','3-week delivery'],
    featured: true, cta: 'Get started',
  },
  {
    tier: 'Custom', name: 'Scale', price: 'Custom', per: 'scoped project',
    desc: 'E-commerce, SaaS MVP, internal systems, or complex requirements.',
    features: ['E-commerce or custom web app','Payment gateway integration','Custom business logic','API integrations','Admin dashboard','Ongoing support plan','Timeline based on scope'],
    featured: false, cta: 'Discuss your project',
  },
]
*/

const faqs = siteContent.pricingFaqs
/*
const legacyFaqs = [
  { q: 'How long does it take to build a website?', a: 'Most company profile websites take 1–2 weeks. E-commerce projects typically take 3–5 weeks. Custom business systems vary based on complexity.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work with SMBs globally. Our team communicates in English and handles all time zones via async collaboration.' },
  { q: 'What happens after the website is launched?', a: 'We stay available after launch for questions and small fixes. For ongoing maintenance and updates, we offer retainer plans.' },
  { q: 'Do you offer payment plans?', a: 'Yes. We typically ask for 50% upfront and 50% on completion. For larger projects, we can discuss milestone-based payments.' },
  { q: 'Can I upgrade my package later?', a: 'Absolutely. Many clients start with Launch and upgrade to Growth as their business grows. We make migration seamless.' },
  { q: 'What if I need something not in the packages?', a: 'Contact us and describe your project. We\'ll give you an honest quote based on your specific needs.' },
]
*/

export default function PricingPage() {
  const { t } = useLanguage()
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.label}>{t("pricingLabel")}</p>
            <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: t("pricingHero") }} />
            <p className={styles.sub}>{t("pricingPageSub")}</p>
          </div>
        </section>

        <section className={styles.plans}>
          <div className={styles.inner}>
            <div className={styles.grid}>
              {plans.map(plan => (
                <div key={plan.name} className={`${styles.card} ${plan.featured ? styles.featured : ''}`}>
                  {plan.featured && <div className={styles.badge}>{t("mostPopular")}</div>}
                  <div className={styles.tier}>{plan.tier}</div>
                  <div className={styles.name}>{plan.name}</div>
                  <div className={styles.price}>{plan.price}<span> / {plan.per}</span></div>
                  <p className={styles.desc}>{plan.desc}</p>
                  <ul className={styles.features}>
                    {plan.features.map(f => <li key={f}><span>✓</span>{f}</li>)}
                  </ul>
                  <Link href="/contact" className={`${styles.btn} ${plan.featured ? styles.btnF : ''}`}>{plan.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.faq}>
          <div className={styles.inner}>
            <p className={styles.label}>FAQ</p>
            <h2 className={styles.faqTitle}>{t("commonQuestions")}</h2>
            <div className={styles.faqs}>
              {faqs.map(f => (
                <div key={f.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{f.q}</h3>
                  <p className={styles.faqA}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>{t("stillQuestions")}</h2>
            <p className={styles.ctaSub}>{t("noSalesPitch")}</p>
            <Link href="/contact" className={styles.ctaBtn}>{t("talkToUs")}</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
