"use client"                                     
import { useEffect, useState } from "react"        
import styles from "./Hero.module.css"

export default function Hero() {
  const [projects, setProjects] = useState<number | null>(null)   

  useEffect(() => {                                 
    fetch("/api/portfolio")                         
      .then(res => res.json())                       
      .then(data => setProjects(data.projects))     
      .catch(() => setProjects(0))                  
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.decoCircle} />

      {/* Tambahan Keyword 'Wonosobo' di Tag Atas */}
      <div className={styles.tag}>Web Agency & Software Developer Wonosobo</div>

      {/* Optimasi H1: Mengandung Keyword Utama Jasa Pembuatan Website */}
      <h1 className={styles.heading}>
        Jasa Pembuatan<br />
        <em className={styles.highlight}>Website Wonosobo</em><br />
        & Solusi Digital.
      </h1>

      {/* Optimasi Deskripsi: Menambahkan Konteks Target Audiens (UMKM/Bisnis Lokal) */}
      <p className={styles.sub}>
        Alwgen adalah ahli <strong>web development di Wonosobo</strong> yang membantu UMKM 
        dan pelaku bisnis bertransformasi menjadi brand digital yang fungsional, 
        profesional, dan berdampak luas.
      </p>

      <div className={styles.btns}>
        <a href="#contact" className={styles.btnPrimary}>
          Konsultasi Gratis
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#portfolio" className={styles.btnOutline}>Portofolio Kami</a>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span className={styles.statNum}>
            {projects === null ? "0" : `${projects}+`}  
          </span>
          <span className={styles.statLabel}>Proyek Selesai</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>10+</span> {/* Diubah sedikit untuk kredibilitas */}
          <span className={styles.statLabel}>Klien Puas</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <span className={styles.statNum}>3+</span>
          <span className={styles.statLabel}>Tahun Pengalaman</span>
        </div>
      </div>
    </section>
  )
}