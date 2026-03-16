import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Biography } from '@/components/sections/Biography'
import { SocialProof } from '@/components/sections/SocialProof'
import { FAQ } from '@/components/sections/FAQ'
import { Location } from '@/components/sections/Location'

export default function Index() {
  return (
    <div className="w-full bg-background">
      <Hero />
      <Services />
      <Biography />
      <SocialProof />
      <FAQ />
      <Location />
    </div>
  )
}
