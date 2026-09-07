"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/content/Hero";
import Marquee from "@/components/Marquee";
import ServicesHome from "@/components/content/ServicesHome";
import PortfolioHome from "@/components/content/PortfolioHome";
import ProcessHome from "@/components/content/ProcessHome";
import PricingHome from "@/components/content/PricingHome";
import ContactHome from "@/components/content/ContactHome";
import HomepageContent from "@/components/HomepageContent";

export default function HomeClient() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        name: "ALW Gen",
        url: "https://alwgen.com",
        description: "Software house yang menyediakan jasa pembuatan website, aplikasi web custom, dan solusi digital untuk bisnis.",
        address: { "@type": "PostalAddress", addressLocality: "Wonosobo", addressRegion: "Jawa Tengah", addressCountry: "ID" },
        sameAs: ["https://instagram.com/alwgen", "https://linkedin.com/company/alwgen"],
      },
    ],
  };
  return (
    <>
      <Navbar />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <HomepageContent />
      </main>
      <Footer />
    </>
  );
}
