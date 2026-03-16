import { Card, CardContent } from '@/components/ui/card'
import { XCircle, Clock, Ban, AlertTriangle, RefreshCcw } from 'lucide-react'

const characteristics = [
  {
    icon: <Ban className="w-8 h-8 text-gold mb-4" />,
    title: 'Não é aposentadoria',
    desc: 'É um benefício assistencial. Não exige que você tenha contribuído para o INSS ao longo da vida.',
  },
  {
    icon: <XCircle className="w-8 h-8 text-gold mb-4" />,
    title: 'Não possui 13º salário',
    desc: 'Por ser um benefício assistencial (LOAS), não há pagamento de gratificação natalina (13º salário).',
  },
  {
    icon: <AlertTriangle className="w-8 h-8 text-gold mb-4" />,
    title: 'Não gera pensão por morte',
    desc: 'Em caso de falecimento do titular, o benefício é encerrado e não é transferido aos dependentes.',
  },
  {
    icon: <RefreshCcw className="w-8 h-8 text-gold mb-4" />,
    title: 'Não acumula com outros benefícios',
    desc: 'Não pode ser acumulado com aposentadoria, pensão, seguro-desemprego ou outro benefício previdenciário.',
  },
  {
    icon: <Clock className="w-8 h-8 text-gold mb-4" />,
    title: 'Tem duração continuada',
    desc: 'O benefício é pago enquanto as condições que deram origem a ele (renda, deficiência/idade) se mantiverem.',
  },
]

export default function BpcCharacteristics() {
  return (
    <section className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Características <span className="text-gold">Principais</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Entenda os 5 pontos fundamentais sobre como o BPC/LOAS funciona na prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {characteristics.map((item, index) => (
            <Card
              key={index}
              className="bg-[#1A1A1A] border-border hover:border-gold/30 transition-all duration-300 break-inside-avoid"
            >
              <CardContent className="p-8 text-center flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
