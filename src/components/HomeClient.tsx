"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/content/Hero";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/content/portfolio";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/content/Contact";
import Footer from "@/components/Footer";

export default function HomeClient() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
