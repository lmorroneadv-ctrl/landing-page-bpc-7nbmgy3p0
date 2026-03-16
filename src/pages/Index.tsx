import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Biography } from '@/components/sections/Biography'
import { LeadMagnet } from '@/components/sections/LeadMagnet'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { AnalysisForm } from '@/components/sections/AnalysisForm'
import { FAQ } from '@/components/sections/FAQ'
import { Location } from '@/components/sections/Location'
import { FinalCTA } from '@/components/sections/FinalCTA'

const Index = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
      <Hero />
      <SocialProof />
      <Services />
      <Biography />
      <LeadMagnet />
      <ProcessTimeline />
      <AnalysisForm />
      <FAQ />
      <Location />
      <FinalCTA />
    </div>
  )
}

export default Index
