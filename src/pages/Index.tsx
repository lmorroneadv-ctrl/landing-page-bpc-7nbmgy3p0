import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Biography from '@/components/sections/Biography'
import SocialProof from '@/components/sections/SocialProof'
import Blog from '@/components/sections/Blog'
import FAQ from '@/components/sections/FAQ'
import Location from '@/components/sections/Location'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import CookieBanner from '@/components/CookieBanner'

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Services />
        <Biography />
        <SocialProof />
        <Blog />
        <FAQ />
        <Location />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </div>
  )
}
