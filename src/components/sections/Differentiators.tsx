import { Trophy, Clock, HeartHandshake, Scale } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const diffs = [
  {
    title: 'Especialização Profunda',
    description:
      'Não fazemos de tudo. Focamos em BPC e Previdenciário para entregar os melhores resultados possíveis.',
    icon: Trophy,
  },
  {
    title: 'Agilidade Comprovada',
    description:
      'Sabemos que quem precisa de BPC tem urgência. Nossa equipe protocoliza ações em tempo recorde.',
    icon: Clock,
  },
  {
    title: 'Atendimento Humanizado',
    description:
      'Você não é um número de processo. Tratamos cada caso com a empatia e respeito que sua família merece.',
    icon: HeartHandshake,
  },
  {
    title: 'Transparência Total',
    description:
      'Atualizações constantes via WhatsApp sobre o andamento do seu processo, sem linguagem jurídica complicada.',
    icon: Scale,
  },
]

export function Differentiators() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-muted/30">
      <div className="container" ref={ref}>
        <div
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 invisible',
            isVisible && 'animate-fade-in-up',
          )}
        >
          <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
            Por Que Escolher Nosso Escritório?
          </h2>
          <p className="text-muted-foreground">
            Diferenciais que constroem nossa autoridade e garantem a sua tranquilidade durante todo
            o processo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((item, i) => (
            <Card
              key={i}
              className={cn(
                'border-none shadow-sm hover:shadow-md transition-shadow invisible',
                isVisible && 'animate-fade-in-up',
              )}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
