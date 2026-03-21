import { NextResponse } from 'next/server'

export async function POST() {
  const res = NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'))
  res.cookies.set('admin_token', '', {
    httpOnly: true,
    expires: new Date(0),
    path: '/'
  })
  return res
}