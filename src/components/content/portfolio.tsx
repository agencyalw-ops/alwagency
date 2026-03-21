"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import style from "./portfolio.module.css"

const PER_PAGE = 3  // tampil 3 card dulu, load more tambah 3 lagi

interface PortfolioItem {
  id: number
  title: string
  description: string
  image: string
  link?: string
}

function Card({ title, description, imageUrl, linkUrl }: any) {
  return (
    <div className={style.card}>
      <div className={style.imageWrapper}>
        {imageUrl && (
          <img src={imageUrl} alt={title} className={style.image} />
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
  const newRowRef = useRef<HTMLDivElement>(null)  // ref untuk scroll ke row baru

  useEffect(() => {
    fetch("/api/portfolio")
      .then(res => res.json())
      .then(result => setData(result.portfolio))  // ← fix: ambil array dari object
      .catch(() => {
        setData([
          { id: 1, title: "Marketplace Tiket Hiking", description: "Otomatisasi pembayaran dengan Midtrans Partner.", image: "https://via.placeholder.com/400x250", link: "#" },
          { id: 2, title: "System Automation", description: "Laporan keuangan otomatis untuk UMKM.", image: "https://via.placeholder.com/400x250", link: "#" },
          { id: 3, title: "Landing Page Premium", description: "Halaman arahan konversi tinggi untuk startup.", image: "https://via.placeholder.com/400x250", link: "#" },
          { id: 4, title: "Dashboard Analytics", description: "Visualisasi data real-time untuk monitoring bisnis.", image: "https://via.placeholder.com/400x250", link: "#" },
          { id: 5, title: "E-Commerce Platform", description: "Toko online lengkap dengan manajemen produk.", image: "https://via.placeholder.com/400x250", link: "#" },
          { id: 6, title: "Mobile App UI", description: "Antarmuka aplikasi mobile layanan kesehatan.", image: "https://via.placeholder.com/400x250", link: "#" },
        ])
      })
  }, [])

  // Scroll ke row baru setelah load more
  useEffect(() => {
    if (visibleCount > PER_PAGE && newRowRef.current) {
      newRowRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [visibleCount])

  const visibleItems = data.slice(0, visibleCount)
  const hasMore = visibleCount < data.length

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + PER_PAGE)  // tambah 3 setiap klik
  }

  const handleShowLess = () => {
    setVisibleCount(PER_PAGE)  // kembali ke 3
    // scroll ke atas section portfolio
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  // Pisah visibleItems per baris (3 per row) untuk ref scroll
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
            // ref dipasang di row terakhir — target scroll saat load more
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