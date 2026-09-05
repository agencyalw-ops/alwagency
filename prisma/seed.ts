import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

async function main() {
  const hashedPassword = await bcrypt.hash('alwgg98', 10)

  await prisma.admin.upsert({
    where: { email: 'hunubnbn@gmail.com' },
    update: { password: hashedPassword }, // ✅ update ke hashed
    create: {
      email: 'hunubnbn@gmail.com',
      password: hashedPassword
    }
  })
  console.log('✅ Admin updated with hashed password!')

  const portfolioItems = [
    {
      title: 'Pedes Terserah',
      description: 'Website project Pedes Terserah.',
      image: '/portfolio/pedes-terserah.webp',
      link: 'https://pedesterserah.vercel.app/',
    },
    {
      title: 'Gendewo',
      description: 'Website project Gendewo.',
      image: '/portfolio/gendewo.webp',
      link: 'https://gendewo-sigma.vercel.app/',
    },
    {
      title: 'ALW Studio',
      description: 'Website project ALW Studio.',
      image: '/portfolio/alw-studio.webp',
      link: 'https://alwctudio.vercel.app',
    },
  ]

  for (const item of portfolioItems) {
    const existing = await prisma.portfolio.findFirst({ where: { title: item.title } })

    if (existing) {
      await prisma.portfolio.update({ where: { id: existing.id }, data: item })
    } else {
      await prisma.portfolio.create({ data: item })
    }
  }
  console.log('✅ Portfolio items updated!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())