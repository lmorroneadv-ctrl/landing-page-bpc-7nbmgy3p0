import { FileText, Gavel, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-background">
      <div className="container" ref={ref}>
        <div
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 invisible',
            isVisible && 'animate-fade-in-up',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            Especialistas no Seu Momento
          </h2>
          <p className="text-muted-foreground text-lg">
            Nossa atuação é direcionada para a sua situação atual. Sabemos exatamente qual
            estratégia seguir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card
            className={cn(
              'group hover:shadow-gold transition-all duration-300 invisible border-primary/20',
              isVisible && 'animate-fade-in-up',
            )}
            style={{ animationDelay: '100ms' }}
          >
            <CardContent className="p-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Para Quem Nunca Solicitou</h3>
              <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
                Fazer o pedido inicial da forma correta é crucial. Um erro na documentação ou no
                preenchimento pode atrasar seu benefício em meses. Nós cuidamos de tudo, garantindo
                que o pedido seja feito com a máxima perfeição desde o dia um.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Organização de laudos médicos',
                  'Preenchimento adequado do CadÚnico',
                  'Protocolo sem falhas no INSS',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm font-medium text-foreground/80"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
              >
                Iniciar meu pedido seguro <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          <Card
            className={cn(
              'group hover:shadow-gold transition-all duration-300 invisible border-primary/20 bg-secondary text-secondary-foreground',
              isVisible && 'animate-fade-in-up',
            )}
            style={{ animationDelay: '200ms' }}
          >
            <CardContent className="p-10">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gavel className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4 text-white">
                Para Quem Foi Negado
              </h3>
              <p className="text-white/70 mb-8 text-balance leading-relaxed">
                Recebeu uma carta de indeferimento? Não se desespere. O INSS nega milhares de
                pedidos válidos diariamente por falhas de sistema ou análises superficiais. Nós
                entramos com recurso ou ação judicial para reverter essa decisão.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Análise do motivo da negativa',
                  'Estratégia judicial agressiva',
                  'Busca por retroativos (atrasados)',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className="inline-flex items-center text-primary font-bold hover:text-primary/80 transition-colors"
              >
                Reverter minha negativa <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
