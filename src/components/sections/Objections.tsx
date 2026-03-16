import { Wallet, ShieldAlert } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function Objections() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10" ref={ref}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className={cn('invisible', isVisible && 'animate-fade-in-up')}>
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl mb-6">
              <Wallet className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Dúvidas sobre Honorários
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Uma preocupação comum é sobre os custos iniciais para contratar um advogado
              especialista. Em nosso escritório, trabalhamos sob o modelo{' '}
              <strong className="text-primary font-semibold">Ad Exitum</strong>.
            </p>
            <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary pl-4 italic">
              Isso significa que nossos honorários são devidos apenas se houver êxito no seu
              processo, descontados ao final sobre o proveito econômico obtido.
            </p>
          </div>

          <div
            className={cn('invisible', isVisible && 'animate-fade-in-up')}
            style={{ animationDelay: '200ms' }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl mb-6">
              <ShieldAlert className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Lidando com Negativas do INSS
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Receber uma carta de indeferimento pode ser frustrante, mas não significa
              necessariamente que você não tem o direito ao benefício.
            </p>
            <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary pl-4 italic">
              A análise técnica do motivo da recusa é essencial. Muitas vezes, falhas documentais ou
              análises periciais superficiais podem ser contestadas judicialmente com eficácia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
