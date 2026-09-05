import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const limit = Math.min(Math.max(Number(searchParams.get("limit")) || 3, 1), 12)
    const offset = Math.max(Number(searchParams.get("offset")) || 0, 0)
    const [portfolio, projects] = await Promise.all([
      prisma.portfolio.findMany({
        orderBy: { createdAt: "desc" },
        skip: offset,
        take: limit,
      }),
      prisma.portfolio.count(),
    ])

    return NextResponse.json({
      portfolio,
      projects,
      hasMore: offset + portfolio.length < projects,
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch portfolio" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  const body = await req.json()
  const portfolio = await prisma.portfolio.create({
    data: {
      title: body.title,
      description: body.description,
      image: body.image,
      link: body.link || null
    }
  })
  return Response.json(portfolio)
}