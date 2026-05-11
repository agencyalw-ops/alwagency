"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./Hero.module.css"

export default function Hero() {
  const [projects, setProjects] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(() => setProjects(null))
  }, [])

  return (
    <section className={styles.hero}>
      {/* Background grid */}
      <div className={styles.grid} />
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      <div className={styles.inner}>
        <div className={styles.tagRow}>
          <span className={styles.tag}>Global Web Agency</span>
          <span className={styles.dot}>✦</span>
          <span className={styles.tag2}>Based in Wonosobo</span>
        </div>

        <h1 className={`${styles.heading} ${mounted ? styles.mounted : ""}`}>
          <span className={styles.line1}>Your business,</span>
          <span className={styles.line2}><em>built for</em> the</span>
          <span className={styles.line3}>internet.</span>
        </h1>

        <p className={styles.sub}>
          We design and develop fast, professional websites and digital
          products for <strong>small and medium businesses worldwide</strong> —
          from company profiles to e-commerce to custom systems.
        </p>

        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/portfolio" className={styles.btnOutline}>See Our Work</Link>
        </div>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.num}>3+</span>
            <span className={styles.label}>Years Building</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.num}>{projects !== null && projects > 0 ? `${projects}+` : "10+"}</span>
            <span className={styles.label}>Projects Delivered</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.num}>4</span>
            <span className={styles.label}>Core Services</span>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
