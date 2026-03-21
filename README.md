# Alw Agency — Next.js Website

Website agency tech & software modern dibangun dengan Next.js 14, TypeScript, dan CSS Modules.

## Struktur Project

```
alw-agency/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles & CSS variables
│   │   ├── layout.tsx        # Root layout + metadata
│   │   └── page.tsx          # Halaman utama
│   └── components/
│       ├── Navbar.tsx / .module.css
│       ├── Hero.tsx / .module.css
│       ├── Marquee.tsx / .module.css
│       ├── Services.tsx / .module.css
│       ├── Process.tsx / .module.css
│       ├── Contact.tsx / .module.css
│       └── Footer.tsx / .module.css
├── package.json
├── next.config.mjs
└── tsconfig.json
```

## Cara Menjalankan

### 1. Install dependencies
```bash
npm install
```

### 2. Jalankan development server
```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### 3. Build untuk production
```bash
npm run build
npm start
```

## Kustomisasi

### Ganti nomor WhatsApp
Di `src/components/Contact.tsx` dan `src/components/Footer.tsx`, cari:
```
https://wa.me/628xxxxxxxxxx
```
Ganti dengan nomor WhatsApp agency kamu (format internasional, tanpa +).

### Ganti email
Di `src/components/Contact.tsx`, ganti:
```
hello@alw.agency
```

### Ganti warna aksen
Di `src/app/globals.css`:
```css
--accent: #c8f060;  /* ganti warna di sini */
```

### Update statistik hero
Di `src/components/Hero.tsx`, edit bagian `stats`:
```tsx
<span className={styles.statNum}>20+</span>
<span className={styles.statLabel}>Proyek Selesai</span>
```

### Tambah layanan
Di `src/components/Services.tsx`, tambahkan item baru di array `services`.

## Deploy ke Vercel

```bash
npm install -g vercel
vercel
```

Atau push ke GitHub dan import di [vercel.com](https://vercel.com).
