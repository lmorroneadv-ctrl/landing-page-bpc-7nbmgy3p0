import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Biography } from '@/components/sections/Biography'
import { SocialProof } from '@/components/sections/SocialProof'
import { FAQ } from '@/components/sections/FAQ'
import { Location } from '@/components/sections/Location'

export default function Index() {
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-yellow-600/30">
      <Header />
      <main>
        <Hero />
        <Services />
        <Biography />
        <SocialProof />
        <FAQ />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
