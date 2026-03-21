import prisma from '@/lib/prisma'

export async function GET() {
  const testimoni = await prisma.testimoni.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return Response.json(testimoni)
}

export async function POST(req: Request) {
  const body = await req.json()
  const testimoni = await prisma.testimoni.create({
    data: {
      name: body.name,
      role: body.role,
      message: body.message,
      image: body.image || null,
      rating: body.rating || 5
    }
  })
  return Response.json(testimoni)
}