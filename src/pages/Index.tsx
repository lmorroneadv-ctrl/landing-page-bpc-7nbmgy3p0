import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Objections } from '@/components/sections/Objections'
import { Differentiators } from '@/components/sections/Differentiators'
import { LeadMagnet } from '@/components/sections/LeadMagnet'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { AnalysisForm } from '@/components/sections/AnalysisForm'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

const Index = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
      <Hero />
      <SocialProof />
      <Services />
      <Objections />
      <LeadMagnet />
      <ProcessTimeline />
      <AnalysisForm />
      <Differentiators />
      <FAQ />
      <FinalCTA />
    </div>
  )
}

export default Index
