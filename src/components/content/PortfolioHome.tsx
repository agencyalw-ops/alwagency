"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import styles from "./PortfolioHome.module.css"

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
          <div className={styles.placeholder}>No Preview</div>
        )}
      </div>
      <div className={styles.info}>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardDesc}>{item.description}</p>
        {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>View Live ↗</a>}
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
    <section className={styles.section} id="portfolio">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.label}>Our Work</p>
            <h2 className={styles.title}>Selected <em>projects</em></h2>
          </div>
          <Link href="/portfolio" className={styles.viewAll}>View all projects →</Link>
        </div>
        <div className={styles.grid}>
          {data.map(item => <Card key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  )
}
