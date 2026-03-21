import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const portfolio = await prisma.portfolio.findUnique({
      where: { id: Number(id) }
    })
    if (!portfolio) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(portfolio)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()
    const portfolio = await prisma.portfolio.update({
      where: { id: Number(id) },
      data: {
        title: body.title,
        description: body.description,
        image: body.image,
        link: body.link || null
      }
    })
    return NextResponse.json(portfolio)
  } catch {
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}

export async function DELETE(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.portfolio.delete({
      where: { id: Number(id) }
    })
    return NextResponse.json({ message: 'Deleted!' })
  } catch {
    return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  }
}