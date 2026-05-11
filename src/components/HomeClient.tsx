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

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ServicesHome />
        <PortfolioHome />
        <ProcessHome />
        <PricingHome />
        <ContactHome />
      </main>
      <Footer />
    </>
  );
}
