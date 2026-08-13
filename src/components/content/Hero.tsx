"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [projects, setProjects] = useState<number | null>(null)

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(() => setProjects(null))
  }, [])

  return (
    <section className="hero-hero">
      <div className="hero-sky" />
      <div className="hero-hill">
        <svg className="hero-figure" viewBox="0 0 40 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6a7 7 0 110 14 7 7 0 010-14zM12 24h16l4 30-9 2-3-20-3 20-9-2 4-30zM11 26l-6 22 5 2 6-21zM29 26l6 22-5 2-6-21z" />
        </svg>
      </div>

      <div className="hero-inner">
        <p className="hero-presents">Alw Agency Presents</p>

        <h1 className="hero-title-stack">
          <span className="hero-title-line">
            <span className="hero-title-main">The</span>
            <span className="hero-title-echo" aria-hidden="true">the</span>
          </span>
          <span className="hero-title-line">
            <span className="hero-title-main">Launch</span>
            <span className="hero-title-echo" aria-hidden="true">launch</span>
          </span>
        </h1>

        <p className="hero-byline">A Website, By <strong>Alw Agency</strong></p>

        <div className="hero-credits">
          <div className="hero-credit">
            <span>Strategy</span>
            <em>Alw Team</em>
          </div>
          <div className="hero-credit">
            <span>Design</span>
            <em>Alw Studio</em>
          </div>
          <div className="hero-credit">
            <span>Development</span>
            <em>Alw Engineering</em>
          </div>
          <div className="hero-credit">
            <span>Projects</span>
            <em>{projects !== null && projects > 0 ? `${projects}+` : "10+"} Delivered</em>
          </div>
        </div>

        <div className="hero-btns">
          <Link href="/contact" className="hero-btn-primary">
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/portfolio" className="hero-btn-outline">See Our Work</Link>
        </div>

        <div className="hero-badges">
          <span>Next.js</span>
          <span>Vercel</span>
          <span>Stripe</span>
          <span>Figma</span>
        </div>
      </div>

      <div className="hero-meta hero-meta-left">Est. 2022</div>
      <div className="hero-meta hero-meta-right">Built for SMBs worldwide</div>
    </section>
  )
}
