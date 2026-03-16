import { Search, Map, Zap, CheckCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const steps = [
  {
    title: 'Análise Gratuita',
    description: 'Você nos envia um resumo do seu caso pelo WhatsApp ou formulário.',
    icon: Search,
  },
  {
    title: 'Estratégia',
    description: 'Nossa equipe avalia a viabilidade e cria um plano de ação personalizado.',
    icon: Map,
  },
  {
    title: 'Ação Rápida',
    description: 'Reunimos os documentos e protocolamos seu pedido ou recurso rapidamente.',
    icon: Zap,
  },
  {
    title: 'Aprovação',
    description: 'Acompanhamos de perto até a concessão do benefício e liberação do dinheiro.',
    icon: CheckCircle,
  },
]

export function ProcessTimeline() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="container max-w-5xl" ref={ref}>
        <div className={cn('text-center mb-16 invisible', isVisible && 'animate-fade-in-up')}>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Como Funciona o Processo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Criamos um método simples e transparente, para que você não precise sair de casa ou
            entender de leis.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0">
            <div
              className={cn(
                'absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out',
                isVisible ? 'w-full' : 'w-0',
              )}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={cn('text-center relative invisible', isVisible && 'animate-fade-in-up')}
                style={{ animationDelay: `${i * 200}ms` }}
              >
                {/* Mobile connecting line */}
                {i !== steps.length - 1 && (
                  <div className="md:hidden absolute top-24 left-1/2 w-0.5 h-12 bg-primary/20 -translate-x-1/2" />
                )}

                <div
                  className="w-24 h-24 mx-auto bg-background border-4 border-muted rounded-full flex items-center justify-center mb-6 relative z-10 transition-colors duration-500 delay-500 data-[visible=true]:border-primary"
                  data-visible={isVisible}
                >
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="bg-primary/10 text-primary text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4">
                  {i + 1}
                </div>
                <h3 className="font-serif font-bold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
