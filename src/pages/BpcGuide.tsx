import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BpcHero } from '@/components/bpc-guide/BpcHero'
import { Button } from '@/components/ui/button'
import { CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'

export default function BpcGuide() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-yellow-600/30">
      <Header />
      <main>
        <BpcHero />

        <section className="py-20 bg-zinc-900">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h2 className="text-3xl font-bold mb-10 text-white border-b border-gray-800 pb-4">
              O que é o BPC/LOAS e quem tem direito?
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed">
                O Benefício de Prestação Continuada (BPC), regulamentado pela Lei Orgânica da
                Assistência Social (LOAS), é a garantia de um salário mínimo mensal à pessoa com
                deficiência e ao idoso com 65 anos ou mais que comprovem não possuir meios de prover
                a própria manutenção nem de tê-la provida por sua família.
              </p>
              <div className="bg-yellow-900/20 border-l-4 border-yellow-600 p-6 my-8 rounded-r-lg">
                <p className="text-yellow-500 font-semibold m-0 flex items-start gap-3">
                  <AlertTriangle className="shrink-0 mt-1" size={24} />
                  Atenção: Diferente da aposentadoria, o BPC não exige que você tenha contribuído
                  para o INSS ao longo da vida. É um benefício assistencial.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mb-10 text-white mt-16 border-b border-gray-800 pb-4">
              Quem tem direito ao LOAS em 2026?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-black p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">Para Idosos</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>Ter 65 anos de idade ou mais</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>
                      Renda familiar per capita de até 1/4 do salário mínimo (pode ser flexibilizado
                      na justiça)
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>Estar inscrito no CadÚnico atualizado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-black p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">Para PCD</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>Qualquer idade</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>
                      Impedimento de longo prazo (mínimo de 2 anos) de natureza física, mental,
                      intelectual ou sensorial
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <CheckCircle2 className="text-yellow-600 shrink-0 mt-1" size={20} />
                    <span>Renda familiar per capita de até 1/4 do salário mínimo</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12 bg-black border border-gray-800 p-10">
              <h3 className="text-2xl font-bold text-white mb-4">Seu pedido foi negado?</h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Milhares de benefícios são negados injustamente pelo INSS todos os dias por detalhes
                documentais ou avaliações periciais equivocadas. Nós podemos reverter isso na
                justiça.
              </p>
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-none px-8 py-6 uppercase tracking-wider font-semibold"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Avaliar Meu Caso Gratuitamente
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
