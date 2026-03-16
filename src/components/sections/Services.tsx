import { FileText, Heart, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function Services() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container" ref={ref}>
        <div
          className={cn(
            'text-center max-w-2xl mx-auto mb-16 invisible',
            isVisible && 'animate-fade-in-up',
          )}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-balance">
            Especialização em BPC
          </h2>
          <p className="text-muted-foreground text-lg">
            Atuação focada para garantir a correta análise e concessão do Benefício de Prestação
            Continuada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card
            className={cn(
              'group hover:shadow-gold transition-all duration-300 invisible border-primary/20 bg-[#111111] text-white',
              isVisible && 'animate-fade-in-up',
            )}
            style={{ animationDelay: '100ms' }}
          >
            <CardContent className="p-10">
              <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">BPC / LOAS</h3>
              <p className="text-white/70 mb-8 text-balance leading-relaxed">
                Atendimento completo para concessão do benefício assistencial.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Análise de renda e requisitos legais',
                  'Organização da documentação',
                  'Pedido administrativo completo',
                  'Recurso em caso de negativa',
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
                Solicitar análise <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>

          <Card
            className={cn(
              'group hover:shadow-gold transition-all duration-300 invisible border-primary/20',
              isVisible && 'animate-fade-in-up',
            )}
            style={{ animationDelay: '200ms' }}
          >
            <CardContent className="p-10">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">BPC/LOAS para autismo</h3>
              <p className="text-muted-foreground mb-8 text-balance leading-relaxed">
                Orientação específica para crianças e adolescentes com TEA. Sabemos que as
                exigências e os laudos periciais possuem particularidades nestes casos, e prestamos
                todo o suporte para a comprovação do direito.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Análise de laudos médicos especializados',
                  'Acompanhamento do processo pericial',
                  'Garantia dos direitos da criança/adolescente',
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
                Tirar dúvidas sobre TEA <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
