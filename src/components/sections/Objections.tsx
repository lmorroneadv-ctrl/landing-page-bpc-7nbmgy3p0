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
              "Não tenho dinheiro para pagar advogado agora"
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Nós entendemos perfeitamente. Por isso, trabalhamos com o modelo{' '}
              <strong className="text-primary font-semibold">Ad Exitum</strong>. Isso significa que
              você não tira um centavo do bolso para iniciar o processo conosco.
            </p>
            <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary pl-4 italic">
              Nossos honorários só são pagos se ganharmos a causa para você. O risco é todo nosso.
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
              "O INSS já negou meu pedido uma vez"
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Mais de 60% dos pedidos de BPC são negados na primeira tentativa por erros
              burocráticos. Uma negativa administrativa não é o fim da linha.
            </p>
            <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary pl-4 italic">
              Nossa especialidade é exatamente identificar o erro do INSS, entrar com uma ação
              judicial e exigir não só o benefício, mas todo o valor atrasado desde a primeira
              tentativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
