import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'FAQ — Pricing, Process & Tech Stack',
  description: 'Common questions about pricing, timeline, tech stack, and process for marketing websites, e-commerce, custom web apps, and MVPs built by Alw Agency.',
}

const faqs = [
  {
    q: 'How much does a website cost?',
    a: "Pricing starts at $499 for a Focused Sprint — a tightly scoped marketing site with a clear brief and fast turnaround. Most product builds (e-commerce, custom features, integrations) start around $1,200. Larger custom apps, MVPs, and long-term engineering work are scoped individually since the range depends on complexity.",
  },
  {
    q: 'How long does a project take?',
    a: "A Focused Sprint typically ships in 1–2 weeks. A Product Build usually takes 3–5 weeks depending on scope. Custom web apps and integrations vary more — you'll get a realistic timeline after the Frame the Problem step, before any code is written.",
  },
  {
    q: "What's the difference between a Marketing Website and a Custom Web App?",
    a: "A Marketing Website is built to explain your product and convert visitors — fast, expressive, and focused on trust and clarity. A Custom Web App is an internal tool, dashboard, or business system built around how your team actually works, not a generic template. Not sure which one you need? Tell us the problem you're solving and we'll recommend the right scope.",
  },
  {
    q: 'Do you build e-commerce stores?',
    a: 'Yes. E-commerce builds include product flows, checkout and payment integrations, inventory, CMS, and analytics — built to make day-to-day selling simpler, not just to look good.',
  },
  {
    q: 'Can you help me build an MVP quickly?',
    a: "Yes — that's what the MVPs & Experiments service is for. We help you turn an idea into a working first version fast, so you can test the concept with real users before committing to a full build.",
  },
  {
    q: 'What technologies do you use?',
    a: 'Next.js, TypeScript, and React for the frontend, with databases, authentication, and API integrations built to match the project. The stack is picked based on what the product actually needs, not a one-size-fits-all template.',
  },
  {
    q: 'What does your process look like?',
    a: 'Four steps: Frame the problem (define audience, job-to-be-done, and the smallest useful version), Shape the experience (map the flow, design key screens), Build in the open (regular progress updates, working previews, not a black box), and Ship & improve (launch, measure, fix the edges).',
  },
  {
    q: 'Do I need to provide the content myself?',
    a: "Not necessarily — tell us what you have and what you don't. We can work from existing brand materials or help shape the content and structure as part of the build, especially for Product Build and Long-Term Partner projects.",
  },
  {
    q: 'Do you work with clients outside Indonesia?',
    a: 'Yes. Alw Agency is based in Wonosobo, Indonesia, and works with SMBs worldwide. All communication and delivery is remote-friendly.',
  },
  {
    q: 'What happens after the site launches? Is there ongoing support?',
    a: 'Ship & improve is part of the core process — we measure what matters and fix issues right after launch. For continued work down the line (new features, scaling, maintenance), that falls under the Long-Term Partner arrangement, scoped based on what you need.',
  },
  {
    q: 'How do I get started?',
    a: "Share the problem, the product, or even a rough idea through the contact form. You'll get back a practical next step and an honest view of what it'll take to build.",
  },
]

export default function FaqPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.label}>FAQ</p>
            <h1 className={styles.heading}>Questions, answered.</h1>
            <p className={styles.sub}>Straight answers about pricing, timeline, and how we work.</p>
          </div>
        </section>

        <section className={styles.list}>
          <div className={styles.inner}>
            {faqs.map(f => (
              <details key={f.q} className={styles.item}>
                <summary className={styles.q}>{f.q}</summary>
                <p className={styles.a}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>Still have questions?</h2>
            <p className={styles.ctaSub}>We'll give you a straight answer. No sales pitch.</p>
            <Link href="/contact" className={styles.ctaBtn}>Talk to us →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
