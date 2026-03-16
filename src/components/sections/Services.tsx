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
            Nossas Frentes de Atuação
          </h2>
          <p className="text-muted-foreground text-lg">
            Direcionamos nossa estratégia jurídica de acordo com o momento do seu caso perante o
            INSS.
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
              <h3 className="text-2xl font-serif font-bold mb-4">Primeiro Requerimento</h3>
              <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
                A preparação minuciosa do pedido inicial é fundamental. Uma falha na documentação
                pode ocasionar o indeferimento do benefício. Auxiliamos na estruturação completa
                para que o pedido seja feito com segurança técnica.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Orientação sobre laudos e perícias',
                  'Revisão dos dados do CadÚnico',
                  'Protocolo administrativo acompanhado',
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
                Solicitar análise inicial <ArrowRight className="ml-2 w-4 h-4" />
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
                Reversão de Negativas
              </h3>
              <p className="text-white/70 mb-8 text-balance leading-relaxed">
                Muitos benefícios são indeferidos indevidamente por inconsistências burocráticas do
                órgão. Atuamos com recursos administrativos ou ações judiciais para buscar o
                reconhecimento do direito negado.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Estudo aprofundado do motivo da recusa',
                  'Estratégia judicial especializada',
                  'Busca pelo pagamento de valores retroativos',
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
                Analisar minha negativa <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
