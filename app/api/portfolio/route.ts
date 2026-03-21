import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [portfolio, projects] = await Promise.all([
      prisma.portfolio.findMany({ orderBy: { createdAt: "desc" } }),
      prisma.portfolio.count(),
    ])

    return NextResponse.json({ portfolio, projects })
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