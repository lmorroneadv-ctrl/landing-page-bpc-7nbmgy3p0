import { ArrowRight, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto" ref={ref}>
        <div className={cn('invisible', isVisible && 'animate-fade-in-up')}>
          <Scale className="w-16 h-16 text-primary-foreground mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 text-balance">
            Dê o Primeiro Passo Para Buscar o Seu Direito
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            A orientação jurídica adequada é fundamental para assegurar a correta análise do seu
            requerimento. Entre em contato conosco para uma avaliação prévia.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="h-14 px-10 text-lg font-bold shadow-2xl hover:scale-105 transition-transform"
            asChild
          >
            <a href="#contato">
              Falar com Nossa Equipe
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
