"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/content/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/content/Contact";
import Footer from "@/components/Footer";
import Portfolio from "@/components/content/portfolio";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Navbar setPage={setPage} />

      <main>
        {page === "home" && (
          <>
            <Hero />
            <Marquee />
            <Portfolio />
            <Services />
            <Process />
            <Contact />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}