import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

function proxy(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  const path = request.nextUrl.pathname

  const isLoginPage  = path === '/manage_alw'           // ← halaman login
  const isAdminRoute = path.startsWith('/manage_alw') && !isLoginPage
  //                                                     ↑ /manage_alw tidak di-protect

  // Belum login → redirect ke /manage_alw (form login)
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL('/manage_alw', request.url))
  }

  // Token tidak valid → redirect ke /manage_alw
  if (isAdminRoute && token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!)
    } catch {
      const res = NextResponse.redirect(new URL('/manage_alw', request.url))
      res.cookies.delete('admin_token')
      return res
    }
  }

  // Sudah login tapi buka /manage_alw → redirect ke dashboard
  if (isLoginPage && token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET!)
      return NextResponse.redirect(new URL('/manage_alw/dashboard', request.url))
    } catch {
      return NextResponse.next()
    }
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  return proxy(request)
}

export const config = {
  matcher: ['/manage_alw/:path*', '/manage_alw']
}