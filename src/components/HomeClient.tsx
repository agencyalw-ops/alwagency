"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/content/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/content/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/content/portfolio";

export default function HomeClient() {
  return (
    <>
      <Navbar /> {/* ← tidak perlu setPage lagi */}
      <main>
        <Hero />
        <Marquee />
        <Portfolio />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}