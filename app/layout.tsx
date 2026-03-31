import "./globals.css";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://alwgen.com'),
  title: {
    default: 'Alw Agency — Jasa Pembuatan Website Wonosobo & Profesional',
    template: '%s | Alw Agency',
  },
  description:
    'Jasa pembuatan website profesional di Wonosobo, Jawa Tengah. Spesialis company profile, e-commerce, sistem bisnis, landing page, dan SaaS MVP.',
  keywords: [
    'jasa web wonosobo',
    'jasa pembuatan website wonosobo',
    'web developer wonosobo',
    'jasa website jawa tengah',
    'agency website wonosobo',
  ],
  authors: [{ name: 'Alw Agency', url: 'https://alwgen.com' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    alternateLocale: 'en_US',
    url: 'https://alwgen.com',
    siteName: 'Alw Agency',
    title: 'Alw Agency — Jasa Pembuatan Website Wonosobo',
    description: 'Website profesional untuk bisnis kamu. Berbasis di Wonosobo, Jawa Tengah.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Alw Agency' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alw Agency — Jasa Pembuatan Website Wonosobo',
    description: 'Website profesional untuk bisnis kamu di Wonosobo & seluruh Indonesia.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  verification: {
    google: 'vAaHD_vbvEitvjUXlJW2DGWh4NUwV9e1c90fnDK-FHY',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Alw Agency',
  url: 'https://alwgen.com',
  description: 'Jasa pembuatan website profesional di Wonosobo, Jawa Tengah.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Wonosobo',
    addressRegion: 'Jawa Tengah',
    postalCode: '56311',
    addressCountry: 'ID',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -7.3605,
    longitude: 109.9007,
  },
  sameAs: [
    'https://instagram.com/alwagency',
    'https://linkedin.com/company/alwagency',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}