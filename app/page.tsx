import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'ALW Gen - Jasa Pembuatan Website & Aplikasi Custom di Wonosobo',
  description:
    'ALW Gen adalah software house Wonosobo yang melayani jasa pembuatan website, e-commerce, dan aplikasi web custom. Konsultasi gratis, harga transparan, hasil terpercaya.',
  keywords: [
    'jasa pembuatan website', 'software house wonosobo', 'jasa web development',
    'custom software', 'jasa aplikasi web', 'digital agency jawa tengah',
  ],
  alternates: {
    canonical: 'https://alwgen.com',
  },
  openGraph: {
    url: 'https://alwgen.com',
    title: 'ALW Gen - Digital Solution Partner untuk Bisnis Anda',
    description: 'Bangun website atau aplikasi custom bersama ALW Gen. Proses cepat, harga transparan, support jangka panjang.',
    images: [{ url: '/og/alwgen-homepage.webp', width: 1200, height: 630, alt: 'ALW Gen - Digital Solution Partner' }],
  },
}

export default function Home() {
  return <HomeClient />
}