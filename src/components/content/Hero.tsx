"use client"
import { useEffect, useState } from "react"
import styles from "./Hero.module.css"

export default function Hero() {
  const [projects, setProjects] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(() => setProjects(null))
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.decoCircle} />

      <div className={styles.tag}>Global Web Agency for SMBs</div>

      <h1 className={styles.heading}>
        Your business,<br />
        <em className={styles.highlight}>built for</em><br />
        the internet.
      </h1>

      <p className={styles.sub}>
        We design and develop fast, professional websites and digital
        products for <strong>small and medium businesses worldwide</strong> —
        company profiles, e-commerce, internal systems, and everything in between.
      </p>

      <div className={styles.btns}>
        <a href="#contact" className={styles.btnPrimary}>
          Start Your Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#portfolio" className={styles.btnOutline}>See Our Work</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>3+</span>
          <span className={styles.statLabel}>Years Building</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>
            {projects !== null && projects > 0 ? `${projects}+` : "10+"}
          </span>
          <span className={styles.statLabel}>Projects Delivered</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>4</span>
          <span className={styles.statLabel}>Core Services</span>
        </div>
      </div>
    </section>
  )
}
