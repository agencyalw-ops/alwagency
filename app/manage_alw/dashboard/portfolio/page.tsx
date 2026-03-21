'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Portfolio = {
  id: number
  title: string
  description: string
  image: string
  link?: string | null
  createdAt: string
}

export default function AdminPortfolioPage() {
  const router = useRouter()
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [form, setForm] = useState({ title: '', description: '', image: '', link: '' })

  useEffect(() => { fetchPortfolios() }, [])

  const fetchPortfolios = async () => {
    setLoading(true)
    const res = await fetch('/api/portfolio')
    const data = await res.json()
    setPortfolios(data.portfolio)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const res = await fetch('/api/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      setForm({ title: '', description: '', image: '', link: '' })
      setShowForm(false)
      fetchPortfolios()
    }
    setSubmitting(false)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus portfolio ini?')) return
    setDeleteId(id)
    const res = await fetch(`/api/portfolio/${id}`, { method: 'DELETE' })
    if (res.ok) fetchPortfolios()
    setDeleteId(null)
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.08)',
    color: '#f5f4f0',
    padding: '12px 16px',
    borderRadius: '10px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box'
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    color: '#888',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '8px'
  }

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => router.push('/manage_alw/dashboard')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#888',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f5f4f0'; e.currentTarget.style.color = '#f5f4f0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#888' }}
          >&#8592;</button>
          <div>
            <span style={{ color: '#c8f060', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>Dashboard</span>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '18px', marginTop: '2px' }}>Kelola Portfolio</h1>
          </div>
        </div>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            background: showForm ? 'transparent' : '#c8f060',
            border: '1px solid',
            borderColor: showForm ? 'rgba(255,255,255,0.15)' : '#c8f060',
            color: showForm ? '#f5f4f0' : '#0a0a0a',
            padding: '10px 24px',
            borderRadius: '999px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 600,
            fontFamily: "'DM Sans', sans-serif",
            transition: 'all 0.3s ease'
          }}
        >
          {showForm ? '✕ Batal' : '+ Tambah'}
        </button>
      </header>

      <main style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Form */}
        {showForm && (
          <div style={{ background: '#111', border: '1px solid rgba(200,240,96,0.2)', borderRadius: '20px', padding: '32px', marginBottom: '40px' }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '18px', marginBottom: '24px', color: '#c8f060' }}>
              ✦ Tambah Portfolio Baru
            </h2>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Judul Project *</label>
                  <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} style={inputStyle} placeholder="Nama project..." required />
                </div>
                <div>
                  <label style={labelStyle}>Link Project</label>
                  <input type="text" value={form.link} onChange={e => setForm({ ...form, link: e.target.value })} style={inputStyle} placeholder="https://..." />
                </div>
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>URL Gambar *</label>
                <input type="text" value={form.image} onChange={e => setForm({ ...form, image: e.target.value })} style={inputStyle} placeholder="https://cloudinary.com/..." required />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Deskripsi *</label>
                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' } as React.CSSProperties} placeholder="Deskripsi singkat project..." required />
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="submit" disabled={submitting} style={{ background: '#c8f060', border: 'none', color: '#0a0a0a', padding: '12px 32px', borderRadius: '999px', cursor: submitting ? 'not-allowed' : 'pointer', fontSize: '14px', fontWeight: 700, fontFamily: "'DM Sans', sans-serif", opacity: submitting ? 0.7 : 1 }}>
                  {submitting ? 'Menyimpan...' : 'Simpan Portfolio'}
                </button>
                <button type="button" onClick={() => setShowForm(false)} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.08)', color: '#888', padding: '12px 24px', borderRadius: '999px', cursor: 'pointer', fontSize: '14px', fontFamily: "'DM Sans', sans-serif" }}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Header List */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '24px' }}>Semua Portfolio</h2>
          <span style={{ background: '#c8f060', color: '#0a0a0a', fontSize: '12px', fontWeight: 700, padding: '3px 10px', borderRadius: '999px' }}>
            {portfolios.length}
          </span>
        </div>

        {/* List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px', color: '#888' }}>Loading...</div>
        ) : portfolios.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 40px', border: '1px dashed rgba(255,255,255,0.08)', borderRadius: '20px', color: '#888' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📁</div>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Belum ada portfolio</p>
            <p style={{ fontSize: '14px' }}>Klik &quot;+ Tambah&quot; untuk mulai menambahkan project</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {portfolios.map(p => (
              <div
                key={p.id}
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {/* Image */}
                <div style={{ height: '180px', background: '#1a1a1a', overflow: 'hidden', position: 'relative' }}>
                  <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, #111 100%)' }} />
                </div>

                {/* Content */}
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '15px', marginBottom: '8px' }}>
                    {p.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '13px', lineHeight: 1.6, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
                    {p.description}
                  </p>

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {p.link ? (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ color: '#c8f060', fontSize: '13px', textDecoration: 'none' }}>
                        Lihat &#8594;
                      </a>
                    ) : (
                      <span style={{ color: '#333', fontSize: '13px' }}>&#8211;</span>
                    )}

                    <div style={{ display: 'flex', gap: '8px' }}>
                      {/* Tombol Edit */}
                      <button
                        onClick={() => router.push(`/manage_alw/dashboard/portfolio/${p.id}`)}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(200,240,96,0.25)',
                          color: '#c8f060',
                          padding: '5px 14px',
                          borderRadius: '999px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          transition: 'all 0.3s ease',
                          fontFamily: "'DM Sans', sans-serif"
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(200,240,96,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        Edit
                      </button>

                      {/* Tombol Hapus */}
                      <button
                        onClick={() => handleDelete(p.id)}
                        disabled={deleteId === p.id}
                        style={{
                          background: 'transparent',
                          border: '1px solid rgba(255,77,77,0.2)',
                          color: '#ff6b6b',
                          padding: '5px 14px',
                          borderRadius: '999px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          transition: 'all 0.3s ease',
                          opacity: deleteId === p.id ? 0.5 : 1,
                          fontFamily: "'DM Sans', sans-serif"
                        }}
                        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,77,77,0.1)'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                      >
                        {deleteId === p.id ? '...' : 'Hapus'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}