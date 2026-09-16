import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'ALW Gen - Jasa Pembuatan Website Profesional di Wonosobo',
  description:
    'Jasa pembuatan website profesional di Wonosobo, Jawa Tengah. Spesialis company profile, e-commerce, landing page, dan sistem bisnis custom.',
  keywords: [
    'jasa pembuatan website wonosobo', 'web development agency', 'jasa website company profile',
    'jasa landing page', 'jasa e-commerce agency', 'software house jawa tengah',
  ],
  alternates: {
    canonical: 'https://alwgen.com',
  },
  openGraph: {
    url: 'https://alwgen.com',
    title: 'ALW Gen - Web Development untuk Bisnis yang Berkembang',
    description: 'Kami ubah ide bisnis jadi produk digital profesional. Cepat, terjangkau, dan dibuat untuk konversi.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'ALW Gen - Web Development untuk Bisnis yang Berkembang' }],
  },
}

export default function Home() {
  return <HomeClient />
}