"use client"
import { useEffect, useState } from "react"

interface Item { id: number; title: string; description: string; image: string; link?: string }

const getScreenshot = (url?: string) =>
  url && url !== "#"
    ? `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`
    : null

function Card({ item }: { item: Item }) {
  const [imgErr, setImgErr] = useState(false)
  const ss = getScreenshot(item.link)
  const src = ss && !imgErr ? ss : item.image

  return (
    <div className="portfolio-full-card">
      <div className="portfolio-full-img-wrap">
        {src ? (
          <img src={src} alt={item.title} className="portfolio-full-img" onError={() => setImgErr(true)} />
        ) : (
          <div className="portfolio-full-placeholder">
            <span>{item.title[0]}</span>
          </div>
        )}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-full-overlay">
            <span>View Live ↗</span>
          </a>
        )}
      </div>
      <div className="portfolio-full-info">
        <h3 className="portfolio-full-title">{item.title}</h3>
        <p className="portfolio-full-desc">{item.description}</p>
      </div>
    </div>
  )
}

export default function PortfolioFull() {
  const [data, setData] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/portfolio")
      .then(r => r.json())
      .then(d => { setData(d.portfolio || []); setLoading(false); })
      .catch(() => { setData([]); setLoading(false); })
  }, [])

  return (
    <>
      <section className="portfolio-full-hero">
        <div className="portfolio-full-inner">
          <p className="portfolio-full-label">Our Work</p>
          <h1 className="portfolio-full-heading">Selected <em>projects</em></h1>
          <p className="portfolio-full-sub">
            A selection of websites and digital products we've built for
            businesses across Indonesia and worldwide.
          </p>
        </div>
      </section>

      <section className="portfolio-full-grid-section">
        <div className="portfolio-full-inner">
          {loading ? (
            <div className="portfolio-full-loading">Loading projects...</div>
          ) : data.length === 0 ? (
            <div className="portfolio-full-empty">Projects coming soon. <a href="/contact">Get in touch</a> to be our next case study.</div>
          ) : (
            <div className="portfolio-full-grid">
              {data.map(item => <Card key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
