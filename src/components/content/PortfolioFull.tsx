"use client"
import { useEffect, useState } from "react"
import { useRef } from "react"
import Image from "next/image"

interface Item { id: number; title: string; description: string; image: string; link?: string }

async function fetchPortfolioPage(offset: number) {
  const response = await fetch(`/api/portfolio?limit=1&offset=${offset}`)
  if (!response.ok) throw new Error("Failed to fetch portfolio")
  return response.json()
}

function Card({ item }: { item: Item }) {
  return (
    <div className="portfolio-full-card">
      <div className="portfolio-full-img-wrap">
        {item.image ? (
          item.image.startsWith("/") ? (
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className="portfolio-full-img"
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={item.image} alt={item.title} className="portfolio-full-img" />
          )
        ) : (
          <div className="portfolio-full-placeholder">
            <span>{item.title[0]}</span>
          </div>
        )}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-full-overlay" aria-label={`View live: ${item.title}`}>
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
  const [loadingMore, setLoadingMore] = useState(false)
  const [hasMore, setHasMore] = useState(false)
  const loadMoreRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchPortfolioPage(0)
      .then(d => { setData(d.portfolio || []); setHasMore(Boolean(d.hasMore)); setLoading(false); })
      .catch(() => { setData([]); setLoading(false); })
  }, [])

  useEffect(() => {
    const loadMore = loadMoreRef.current
    if (!loadMore || !hasMore || loadingMore) return

    const observer = new IntersectionObserver(async ([entry]) => {
      if (!entry.isIntersecting) return

      setLoadingMore(true)
      try {
        const result = await fetchPortfolioPage(data.length)
        setData(current => [...current, ...(result.portfolio || [])])
        setHasMore(Boolean(result.hasMore))
      } finally {
        setLoadingMore(false)
      }
    }, { rootMargin: "320px" })

    observer.observe(loadMore)
    return () => observer.disconnect()
  }, [data.length, hasMore, loadingMore])

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
            <>
              <div className="portfolio-full-grid">
                {data.map(item => <Card key={item.id} item={item} />)}
              </div>
              {hasMore && <div ref={loadMoreRef} className="portfolio-full-load-more" aria-live="polite">
                {loadingMore ? "Loading more projects..." : ""}
              </div>}
            </>
          )}
        </div>
      </section>
    </>
  )
}
