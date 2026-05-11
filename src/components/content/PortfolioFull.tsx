"use client"
import { useEffect, useState } from "react"
import styles from "./PortfolioFull.module.css"

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
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        {src ? (
          <img src={src} alt={item.title} className={styles.img} onError={() => setImgErr(true)} />
        ) : (
          <div className={styles.placeholder}>
            <span>{item.title[0]}</span>
          </div>
        )}
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.overlay}>
            <span>View Live ↗</span>
          </a>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.desc}>{item.description}</p>
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
      <section className={styles.hero}>
        <div className={styles.inner}>
          <p className={styles.label}>Our Work</p>
          <h1 className={styles.heading}>Selected <em>projects</em></h1>
          <p className={styles.sub}>
            A selection of websites and digital products we've built for
            businesses across Indonesia and worldwide.
          </p>
        </div>
      </section>

      <section className={styles.grid_section}>
        <div className={styles.inner}>
          {loading ? (
            <div className={styles.loading}>Loading projects...</div>
          ) : data.length === 0 ? (
            <div className={styles.empty}>Projects coming soon. <a href="/contact">Get in touch</a> to be our next case study.</div>
          ) : (
            <div className={styles.grid}>
              {data.map(item => <Card key={item.id} item={item} />)}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
