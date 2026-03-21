import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "Website Company Profile",
    desc: "Website profesional yang merepresentasikan brand dan bisnis kamu dengan tampilan modern dan performa tinggi.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "E-commerce & Toko Online",
    desc: "Platform penjualan online lengkap dengan manajemen produk, integrasi pembayaran, dan laporan penjualan.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Sistem Internal Bisnis",
    desc: "Aplikasi web custom untuk manajemen data, laporan otomatis, dan operasional bisnis yang lebih efisien.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4M9 9h6M9 12h4" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Landing Page & Funnel",
    desc: "Halaman konversi tinggi untuk produk, event, atau kampanye marketing — dioptimalkan untuk hasil maksimal.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className={styles.label}>Layanan Kami</div>
        <h2 className={styles.title}>Apa yang bisa<br />kami kerjakan</h2>
      </div>
      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.num} className={styles.card}>
            <div className={styles.cardNum}>{s.num}</div>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.cardDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
