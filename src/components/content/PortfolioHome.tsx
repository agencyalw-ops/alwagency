"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

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
    <div className="portfolio-home-card">
      <div className="portfolio-home-img-wrap">
        {src ? (
          <img src={src} alt={item.title} className="portfolio-home-img" onError={() => setImgErr(true)} />
        ) : (
          <div className="portfolio-home-placeholder">No Preview</div>
        )}
      </div>
      <div className="portfolio-home-info">
        <h3 className="portfolio-home-card-title">{item.title}</h3>
        <p className="portfolio-home-card-desc">{item.description}</p>
        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-home-card-link">View Live ↗</a>}
      </div>
    </div>
  )
}

export default function PortfolioHome() {
  const [data, setData] = useState<Item[]>([])

  useEffect(() => {
    fetch("/api/portfolio")
      .then(r => r.json())
      .then(d => setData((d.portfolio || []).slice(0, 3)))
      .catch(() => setData([]))
  }, [])

  if (!data.length) return null

  return (
    <section className="portfolio-home-section" id="portfolio">
      <div className="portfolio-home-inner">
        <div className="portfolio-home-header">
          <div>
            <p className="portfolio-home-label">Our Work</p>
            <h2 className="portfolio-home-title">Selected <em>projects</em></h2>
          </div>
          <Link href="/portfolio" className="portfolio-home-view-all">View all projects →</Link>
        </div>
        <div className="portfolio-home-grid">
          {data.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
