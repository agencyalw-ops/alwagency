import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'About — Alw Agency',
  description: 'We are a web development agency from Wonosobo, Central Java, building professional digital products for SMBs worldwide.',
}

const values = [
  { title: 'Honest', desc: 'We tell you what we think, not what you want to hear. If we\'re not the right fit, we\'ll say so.' },
  { title: 'Fast', desc: 'We respect your time. No endless back-and-forth. Most projects are live in 2–3 weeks.' },
  { title: 'Quality-first', desc: 'We build things the right way. Clean code, real performance, tested across all devices.' },
  { title: 'Long-term', desc: 'We\'re not here to deliver one project and disappear. We build relationships, not just websites.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.label}>About Us</p>
            <h1 className={styles.heading}>
              We build the web for<br />
              <em>businesses that mean it</em>
            </h1>
          </div>
        </section>

        {/* Story */}
        <section className={styles.story}>
          <div className={styles.inner}>
            <div className={styles.storyGrid}>
              <div className={styles.storyLeft}>
                <h2 className={styles.storyTitle}>Our Story</h2>
                <p>Alw Agency was born in Wonosobo, a small city in Central Java, Indonesia — with a simple belief: that small and medium businesses deserve the same quality of digital products as the big players.</p>
                <p>We started building websites for local businesses who were tired of overpriced agencies that delivered generic templates. We grew by being reliable, fast, and genuinely invested in our clients' success.</p>
                <p>Today, we work with SMBs across Indonesia and internationally — from local service businesses needing a professional online presence, to growing e-commerce stores, to teams that need custom software to run their operations.</p>
                <p>We're a small, focused team. That means direct communication, real accountability, and zero bureaucracy. When you work with us, you talk to the people actually building your product.</p>
              </div>
              <div className={styles.storyRight}>
                <div className={styles.card}>
                  <div className={styles.cardNum}>3+</div>
                  <div className={styles.cardLabel}>Years building</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardNum}>10+</div>
                  <div className={styles.cardLabel}>Projects delivered</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardNum}>4</div>
                  <div className={styles.cardLabel}>Core services</div>
                </div>
                <div className={styles.card}>
                  <div className={styles.cardNum}>∞</div>
                  <div className={styles.cardLabel}>Cups of coffee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <div className={styles.inner}>
            <p className={styles.label}>What We Stand For</p>
            <h2 className={styles.valuesTitle}>Our values</h2>
            <div className={styles.valuesGrid}>
              {values.map(v => (
                <div key={v.title} className={styles.value}>
                  <h3 className={styles.valueName}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <section className={styles.stack}>
          <div className={styles.inner}>
            <p className={styles.label}>Our Tech Stack</p>
            <h2 className={styles.stackTitle}>Built with modern tools</h2>
            <div className={styles.stackGrid}>
              {['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Vercel', 'Stripe', 'Figma'].map(t => (
                <div key={t} className={styles.tech}>{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>Ready to work together?</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaBtn}>Start a project</Link>
              <Link href="/portfolio" className={styles.ctaBtnOutline}>See our work</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
