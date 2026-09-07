"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'
import { siteContent } from '@/lib/content'
import { useLanguage } from '@/components/LanguageProvider'

const values = siteContent.about.values
const { story, stats, techStack } = siteContent.about

export default function AboutPage() {
  const { t } = useLanguage()
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.inner}>
            <p className={styles.label}>{t("aboutUs")}</p>
            <h1 className={styles.heading} dangerouslySetInnerHTML={{ __html: t("aboutHero") }} />
          </div>
        </section>

        {/* Story */}
        <section className={styles.story}>
          <div className={styles.inner}>
            <div className={styles.storyGrid}>
              <div className={styles.storyLeft}>
                <h2 className={styles.storyTitle}>{t("ourStory")}</h2>
                {story.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className={styles.storyRight}>
                {stats.map(stat => <div key={stat.label} className={styles.card}>
                  <div className={styles.cardNum}>{stat.value}</div>
                  <div className={styles.cardLabel}>{stat.label}</div>
                </div>)}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className={styles.values}>
          <div className={styles.inner}>
            <p className={styles.label}>{t("whatWeStandFor")}</p>
            <h2 className={styles.valuesTitle}>{t("ourValues")}</h2>
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
            <p className={styles.label}>{t("ourTechStack")}</p>
            <h2 className={styles.stackTitle}>{t("modernTools")}</h2>
            <div className={styles.stackGrid}>
              {techStack.map(t => (
                <div key={t} className={styles.tech}>{t}</div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.inner}>
            <h2 className={styles.ctaTitle}>{t("readyTogether")}</h2>
            <div className={styles.ctaBtns}>
              <Link href="/contact" className={styles.ctaBtn}>{t("startProjectShort")}</Link>
              <Link href="/portfolio" className={styles.ctaBtnOutline}>{t("seeOurWork")}</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
