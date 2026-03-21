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
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())