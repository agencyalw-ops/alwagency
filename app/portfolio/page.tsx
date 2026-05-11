import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PortfolioFull from '@/components/content/PortfolioFull'

export const metadata: Metadata = {
  title: 'Our Work — Portfolio',
  description: 'A selection of websites and digital products we\'ve built for businesses worldwide.',
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioFull />
      </main>
      <Footer />
    </>
  )
}
