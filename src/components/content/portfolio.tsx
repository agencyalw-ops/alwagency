"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import style from "./portfolio.module.css"

const PER_PAGE = 3

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  link?: string
}

// Generate screenshot URL dari domain menggunakan microlink.io (gratis)
const getScreenshotUrl = (siteUrl?: string) => {
  if (!siteUrl || siteUrl === "#") return null
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`
}

function Card({ title, description, imageUrl, linkUrl }: any) {
  const [imgError, setImgError] = useState(false)
  const screenshotUrl = getScreenshotUrl(linkUrl)
  const finalImage = screenshotUrl && !imgError ? screenshotUrl : imageUrl

  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        {finalImage ? (
          <img
            src={finalImage}
            alt={title}
            className={style.image}
            onError={() => setImgError(true)}  // fallback ke image asli jika screenshot gagal
          />
        ) : (
          <div className={style.imagePlaceholder}>No Preview</div>
        )}
      </div>
      <div className={style.cardContent}>
        <h3 className={style.cardTitle}>{title}</h3>
        <p className={style.cardDescription}>{description}</p>
        {linkUrl && (
          <Link href={linkUrl} className={style.cardLink}>
            Lihat Detail <span>&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [data, setData] = useState<PortfolioItem[]>([])
  const [visibleCount, setVisibleCount] = useState(PER_PAGE)
  const newRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(result => setData(result.portfolio))
      .catch(() => {
        setData([
          { id: 1, title: "Marketplace Tiket Hiking", description: "Otomatisasi pembayaran dengan Midtrans Partner.", image: "", link: "https://tokopedia.com" },
          { id: 2, title: "System Automation", description: "Laporan keuangan otomatis untuk UMKM.", image: "", link: "https://shopee.co.id" },
          { id: 3, title: "Landing Page Premium", description: "Halaman arahan konversi tinggi untuk startup.", image: "", link: "https://gojek.com" },
          { id: 4, title: "Dashboard Analytics", description: "Visualisasi data real-time untuk monitoring bisnis.", image: "", link: "https://bukalapak.com" },
          { id: 5, title: "E-Commerce Platform", description: "Toko online lengkap dengan manajemen produk.", image: "", link: "https://lazada.co.id" },
          { id: 6, title: "Mobile App UI", description: "Antarmuka aplikasi mobile layanan kesehatan.", image: "", link: "https://halodoc.com" },
        ])
      })
  }, [])

  useEffect(() => {
    if (visibleCount > PER_PAGE && newRowRef.current) {
      newRowRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [visibleCount])

  const visibleItems = data.slice(0, visibleCount)
  const hasMore = visibleCount < data.length

  const handleLoadMore = () => setVisibleCount(prev => prev + PER_PAGE)
  const handleShowLess = () => {
    setVisibleCount(PER_PAGE)
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const rows: PortfolioItem[][] = []
  for (let i = 0; i < visibleItems.length; i += PER_PAGE) {
    rows.push(visibleItems.slice(i, i + PER_PAGE))
  }

  return (
    <section className={style.portfolio} id="portfolio">
      <div className={style.container}>
        <h2 className={style.sectionTitle}>Portfolio Agency Kami</h2>
        <div className={style.grid}>
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              ref={rowIndex === rows.length - 1 && rowIndex > 0 ? newRowRef : null}
              className={style.row}
            >
              {row.map(item => (
                <Card
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.image}
                  linkUrl={item.link}
                />
              ))}
            </div>
          ))}
        </div>
        <div className={style.viewMoreContainer}>
          {hasMore ? (
            <button className={style.viewMoreBtn} onClick={handleLoadMore}>
              Lihat Lebih Banyak
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </button>
          ) : data.length > PER_PAGE ? (
            <button className={style.viewMoreBtn} onClick={handleShowLess}>
              Tampilkan Lebih Sedikit
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 11l-5-5-5 5M17 18l-5-5-5 5" />
              </svg>
            </button>
          ) : null}
        </div>
      </div>
    </section>
  )
}