"use client"

import Link from "next/link"
import { useLanguage } from "../LanguageProvider"
import { siteContent } from "@/lib/content"

const cards = siteContent.heroCards

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className="hero-hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">{t("behindDesigns")}</p>
        <h1 className="hero-heading" dangerouslySetInnerHTML={{ __html: t("heroTitle") }} />
        <p className="hero-sub">{t("heroDescription")}</p>

        <Link href="/portfolio" className="hero-arrow-link">
          {t("seeProjects")}
          <span className="hero-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </Link>

        <div className="hero-fan-wrap">
          <div className="hero-fan">
            {cards.map((c, i) => (
              <a
                key={c.title}
                title={c.title}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("liveView")}: ${c.title}`}
                className={`hero-fan-card hero-fan-card-${i}${c.big ? " hero-fan-card-big" : ""}`}
                style={{ backgroundImage: `url('${c.image}')` }}
              />
            ))}
          </div>
        </div>

        <div className="hero-steps">
          <div className="hero-step"><span>01</span> {t("strategy")}</div>
          <div className="hero-step"><span>02</span> {t("design")}</div>
          <div className="hero-step"><span>03</span> {t("launch")}</div>
          <div className="hero-step"><span>04</span> {t("support")}</div>
        </div>
      </div>
    </section>
  )
}
