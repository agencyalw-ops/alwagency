export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  availability: "in stock" | "out of stock";
  condition: "new";
  price: string;
  link: string;
  image_link: string;
  brand: string;
};

export const catalogItems: CatalogItem[] = [
  {
    id: "landing-1page",
    title: "Landing Page 1 Halaman",
    description:
      "Landing page 1 halaman, desain custom, siap pakai untuk promosi produk/jasa Anda.",
    availability: "in stock",
    condition: "new",
    price: "298000 IDR",
    link: "https://alwgen.com/harga#landing-1page",
    image_link: "https://alwgen.com/catalog/landing-1page.jpg",
    brand: "Alw Agency",
  },
  {
    id: "landing-standard-seo",
    title: "Landing Page Standard 3 Halaman + SEO",
    description:
      "Website 3 halaman lengkap dengan optimasi SEO dasar, cocok untuk company profile atau promosi bisnis yang lebih lengkap.",
    availability: "in stock",
    condition: "new",
    price: "2000000 IDR",
    link: "https://alwgen.com/harga#landing-standard",
    image_link: "https://alwgen.com/catalog/landing-standard.jpg",
    brand: "Alw Agency",
  },
  {
    id: "company-profile",
    title: "Company Profile Website",
    description:
      "Website company profile profesional, mulai dari Rp1.000.000 hingga Rp5.000.000 tergantung jumlah halaman dan fitur. Konsultasi gratis untuk penawaran sesuai kebutuhan.",
    availability: "in stock",
    condition: "new",
    price: "1000000 IDR",
    link: "https://alwgen.com/harga#company-profile",
    image_link: "https://alwgen.com/catalog/company-profile.jpg",
    brand: "Alw Agency",
  },
  {
    id: "ecommerce-dev",
    title: "E-Commerce Development",
    description:
      "Pengembangan toko online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard admin.",
    availability: "in stock",
    condition: "new",
    price: "7000000 IDR",
    link: "https://alwgen.com/harga#ecommerce",
    image_link: "https://alwgen.com/catalog/ecommerce.jpg",
    brand: "Alw Agency",
  },
  {
    id: "pos-system",
    title: "Sistem POS (Point of Sale)",
    description:
      "Sistem kasir digital untuk kelola transaksi, stok, dan laporan penjualan bisnis Anda.",
    availability: "in stock",
    condition: "new",
    price: "4500000 IDR",
    link: "https://alwgen.com/harga#pos-system",
    image_link: "https://alwgen.com/catalog/pos-system.jpg",
    brand: "Alw Agency",
  },
];