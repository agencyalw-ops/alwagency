"use client";

import Link from "next/link";
import { siteContent } from "@/lib/content";

const workflow = [
  ["Frame the Problem", "Kami definisikan target pengguna, masalah yang harus diselesaikan, dan versi paling sederhana dari produk sebelum mulai development."],
  ["Shape the Experience", "Kami petakan alur dan desain layar-layar kunci supaya interface terasa jelas, terarah, dan siap dibangun."],
  ["Build in the Open", "Anda mendapat kode yang rapi dan responsive, update progress rutin, dan preview yang bisa dicoba langsung."],
  ["Ship & Improve", "Kami luncurkan, ukur apa yang penting, perbaiki bagian yang kurang, lalu tinggalkan produk yang bisa terus berkembang."],
] as const;

const faqs = [
  ["Berapa lama waktu pengerjaan website?", "Paket Launch estimasi 2 minggu, paket Growth estimasi 3 minggu, paket Scale menyesuaikan scope project."],
  ["Apakah ada garansi setelah website selesai?", "Ya, kami memberikan garansi bug fixing gratis selama periode tertentu setelah website live."],
  ["Bagaimana sistem pembayaran project?", "DP 30% di awal project, lalu pelunasan 70% setelah project selesai dan sebelum website di-launch. Paket Coba Dulu tidak memerlukan DP."],
  ["Apakah bisa request revisi desain?", "Bisa. Paket Launch mendapat 1x revisi, paket Growth 3x revisi, dan paket Scale menyesuaikan kesepakatan."],
  ["Apakah website akan dioptimasi untuk SEO?", "Ya, setiap paket mendapat setup SEO dasar. Paket Growth ke atas mendapat SEO dan schema lengkap."],
  ["Apa maksud program coba dulu 7 minggu gratis?", "Anda bisa menggunakan website atau landing page selama 7 minggu tanpa biaya. Jika sudah cocok, baru lanjut ke paket berbayar."],
  ["Apakah ALW Gen melayani klien di luar Wonosobo?", "Ya, kami melayani klien dari seluruh Indonesia bahkan luar negeri secara remote."],
  ["Apa bedanya ALW Gen dengan freelancer biasa?", "Kami bekerja dengan proses terstruktur, update progress rutin, dan dukungan jangka panjang setelah project selesai."],
  ["Apakah website bisa dikelola sendiri tanpa coding?", "Bisa. Paket Growth ke atas menyertakan integrasi CMS untuk mengubah konten tanpa keahlian teknis."],
  ["Bagaimana cara memulai project?", "Isi form di halaman Contact atau chat via WhatsApp. Kami balas dalam 24 jam dengan saran yang jujur."],
] as const;

export default function HomepageContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <section className="alw-new-hero"><div className="alw-container"><span className="alw-badge">Behind the Designs</span><h1>Wujudkan Ide Bisnis Anda Jadi Produk Digital Profesional</h1><p>Kami bangun website dan sistem digital yang cepat, terjangkau, dan dirancang untuk konversi untuk UMKM dan bisnis yang sedang berkembang.</p><div className="alw-actions"><Link href="/contact" className="alw-btn alw-btn-primary">Mulai Project ↗</Link><Link href="/services" className="alw-btn alw-btn-ghost">Lihat Layanan</Link></div><small>Wonosobo, Jawa Tengah - melayani klien di seluruh Indonesia</small><div className="alw-hero-cards" aria-label="Project pilihan">{siteContent.heroCards.map(card => <a key={card.title} href={card.link} target="_blank" rel="noopener noreferrer" className={`alw-hero-card ${card.big ? "alw-hero-card-big" : ""}`} style={{ backgroundImage: `url('${card.image}')` }}><span>{card.title}</span></a>)}</div></div></section>
    <section className="alw-section" id="portfolio"><div className="alw-container"><SectionIntro title="Penasaran Apa Lagi yang Sudah Kami Buat?" subtitle="Jelajahi berbagai project pilihan - website, produk digital, dan sistem yang dibangun untuk UMKM di berbagai bidang." /><Link href="/portfolio" className="alw-btn alw-btn-ghost">Lihat Semua Project →</Link></div></section>
    <section className="alw-trust"><div className="alw-container"><div className="alw-tech-list">{siteContent.marquee.filter(item => item !== "✦").map(item => <span key={item}>{item}</span>)}</div></div></section>
    <section className="alw-section" id="services"><div className="alw-container"><SectionIntro title="Apa yang Kami Bangun untuk Anda" subtitle="Our Services" /><div className="alw-card-grid">{siteContent.services.map(service => <Link href={`/services#${service.id}`} className="alw-feature-card" key={service.id}><span className="alw-number">{service.num}</span><h3>{service.title}</h3><p>{service.desc}</p><b>{service.tags.join(" / ")} ↗</b></Link>)}</div></div></section>
    <section className="alw-section" id="workflow"><div className="alw-container"><SectionIntro title="Proses Sederhana, Hasil Nyata" subtitle="How We Work" /><div className="alw-workflow">{workflow.map(([title, description], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="alw-section alw-pricing" id="pricing"><div className="alw-container"><SectionIntro title="Harga Jujur, Tanpa Kejutan" subtitle="Paket tetap untuk kebutuhan paling umum. Ceritakan project Anda jika belum yakin paket mana yang cocok." /><div className="alw-trial"><strong>Coba Dulu 7 Minggu - Gratis, Tanpa Ribet!</strong><span>Pakai dulu website atau landing page selama 7 minggu tanpa biaya. Lanjut kapan pun Anda sudah yakin.</span></div><div className="alw-card-grid">{siteContent.plans.map(plan => <article className={`alw-price-card ${plan.featured ? "alw-highlight" : ""}`} key={plan.name}>{plan.featured && <em>Promo</em>}<small>{plan.per}</small><h3>{plan.name}</h3><strong>{plan.price}</strong><p>{plan.desc}</p><ul>{plan.features.map(feature => <li key={feature}>✓ {feature}</li>)}</ul><Link href={`/contact?paket=${plan.name.toLowerCase()}`} className="alw-btn alw-btn-primary">{plan.cta} →</Link></article>)}</div></div></section>
    <section className="alw-section alw-soft" id="faq"><div className="alw-container"><SectionIntro title="Pertanyaan yang Sering Diajukan" /><div className="alw-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div><Link href="/faq" className="alw-btn alw-btn-ghost">Lihat FAQ Lengkap →</Link></div></section>
    <section className="alw-final" id="contact"><div className="alw-container"><span className="alw-badge">Start a Project</span><h2>Mari Bangun Sesuatu yang Hebat</h2><p>Ceritakan project Anda. Kami akan balas dalam 24 jam dengan saran jujur, baik kami cocok atau tidak untuk kebutuhan Anda.</p><div className="alw-actions"><Link href="/contact" className="alw-btn alw-btn-primary">Mulai Project ↗</Link><a href={siteContent.contact.whatsapp} className="alw-btn alw-btn-ghost">WhatsApp (Respon Tercepat)</a></div><small>{siteContent.contact.email}</small></div></section>
  </>;
}

function SectionIntro({ title, subtitle }: { title: string; subtitle?: string }) {
  return <div className="alw-section-intro"><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>;
}
