
import type { Metadata } from 'next'
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL('https://alwgen.com'),
  title: {
    default: 'Alw Agency — Web Development for Growing SMBs Worldwide',
    template: '%s | Alw Agency',
  },
  description:
    'Professional web development for small and medium businesses worldwide. Company profiles, e-commerce stores, SaaS MVPs, landing pages — fast, affordable, built to convert.',
  keywords: [
    'web development agency',
    'SMB website design',
    'small business website development',
    'e-commerce development agency',
    'company profile website',
    'affordable web development',
    'professional web design',
    'landing page design',
    'SaaS MVP development',
    'web agency for small business',
  ],
  authors: [{ name: 'Alw Agency', url: 'https://alwgen.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alwgen.com',
    siteName: 'Alw Agency',
    title: 'Alw Agency — Web Development for Growing SMBs',
    description: 'We turn business ideas into professional digital products. Fast, affordable, built to convert.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Alw Agency — Web Development for SMBs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alw Agency — Web Development for Growing SMBs',
    description: 'We turn business ideas into professional digital products. Fast, affordable, built to convert.',
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
  alternates: {
    canonical: 'https://alwgen.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://alwgen.com/#organization',
      name: 'Alw Agency',
      url: 'https://alwgen.com',
      logo: { '@type': 'ImageObject', url: 'https://alwgen.com/logo.png' },
      description: 'Web development and digital solutions for small and medium businesses worldwide.',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+62-857-1627-5034',
        contactType: 'customer service',
        availableLanguage: ['English', 'Indonesian'],
      },
      sameAs: [
        'https://www.instagram.com/alwgen/',
        'https://www.linkedin.com/in/alw-bruh-638311286/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://alwgen.com/#website',
      url: 'https://alwgen.com',
      name: 'Alw Agency',
      publisher: { '@id': 'https://alwgen.com/#organization' },
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://alwgen.com/#service',
      name: 'Alw Agency',
      image: 'https://alwgen.com/og-image.jpg',
      priceRange: '$$',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Web Development Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Company Profile Website' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Development' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Business Systems' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Landing Page & Funnel' } },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How long does it take to build a website?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most company profile websites take 1–2 weeks. E-commerce projects typically take 3–5 weeks. Custom business systems vary based on complexity.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with international clients?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work with SMBs globally. Our team communicates in English and handles all time zones via async collaboration.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is your pricing?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer fixed-price packages starting from $499 for a professional company profile website, $1,200 for a full growth package, and custom pricing for e-commerce and complex systems.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
