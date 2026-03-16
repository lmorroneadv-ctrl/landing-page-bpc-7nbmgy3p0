import { Card, CardContent } from '@/components/ui/card'
import { XCircle, Ban, AlertTriangle } from 'lucide-react'

const characteristics = [
  {
    icon: <Ban className="w-10 h-10 text-gold mb-2" />,
    title: 'Não é Aposentadoria',
    desc: 'O BPC é um benefício assistencial. Isso significa que não exige que você tenha contribuído para o INSS ao longo da vida para ter direito.',
  },
  {
    icon: <XCircle className="w-10 h-10 text-gold mb-2" />,
    title: 'Sem 13º Salário',
    desc: 'Diferente das aposentadorias tradicionais, por ser um benefício de natureza assistencial (LOAS), não há o pagamento de gratificação natalina (13º).',
  },
  {
    icon: <AlertTriangle className="w-10 h-10 text-gold mb-2" />,
    title: 'Sem Pensão por Morte',
    desc: 'O benefício é intransferível. Em caso de falecimento do titular, o pagamento é encerrado e não gera direito a pensão por morte aos dependentes.',
  },
]

export default function BpcCharacteristics() {
  return (
    <section className="py-24 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 break-inside-avoid">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              Características <span className="text-gold">Centrais</span> do Benefício
            </h2>
            <p className="text-foreground/70 text-lg mb-8 leading-relaxed">
              Muitas pessoas confundem o BPC/LOAS com uma aposentadoria comum. Entender essas três
              características fundamentais é o primeiro passo para conhecer e garantir os seus
              direitos reais de forma correta.
            </p>
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl group">
              <img
                src="https://img.usecurling.com/p/800/600?q=legal%20balance%20scale&color=black"
                alt="Balança da Justiça"
                className="w-full h-[400px] object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-90"></div>
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6 w-full">
            {characteristics.map((item, index) => (
              <Card
                key={index}
                className="bg-[#1A1A1A] border-border hover:border-gold/40 transition-all duration-300 break-inside-avoid shadow-lg transform hover:-translate-y-1"
              >
                <CardContent className="p-6 md:p-8 flex items-start gap-6">
                  <div className="shrink-0 p-4 bg-[#111111] rounded-xl border border-gold/20 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
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
