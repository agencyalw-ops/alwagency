"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Language = "id" | "en";

type Dictionary = {
  [key: string]: string;
};

const translations: Record<Language, Dictionary> = {
  id: {
    services: "Layanan",
    work: "Karya",
    about: "Tentang Kami",
    pricing: "Harga",
    startProject: "Mulai Proyek →",
    behindDesigns: "Di Balik Desain",
    heroTitle: "Penasaran Apa Lagi<br />Yang Telah Kami Buat?",
    heroDescription: "Jelajahi pilihan karya kami — website, produk digital, dan sistem yang dibuat untuk bisnis kecil dan menengah di seluruh dunia.",
    seeProjects: "Lihat Proyek Lainnya",
    liveView: "Lihat langsung",
    strategy: "Strategi & Perencanaan",
    design: "Desain & Pengembangan",
    launch: "Peluncuran & Pertumbuhan",
    support: "Dukungan Berkelanjutan",
    ourServices: "Layanan Kami",
    buildForYou: "Apa yang kami<br /><em>bangun</em> untuk Anda",
    viewServices: "Lihat semua layanan →",
    ourWork: "Karya Kami",
    selectedProjects: "<em>Proyek</em> pilihan",
    viewProjects: "Lihat semua proyek →",
    howWeWork: "Cara Kami Bekerja",
    simpleProcess: "Proses sederhana,<br /><em>hasil nyata</em>",
    frameProblem: "Pahami masalah",
    frameProblemDesc: "Kami menentukan audiens, kebutuhan utama, dan versi produk paling sederhana sebelum mulai bekerja.",
    shapeExperience: "Bentuk pengalaman",
    shapeExperienceDesc: "Kami memetakan alur dan merancang layar utama agar antarmuka terasa jelas dan siap dibangun.",
    buildOpen: "Bangun secara terbuka",
    buildOpenDesc: "Anda mendapatkan kode yang rapi, kabar perkembangan berkala, dan preview yang bisa digunakan.",
    shipImprove: "Luncurkan & kembangkan",
    shipImproveDesc: "Kami meluncurkan, mengukur hal penting, memperbaiki detail, dan meninggalkan produk yang terus berkembang.",
    pricingLabel: "Harga",
    honestPricing: "Harga jujur,<br /><em>tanpa kejutan</em>",
    pricingDescription: "Paket tetap untuk kebutuhan umum. Belum yakin mana yang cocok?",
    tellProject: "Ceritakan proyek Anda",
    advise: " dan kami akan memberi saran dengan jujur.",
    mostPopular: "Paling Populer",
    getStarted: "Mulai sekarang",
    discussProject: "Diskusikan proyek",
    contactLabel: "Mulai Proyek",
    buildSomething: "Mari buat<br /><em>sesuatu yang hebat</em>",
    contactDescription: "Ceritakan proyek Anda. Kami akan membalas dalam 24 jam dengan saran jujur — baik kami pilihan yang tepat maupun tidak.",
    fastestResponse: "Respons tercepat",
    faqHint: "Punya pertanyaan sebelum menghubungi kami?",
    checkFaq: "Lihat FAQ →",
    messageSent: "Pesan terkirim!",
    whatsappOpened: "WhatsApp telah dibuka dengan detail Anda. Kami membalas dalam 24 jam.",
    yourName: "Nama Anda",
    emailAddress: "Alamat email",
    companyName: "Nama perusahaan / bisnis",
    serviceNeeded: "Layanan yang dibutuhkan",
    selectService: "Pilih layanan",
    budgetRange: "Kisaran anggaran",
    selectBudget: "Pilih anggaran",
    projectDetails: "Ceritakan proyek Anda",
    sendWhatsapp: "Kirim via WhatsApp →",
    footerTagline: "Pengembangan web & produk digital<br />untuk bisnis yang terus berkembang.",
    company: "Perusahaan",
    getInTouch: "Hubungi Kami",
    allRights: "Hak cipta dilindungi.",
    builtIn: "Dibuat di Wonosobo, melayani dunia.",
    aboutUs: "Tentang Kami", aboutHero: "Kami membangun web untuk<br /><em>bisnis yang serius</em>", ourStory: "Cerita Kami", whatWeStandFor: "Yang Kami Pegang", ourValues: "Nilai kami", ourTechStack: "Teknologi Kami", modernTools: "Dibangun dengan tools modern", readyTogether: "Siap bekerja sama?", startProjectShort: "Mulai proyek", seeOurWork: "Lihat karya kami",
    servicesHero: "Semua yang bisnis Anda<br /><em>butuhkan online</em>", servicesSub: "Empat layanan utama. Ribuan bisnis telah kami bantu.", startingFrom: "Mulai dari", getQuote: "Minta Penawaran →", unsureService: "Belum yakin layanan apa yang dibutuhkan?", serviceAdvice: "Ceritakan bisnis Anda dan kami akan merekomendasikan pendekatan yang tepat.", pricingHero: "Harga jujur,<br /><em>tanpa kejutan</em>", pricingPageSub: "Paket tetap untuk kebutuhan umum.", commonQuestions: "Pertanyaan umum", stillQuestions: "Masih punya pertanyaan?", noSalesPitch: "Kami akan memberi jawaban langsung.", talkToUs: "Hubungi kami →", faqTitle: "Pertanyaan, terjawab.", faqSub: "Jawaban langsung tentang harga, waktu pengerjaan, dan cara kami bekerja.", stillHaveQuestions: "Masih punya pertanyaan?", portfolioTitle: "<em>Proyek</em> pilihan", portfolioSub: "Pilihan website dan produk digital yang kami bangun untuk bisnis di seluruh dunia.", loadingProjects: "Memuat proyek...", projectsSoon: "Proyek segera hadir.", getInTouchLabel: "Hubungi kami", loadingMore: "Memuat proyek lainnya...", viewLive: "Lihat langsung ↗", location: "Lokasi", worldwide: "Bekerja dengan klien di seluruh dunia", reply24: "Kami membalas dalam 24 jam", yourDetailsWhatsapp: "Detail Anda akan dikirim melalui WhatsApp.",
  },
  en: {
    services: "Services", work: "Work", about: "About", pricing: "Pricing", startProject: "Start a Project →",
    behindDesigns: "Behind the Designs", heroTitle: "Curious What Else<br />We&apos;ve Created?",
    heroDescription: "Explore a wide range of selected work — websites, digital products, and systems built for SMBs worldwide.",
    seeProjects: "See more Projects", liveView: "View live", strategy: "Strategy & Planning", design: "Design & Development", launch: "Launch & Growth", support: "Ongoing Support",
    ourServices: "Our Services", buildForYou: "What we <em>build</em><br />for you", viewServices: "View all services →", ourWork: "Our Work", selectedProjects: "Selected <em>projects</em>", viewProjects: "View all projects →", howWeWork: "How We Work", simpleProcess: "Simple process,<br /><em>real results</em>",
    frameProblem: "Frame the problem", frameProblemDesc: "We define the audience, the job to be done, and the smallest useful version of the product before touching the backlog.", shapeExperience: "Shape the experience", shapeExperienceDesc: "We map the flow and design the key screens so the interface feels clear, intentional, and ready to be built.", buildOpen: "Build in the open", buildOpenDesc: "You get clean, responsive code, regular progress updates, and a working preview instead of a black box.", shipImprove: "Ship & improve", shipImproveDesc: "We launch, measure what matters, fix the edges, and leave you with a product that can keep evolving.",
    pricingLabel: "Pricing", honestPricing: "Honest pricing,<br /><em>no surprises</em>", pricingDescription: "Fixed packages for the most common needs. Not sure which fits?", tellProject: "Tell us about your project", advise: " and we'll advise honestly.", mostPopular: "Most Popular", getStarted: "Get started", discussProject: "Discuss your project",
    contactLabel: "Start a Project", buildSomething: "Let's build<br /><em>something great</em>", contactDescription: "Tell us about your project. We'll get back to you within 24 hours with honest advice — whether or not we're the right fit.", fastestResponse: "Fastest response", faqHint: "Have questions before reaching out?", checkFaq: "Check the FAQ →", messageSent: "Message sent!", whatsappOpened: "WhatsApp has opened with your details. We reply within 24 hours.", yourName: "Your name", emailAddress: "Email address", companyName: "Company / business name", serviceNeeded: "Service needed", selectService: "Select a service", budgetRange: "Budget range", selectBudget: "Select budget", projectDetails: "Tell us about your project", sendWhatsapp: "Send via WhatsApp →", footerTagline: "Web development & digital products<br />for growing SMBs, worldwide.", company: "Company", getInTouch: "Get in Touch", allRights: "All rights reserved.", builtIn: "Built in Wonosobo, serving the world.",
    aboutUs: "About Us", aboutHero: "We build the web for<br /><em>businesses that mean it</em>", ourStory: "Our Story", whatWeStandFor: "What We Stand For", ourValues: "Our values", ourTechStack: "Our Tech Stack", modernTools: "Built with modern tools", readyTogether: "Ready to work together?", startProjectShort: "Start a project", seeOurWork: "See our work", servicesHero: "Everything your business<br /><em>needs online</em>", servicesSub: "Four core services. Thousands of businesses served.", startingFrom: "Starting from", getQuote: "Get a Quote →", unsureService: "Not sure which service you need?", serviceAdvice: "Tell us about your business and we'll recommend the right approach.", pricingHero: "Honest pricing,<br /><em>no surprises</em>", pricingPageSub: "Fixed packages for the most common needs.", commonQuestions: "Common questions", stillQuestions: "Still have questions?", noSalesPitch: "We'll give you a straight answer.", talkToUs: "Talk to us →", faqTitle: "Questions, answered.", faqSub: "Straight answers about pricing, timeline, and how we work.", stillHaveQuestions: "Still have questions?", portfolioTitle: "Selected <em>projects</em>", portfolioSub: "A selection of websites and digital products we've built worldwide.", loadingProjects: "Loading projects...", projectsSoon: "Projects coming soon.", getInTouchLabel: "Get in touch", loadingMore: "Loading more projects...", viewLive: "View Live ↗", location: "Location", worldwide: "Working with clients worldwide", reply24: "We reply within 24 hours", yourDetailsWhatsapp: "Your details will be sent via WhatsApp.",
  },
};

export type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: string) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("id");

  useEffect(() => {
    const saved = window.localStorage.getItem("alw-language");
    if (saved === "id" || saved === "en") setLanguageState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "id" ? "id" : "en";
  }, [language]);

  const setLanguage = (next: Language) => setLanguageState(next);
  const t = (key: string) => translations[language][key] ?? translations.en[key] ?? key;

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}