import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Alw Agency — Jasa Pembuatan Website Wonosobo & Profesional',
  description:
    'Jasa pembuatan website profesional di Wonosobo, Jawa Tengah. Spesialis company profile, e-commerce, landing page, dan SaaS MVP.',
  alternates: {
    canonical: 'https://alwgen.com',
  },
  openGraph: {
    url: 'https://alwgen.com',
  },
}

export default function Home() {
  return <HomeClient />
}