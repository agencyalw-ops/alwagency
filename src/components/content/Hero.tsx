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

      <div className={styles.tag}>Tech &amp; Software Agency</div>

      <h1 className={styles.heading}>
        Kami bangun<br />
        <em>solusi digital</em><br />
        yang bekerja.
      </h1>

      <p className={styles.sub}>
        Alw adalah agency web development yang mengubah ide bisnis
        menjadi produk digital yang fungsional dan berdampak.
      </p>

      <div className={styles.btns}>
        <a href="#contact" className={styles.btnPrimary}>
          Mulai Proyek
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="#portfolio" className={styles.btnOutline}>Lihat Portofolio</a>
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
          <span className={styles.statNum}>1+</span>
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