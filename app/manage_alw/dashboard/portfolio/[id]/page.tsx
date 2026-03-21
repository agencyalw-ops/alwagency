'use client'
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'

type Portfolio = {
  id: number
  title: string
  description: string
  image: string
  link?: string | null
}

export default function EditPortfolioPage() {
  const router = useRouter()
  const params = useParams()
  const id = params.id as string

  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', image: '', link: '' })

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/api/portfolio/${id}`)
      if (!res.ok) { setNotFound(true); setLoading(false); return }
      const data: Portfolio = await res.json()
      setForm({ title: data.title, description: data.description, image: data.image, link: data.link ?? '' })
      setLoading(false)
    }
    fetchData()
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const res = await fetch(`/api/portfolio/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) router.push('/manage_alw/dashboard/portfolio')
    setSubmitting(false)
  }

  // ── Loading ──
  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '40px', height: '40px',
          border: '2px solid rgba(200,240,96,0.15)',
          borderTop: '2px solid #c8f060',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite'
        }} />
        <span style={{ color: '#555', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>Memuat data...</span>
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    </div>
  )

  // ── Not Found ──
  if (notFound) return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</p>
        <p style={{ color: '#f5f4f0', fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '20px', marginBottom: '8px' }}>Portfolio tidak ditemukan</p>
        <button onClick={() => router.push('/manage_alw/dashboard/portfolio')}
          style={{ marginTop: '16px', color: '#c8f060', fontSize: '14px', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
          Kembali ke daftar
        </button>
      </div>
    </div>
  )

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111',
    border: '1px solid rgba(255,255,255,0.07)',
    color: '#f5f4f0',
    padding: '13px 16px',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none',
    fontFamily: "'DM Sans', sans-serif",
    boxSizing: 'border-box',
    transition: 'border-color 0.2s ease'
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '10px',
    color: '#555',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    marginBottom: '8px'
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: '#f5f4f0', fontFamily: "'DM Sans', sans-serif" }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '18px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        background: 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            onClick={() => router.push('/manage_alw/dashboard/portfolio')}
            style={{
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#666',
              width: '36px', height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '15px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#f5f4f0'; e.currentTarget.style.color = '#f5f4f0' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#666' }}
          >&#8592;</button>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <span style={{ color: '#c8f060', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase' }}>Portfolio</span>
              <span style={{ color: '#333', fontSize: '10px' }}>/</span>
              <span style={{ color: '#555', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase' }}>Edit</span>
            </div>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '17px', letterSpacing: '-0.02em' }}>
              {form.title || 'Edit Portfolio'}
            </h1>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontSize: '10px', color: '#444',
            letterSpacing: '2px', textTransform: 'uppercase',
            border: '1px solid rgba(255,255,255,0.06)',
            padding: '6px 12px', borderRadius: '999px'
          }}>ID #{id}</span>
        </div>
      </header>

      <main style={{ padding: '40px', maxWidth: '860px', margin: '0 auto' }}>

        {/* Hero Image Preview */}
        {form.image && (
          <div style={{ position: 'relative', marginBottom: '32px', borderRadius: '20px', overflow: 'hidden', height: '260px' }}>
            <img src={form.image} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            {/* Overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,10,0.7) 0%, transparent 60%, rgba(10,10,10,0.5) 100%)' }} />
            {/* Title overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 28px' }}>
              <p style={{ fontSize: '10px', color: 'rgba(200,240,96,0.7)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>Preview</p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '22px', letterSpacing: '-0.02em', color: '#fff' }}>
                {form.title || '—'}
              </p>
            </div>
            {/* Corner badge */}
            <div style={{
              position: 'absolute', top: '16px', right: '16px',
              background: 'rgba(10,10,10,0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '999px',
              padding: '5px 12px',
              fontSize: '10px', color: '#888', letterSpacing: '2px', textTransform: 'uppercase'
            }}>Live Preview</div>
          </div>
        )}

        {/* Form Card */}
        <div style={{ background: '#0e0e0e', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '24px', overflow: 'hidden' }}>

          {/* Card Header */}
          <div style={{
            padding: '24px 32px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex', alignItems: 'center', gap: '12px',
            background: 'rgba(200,240,96,0.02)'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8f060' }} />
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '15px', color: '#c8f060', letterSpacing: '0.02em' }}>
              Edit Detail Portfolio
            </h2>
          </div>

          {/* Form Body */}
          <div style={{ padding: '32px' }}>
            <form onSubmit={handleSubmit}>

              {/* Row 1 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Judul Project *</label>
                  <input
                    type="text"
                    value={form.title}
                    onChange={e => setForm({ ...form, title: e.target.value })}
                    style={inputStyle}
                    placeholder="Nama project..."
                    required
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Link Project</label>
                  <input
                    type="text"
                    value={form.link}
                    onChange={e => setForm({ ...form, link: e.target.value })}
                    style={inputStyle}
                    placeholder="https://..."
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  />
                </div>
              </div>

              {/* URL Gambar */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>URL Gambar *</label>
                <input
                  type="text"
                  value={form.image}
                  onChange={e => setForm({ ...form, image: e.target.value })}
                  style={inputStyle}
                  placeholder="https://cloudinary.com/..."
                  required
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                />
                <p style={{ fontSize: '11px', color: '#444', marginTop: '6px' }}>
                  Ubah URL untuk mengganti gambar. Preview akan update otomatis.
                </p>
              </div>

              {/* Deskripsi */}
              <div style={{ marginBottom: '28px' }}>
                <label style={labelStyle}>Deskripsi *</label>
                <textarea
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' } as React.CSSProperties}
                  placeholder="Deskripsi singkat project..."
                  required
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                />
              </div>

              {/* Actions */}
              <div style={{
                display: 'flex', gap: '12px', alignItems: 'center',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255,255,255,0.05)'
              }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: submitting ? 'rgba(200,240,96,0.5)' : '#c8f060',
                    border: 'none',
                    color: '#0a0a0a',
                    padding: '13px 32px',
                    borderRadius: '999px',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.25s ease',
                    display: 'flex', alignItems: 'center', gap: '8px'
                  }}
                  onMouseEnter={e => { if (!submitting) e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
                >
                  {submitting ? (
                    <>
                      <div style={{ width: '14px', height: '14px', border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #0a0a0a', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
                      Menyimpan...
                    </>
                  ) : 'Simpan Perubahan'}
                </button>

                <button
                  type="button"
                  onClick={() => router.push('/manage_alw/dashboard/portfolio')}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#666',
                    padding: '13px 24px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif",
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#f5f4f0' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#666' }}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}