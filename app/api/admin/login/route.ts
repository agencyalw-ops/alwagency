import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json()

    const admin = await prisma.admin.findUnique({
      where: { email }
    })

    if (!admin) {
      return NextResponse.json(
        { message: 'Email atau password salah!' },
        { status: 401 }
        
      )
    }

    const isValid = await bcrypt.compare(password, admin.password)
    console.log('email input:', email)
    console.log('password input:', password)
    console.log('admin found:', admin.email)
    console.log('isValid:', isValid)
    if (!isValid) {
      return NextResponse.json(
        { message: 'Email atau password salah!' },
        { status: 401 }
      )
    }
    

    const token = jwt.sign(
      { id: admin.id, email: admin.email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    )

    const response = NextResponse.json({ message: 'Login berhasil!' })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24
    })

    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { message: 'Terjadi kesalahan server!' },
      { status: 500 }
    )
  }
  
}