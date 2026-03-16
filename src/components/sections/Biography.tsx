import { Scale } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function Biography() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="quem-sou" className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn(
              'relative invisible mx-auto max-w-md w-full',
              isVisible && 'animate-fade-in-up',
            )}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform translate-x-4 translate-y-4" />
            <img
              src="https://lucasmorrone.adv.br/wp-content/uploads/2025/10/Lucas-Foto-Instagram-1.jpg"
              alt="Lucas Morrone Costa"
              className="relative z-10 rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
            />
          </div>

          <div
            className={cn('invisible', isVisible && 'animate-fade-in-up')}
            style={{ animationDelay: '200ms' }}
          >
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-2xl mb-6">
              <Scale className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Lucas Morrone Costa</h2>
            <p className="text-primary font-medium mb-6">OAB/RS 107485</p>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Advogado especialista em Direito Previdenciário, com atuação técnica e dedicada na
                busca por benefícios assistenciais, especialmente o BPC/LOAS.
              </p>
              <p>
                Minha missão é proporcionar um atendimento humano, ético e transparente, garantindo
                que pessoas em situação de vulnerabilidade tenham acesso à orientação jurídica
                correta para a defesa de seus direitos perante o INSS.
              </p>
            </div>

            <div className="bg-[#111111] border-l-4 border-primary p-6 rounded-r-lg shadow-sm">
              <p className="text-sm text-white/90 italic">
                <strong className="text-white font-semibold">Nota:</strong> Até 2023 utilizei o nome
                Lucas Moran Costa. A atualização para Lucas Morrone Costa já está presente em todos
                os meus registros oficiais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
