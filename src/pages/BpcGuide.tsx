import { useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CookieBanner from '@/components/CookieBanner'
import BpcHero from '@/components/bpc-guide/BpcHero'
import BpcCharacteristics from '@/components/bpc-guide/BpcCharacteristics'
import BpcEligibility from '@/components/bpc-guide/BpcEligibility'
import BpcProcess from '@/components/bpc-guide/BpcProcess'
import BpcTable from '@/components/bpc-guide/BpcTable'
import BpcFAQ from '@/components/bpc-guide/BpcFAQ'
import { Toaster } from '@/components/ui/toaster'

export default function BpcGuide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#111111] text-foreground flex flex-col">
      <Header />
      <main className="flex-grow pt-20 md:pt-24 bg-[#111111]" id="bpc-guide-content">
        <BpcHero />
        <BpcCharacteristics />
        <BpcEligibility />
        <BpcProcess />
        <BpcTable />
        <BpcFAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <Toaster />
    </div>
  )
}
