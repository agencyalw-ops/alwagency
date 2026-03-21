'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })

    const data = await res.json()

    if (res.ok) {
      router.push('/manage_alw/dashboard')
    } else {
      setError(data.message)
      setLoading(false)
    }
  }

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
    <div style={{
      minHeight: '100vh',
      background: '#0a0a0a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'DM Sans', sans-serif",
      position: 'relative',
      overflow: 'hidden'
    }}>

      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.03)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.03)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.03)',
        pointerEvents: 'none'
      }} />

      {/* Glow accent */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(200,240,96,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Logo / Brand */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: '#c8f060',
            marginBottom: '20px'
          }}>
            <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '18px', color: '#0a0a0a' }}>A</span>
          </div>
          <p style={{ fontSize: '10px', color: '#c8f060', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '8px' }}>
            Admin Panel
          </p>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '28px',
            letterSpacing: '-0.03em',
            color: '#f5f4f0'
          }}>
            ALW Agency
          </h1>
          <p style={{ color: '#444', fontSize: '13px', marginTop: '6px' }}>
            Masuk untuk mengelola konten
          </p>
        </div>

        {/* Form card */}
        <div style={{
          background: '#0e0e0e',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '24px',
          overflow: 'hidden'
        }}>

          {/* Card header strip */}
          <div style={{
            padding: '20px 28px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'rgba(200,240,96,0.02)'
          }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c8f060' }} />
            <span style={{ fontSize: '10px', color: '#555', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Autentikasi
            </span>
          </div>

          <div style={{ padding: '28px' }}>

            {/* Error */}
            {error && (
              <div style={{
                background: 'rgba(255,77,77,0.07)',
                border: '1px solid rgba(255,77,77,0.2)',
                borderRadius: '12px',
                padding: '12px 16px',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <span style={{ color: '#ff6b6b', fontSize: '14px' }}>⚠</span>
                <span style={{ color: '#ff6b6b', fontSize: '13px' }}>{error}</span>
              </div>
            )}

            <form onSubmit={handleLogin}>

              {/* Email */}
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle}>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={inputStyle}
                  placeholder="admin@alw-agency.com"
                  required
                  onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom: '28px' }}>
                <label style={labelStyle}>Password</label>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    style={{ ...inputStyle, paddingRight: '48px' }}
                    placeholder="••••••••"
                    required
                    onFocus={e => e.currentTarget.style.borderColor = 'rgba(200,240,96,0.35)'}
                    onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      background: 'transparent',
                      border: 'none',
                      color: '#444',
                      cursor: 'pointer',
                      fontSize: '13px',
                      padding: '4px',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#888'}
                    onMouseLeave={e => e.currentTarget.style.color = '#444'}
                  >
                    {showPass ? 'Sem' : 'Lihat'}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  background: loading ? 'rgba(200,240,96,0.5)' : '#c8f060',
                  border: 'none',
                  color: '#0a0a0a',
                  padding: '14px',
                  borderRadius: '999px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                {loading ? (
                  <>
                    <div style={{
                      width: '14px', height: '14px',
                      border: '2px solid rgba(0,0,0,0.2)',
                      borderTop: '2px solid #0a0a0a',
                      borderRadius: '50%',
                      animation: 'spin 0.8s linear infinite'
                    }} />
                    Memverifikasi...
                  </>
                ) : 'Masuk'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <p style={{ textAlign: 'center', color: '#2a2a2a', fontSize: '11px', marginTop: '24px', letterSpacing: '1px' }}>
          ALW Agency &copy; {new Date().getFullYear()}
        </p>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}