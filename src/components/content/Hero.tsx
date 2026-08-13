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
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch(() => setProjects(null))
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={styles.topline}>
        <span>ALW / DIGITAL STUDIO</span>
        <span>EST. 2022 · WONOSOBO</span>
      </div>

      <div className={styles.inner}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} />
          <span>Independent web agency for ambitious businesses</span>
        </div>

        <h1 className={`${styles.heading} ${mounted ? styles.mounted : ""}`}>
          <span className={styles.script}>Build</span>
          <span className={styles.titleLine}>something</span>
          <span className={styles.titleLine}>worth <em>remembering.</em></span>
        </h1>

        <div className={styles.bottomGrid}>
          <p className={styles.sub}>
            We turn sharp ideas into digital experiences with feeling — from
            company profiles and e-commerce to custom systems that move your
            business forward.
          </p>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.btnPrimary}>
              Start your project
              <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/portfolio" className={styles.btnText}>
              View selected work <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>

        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            <span className={styles.metaNumber}>0{projects !== null && projects > 0 ? projects : 10}</span>
            <span>projects delivered</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaNumber}>04</span>
            <span>ways we can help</span>
          </div>
          <div className={styles.metaNote}>
            <span>Scroll to explore</span>
            <span className={styles.scrollArrow}>↓</span>
          </div>
        </div>
      </div>

      <div className={styles.cornerMark} aria-hidden="true">✳</div>
    </section>
  )
}
