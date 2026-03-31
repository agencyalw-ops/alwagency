import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://alwgen.com' // ganti sesuai domain

  return {
    rules: [
      {
        // Izinkan semua bot crawl halaman publik
        userAgent: '*',
        allow: '/',
        disallow: [
          '/manage_alw/',
          '/api/',
          '/dashboard/',
          '/private/',
          '/_next/',
        ],
      },
      {
        // Khusus Googlebot — kasih crawl delay biar server aman
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 2,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}