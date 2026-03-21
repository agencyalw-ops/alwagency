'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const router = useRouter()
  const [stats, setStats] = useState({ portfolio: 0, testimoni: 0 })

  useEffect(() => {
    fetch('/api/portfolio').then(r => r.json()).then(d => {
      setStats(prev => ({ ...prev, portfolio: d.length }))
    }).catch(() => {})
    fetch('/api/testimoni').then(r => r.json()).then(d => {
      setStats(prev => ({ ...prev, testimoni: d.length }))
    }).catch(() => {})
  }, [])

  const handleLogout = async () => {
    await fetch('/api/manage_alw/logout', { method: 'POST' })
     window.location.href = '/'
  }

  const menuItems = [
    { icon: '📁', title: 'Portfolio', desc: 'Tambah, edit, dan hapus portfolio project', href: '/manage_alw/dashboard/portfolio' },
    { icon: '💬', title: 'Testimoni', desc: 'Tambah, edit, dan hapus testimoni client', href: '/manage_alw/dashboard/testimoni' },
    { icon: '⚡', title: 'Services', desc: 'Tambah, edit, dan hapus layanan agency', href: '/manage_alw/dashboard/services' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f4f0', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        background: '#0a0a0a',
        zIndex: 100
      }}>
        <div>
          <span style={{ color: '#c8f060', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Admin Panel
          </span>
          <h1 style={{
            fontSize: '18px',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            marginTop: '2px'
          }}>
            ALW Agency
          </h1>
        </div>
        <button
          onClick={handleLogout}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.08)',
            color: '#f5f4f0',
            padding: '8px 20px',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
            transition: 'all 0.3s ease',
            fontFamily: "'DM Sans', sans-serif"
          }}
          onMouseEnter={e => {
            const btn = e.currentTarget
            btn.style.borderColor = '#ff4d4d'
            btn.style.color = '#ff4d4d'
          }}
          onMouseLeave={e => {
            const btn = e.currentTarget
            btn.style.borderColor = 'rgba(255,255,255,0.08)'
            btn.style.color = '#f5f4f0'
          }}
        >
          Logout
        </button>
      </header>

      <main style={{ padding: '40px', maxWidth: '960px' }}>

        {/* Welcome */}
        <div style={{ marginBottom: '48px' }}>
          <p style={{ color: '#888', fontSize: '14px', marginBottom: '8px' }}>
            {new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '36px', lineHeight: 1.2 }}>
            Selamat Datang 👋
          </h2>
          <p style={{ color: '#888', marginTop: '8px', fontSize: '15px' }}>
            Kelola konten website ALW Agency kamu di sini.
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '48px' }}>
          {[
            { label: 'Total Portfolio', value: stats.portfolio, color: '#c8f060' },
            { label: 'Total Testimoni', value: stats.testimoni, color: '#c8f060' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '24px'
            }}>
              <p style={{ color: '#888', fontSize: '13px', marginBottom: '8px' }}>{stat.label}</p>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800,
                fontSize: '40px',
                color: stat.color,
                lineHeight: 1
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Menu Cards */}
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: '16px',
          color: '#888',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '20px'
        }}>
          Kelola Konten
        </h3>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {menuItems.map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{
                background: '#111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '28px',
                textDecoration: 'none',
                color: 'inherit',
                display: 'block',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.borderColor = '#c8f060'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.borderColor = 'rgba(255,255,255,0.08)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: '18px',
                marginBottom: '8px'
              }}>
                {item.title}
              </h3>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.5 }}>{item.desc}</p>
              <div style={{ marginTop: '20px', color: '#c8f060', fontSize: '13px', letterSpacing: '1px' }}>
                Kelola →
              </div>
            </a>
          ))}
        </div>

      </main>
    </div>
  )
}