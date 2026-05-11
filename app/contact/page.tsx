import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactFull from '@/components/content/ContactFull'

export const metadata: Metadata = {
  title: 'Contact — Start a Project',
  description: 'Tell us about your project. We\'ll get back within 24 hours with honest advice.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactFull />
      </main>
      <Footer />
    </>
  )
}
