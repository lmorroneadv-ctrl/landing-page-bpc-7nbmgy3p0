import { Card, CardContent } from '@/components/ui/card'
import { XCircle, Ban, AlertTriangle } from 'lucide-react'

const characteristics = [
  {
    icon: <Ban className="w-10 h-10 text-amber-600 mb-2" />,
    title: 'Não é Aposentadoria',
    desc: 'O BPC é um benefício assistencial. Isso significa que não exige que você tenha contribuído para o INSS ao longo da vida para ter direito.',
  },
  {
    icon: <XCircle className="w-10 h-10 text-amber-600 mb-2" />,
    title: 'Sem 13º Salário',
    desc: 'Diferente das aposentadorias tradicionais, por ser um benefício de natureza assistencial (LOAS), não há o pagamento de gratificação natalina (13º).',
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-amber-600 mb-2" />,
    title: 'Sem Pensão por Morte',
    desc: 'O benefício é intransferível. Em caso de falecimento do titular, o pagamento é encerrado e não gera direito a pensão por morte aos dependentes.',
  },
]

export default function BpcCharacteristics() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 break-inside-avoid">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
              Características <span className="text-amber-600">Centrais</span> do Benefício
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              Muitas pessoas confundem o BPC/LOAS com uma aposentadoria comum. Entender essas três
              características fundamentais é o primeiro passo para conhecer e garantir os seus
              direitos reais de forma correta.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
              <img
                src="https://img.usecurling.com/p/800/600?q=legal%20balance%20scale&color=white"
                alt="Balança da Justiça"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent"></div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            {characteristics.map((item, index) => (
              <Card
                key={index}
                className="bg-slate-50 border-slate-200 hover:border-amber-300 transition-all duration-300 break-inside-avoid shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                <CardContent className="p-6 md:p-8 flex items-start gap-6">
                  <div className="shrink-0 p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base font-medium">
                      {item.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
