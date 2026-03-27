import { useEffect } from 'react'
import { BpcHero } from '@/components/bpc-guide/BpcHero'
import BpcCharacteristics from '@/components/bpc-guide/BpcCharacteristics'
import BpcEligibility from '@/components/bpc-guide/BpcEligibility'
import BpcTable from '@/components/bpc-guide/BpcTable'
import BpcFAQ from '@/components/bpc-guide/BpcFAQ'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function BpcGuide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-gold/30">
      <main>
        <BpcHero />
        <BpcCharacteristics />
        <BpcEligibility />
        <BpcTable />
        <BpcFAQ />

        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center bg-slate-50 border border-slate-200 p-10 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Seu pedido foi negado?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium text-lg">
                Muitos benefícios são negados pelo INSS por detalhes documentais ou avaliações
                periciais. É possível buscar a reversão judicial com análise técnica especializada.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black rounded-none px-8 py-6 uppercase tracking-wider font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    'https://wa.me/5553981063023?text=Olá,%20meu%20benefício%20foi%20negado,%20gostaria%20de%20ajuda.',
                    '_blank',
                  )
                }
              >
                Avaliar Meu Caso
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
