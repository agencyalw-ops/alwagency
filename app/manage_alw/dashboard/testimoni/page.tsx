'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Testimoni = {
  id: number
  name: string
  role: string
  message: string
  image?: string | null
  rating: number
  createdAt: string
}

export default function AdminTestimoniPage() {
  const router = useRouter()
  const [testimonis, setTestimonis] = useState<Testimoni[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [form, setForm] = useState({
    name: '',
    role: '',
    message: '',
    image: '',
    rating: 5
  })

  useEffect(() => {
    fetchTestimonis()
  }, [])

  const fetchTestimonis = async () => {
    setLoading(true)
    const res = await fetch('/api/testimoni')
    const data = await res.json()
    setTestimonis(data)
    setLoading(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    const res = await fetch('/api/testimoni', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      setForm({ name: '', role: '', message: '', image: '', rating: 5 })
      setShowForm(false)
      fetchTestimonis()
    }
    setSubmitting(false)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Yakin hapus testimoni ini?')) return
    setDeleteId(id)
    const res = await fetch(`/api/testimoni/${id}`, { method: 'DELETE' })
    if (res.ok) fetchTestimonis()
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
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#f5f4f0'
              e.currentTarget.style.color = '#f5f4f0'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.color = '#888'
            }}
          >←</button>
          <div>
            <span style={{ color: '#c8f060', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase' }}>Dashboard</span>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '18px', marginTop: '2px' }}>Kelola Testimoni</h1>
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
          <div style={{
            background: '#111',
            border: '1px solid rgba(200,240,96,0.2)',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '40px'
          }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: '18px', marginBottom: '24px', color: '#c8f060' }}>
              ✦ Tambah Testimoni Baru
            </h2>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Nama Client *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    placeholder="Nama client..."
                    required
                  />
                </div>
                <div>
                  <label style={labelStyle}>Jabatan / Role *</label>
                  <input
                    type="text"
                    value={form.role}
                    onChange={e => setForm({ ...form, role: e.target.value })}
                    style={inputStyle}
                    placeholder="CEO, Manager, dll..."
                    required
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <label style={labelStyle}>Foto Client (URL)</label>
                  <input
                    type="text"
                    value={form.image}
                    onChange={e => setForm({ ...form, image: e.target.value })}
                    style={inputStyle}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label style={labelStyle}>Rating (1-5)</label>
                  <select
                    value={form.rating}
                    onChange={e => setForm({ ...form, rating: Number(e.target.value) })}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    {[5, 4, 3, 2, 1].map(r => (
                      <option key={r} value={r} style={{ background: '#1a1a1a' }}>
                        {'★'.repeat(r)} ({r}/5)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={labelStyle}>Pesan Testimoni *</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' } as React.CSSProperties}
                  placeholder="Apa kata client tentang layanan kamu..."
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    background: '#c8f060',
                    border: 'none',
                    color: '#0a0a0a',
                    padding: '12px 32px',
                    borderRadius: '999px',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    opacity: submitting ? 0.7 : 1
                  }}
                >
                  {submitting ? 'Menyimpan...' : 'Simpan Testimoni'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: '#888',
                    padding: '12px 24px',
                    borderRadius: '999px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontFamily: "'DM Sans', sans-serif"
                  }}
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Header List */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '24px' }}>
            Semua Testimoni
          </h2>
          <span style={{
            background: '#c8f060',
            color: '#0a0a0a',
            fontSize: '12px',
            fontWeight: 700,
            padding: '3px 10px',
            borderRadius: '999px'
          }}>
            {testimonis.length}
          </span>
        </div>

        {/* List */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '80px', color: '#888' }}>Loading...</div>
        ) : testimonis.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '80px 40px',
            border: '1px dashed rgba(255,255,255,0.08)',
            borderRadius: '20px',
            color: '#888'
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>💬</div>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>Belum ada testimoni</p>
            <p style={{ fontSize: '14px' }}>Klik "+ Tambah" untuk menambahkan testimoni client</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
            {testimonis.map(t => (
              <div
                key={t.id}
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '24px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                {/* Rating */}
                <div style={{ color: '#c8f060', fontSize: '14px', marginBottom: '12px', letterSpacing: '2px' }}>
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>

                {/* Message */}
                <p style={{
                  color: '#ccc',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                  fontStyle: 'italic'
                }}>
                  "{t.message}"
                </p>

                {/* Client Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : (
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: '#c8f060',
                        color: '#0a0a0a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '14px'
                      }}>
                        {t.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 600 }}>{t.name}</p>
                      <p style={{ fontSize: '12px', color: '#888' }}>{t.role}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(t.id)}
                    disabled={deleteId === t.id}
                    style={{
                      background: 'transparent',
                      border: '1px solid rgba(255,77,77,0.2)',
                      color: '#ff6b6b',
                      padding: '5px 14px',
                      borderRadius: '999px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      transition: 'all 0.3s ease',
                      opacity: deleteId === t.id ? 0.5 : 1,
                      fontFamily: "'DM Sans', sans-serif"
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,77,77,0.1)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    {deleteId === t.id ? '...' : 'Hapus'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}