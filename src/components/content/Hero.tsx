"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

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
    <section className="hero-hero">
      {/* Background grid */}
      <div className="hero-grid" />
      <div className="hero-blob1" />
      <div className="hero-blob2" />

      <div className="hero-inner">
        <div className="hero-tag-row">
          <span className="hero-tag">Global Web Agency</span>
          <span className="hero-dot">✦</span>
          <span className="hero-tag2">Based in Wonosobo</span>
        </div>

        <h1 className={`hero-heading ${mounted ? "hero-mounted" : ""}`}>
          <span className="hero-line1">Your business,</span>
          <span className="hero-line2"><em>built for</em> the</span>
          <span className="hero-line3">internet.</span>
        </h1>

        <p className="hero-sub">
          We design and develop fast, professional websites and digital
          products for <strong>small and medium businesses worldwide</strong> —
          from company profiles to e-commerce to custom systems.
        </p>

        <div className="hero-btns">
          <Link href="/contact" className="hero-btn-primary">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/portfolio" className="hero-btn-outline">See Our Work</Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-num">3+</span>
            <span className="hero-label">Years Building</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <span className="hero-num">{projects !== null && projects > 0 ? `${projects}+` : "10+"}</span>
            <span className="hero-label">Projects Delivered</span>
          </div>
          <div className="hero-divider" />
          <div className="hero-stat">
            <span className="hero-num">4</span>
            <span className="hero-label">Core Services</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  )
}
