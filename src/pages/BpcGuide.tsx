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

        {/* Contact info strictly for the PDF document at the end */}
        <div className="py-12 bg-[#111111] text-center border-t border-border/50 break-inside-avoid">
          <p className="text-gold font-bold text-xl mb-2">
            Dr. Lucas Morrone - Advocacia Previdenciária
          </p>
          <p className="text-white font-medium">Contato WhatsApp: 55 53 981063023</p>
          <p className="text-foreground/50 text-sm mt-6">
            Este documento foi gerado automaticamente através do site oficial do escritório.
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
      <Toaster />
    </div>
  )
}
