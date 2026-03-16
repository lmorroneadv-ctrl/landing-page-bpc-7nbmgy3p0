import { Star, BadgeCheck } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Maria José da Silva',
    text: 'Tentei pedir o BPC para meu filho autista sozinha e foi negado. O Dr. Lucas pegou o caso e em 3 meses conseguimos a aprovação. Mudou nossa vida!',
    seed: 1,
    gender: 'female',
  },
  {
    name: 'Antônio Carlos',
    text: 'Profissional extremamente competente. O diferencial de só pagar no final me deu a segurança que eu precisava. Agradeço a toda equipe.',
    seed: 2,
    gender: 'male',
  },
  {
    name: 'Sandra Regina',
    text: 'Eu não tinha dinheiro para pagar um advogado antes de ganhar a causa. A equipe foi muito humana e resolveu meu problema com o INSS.',
    seed: 3,
    gender: 'female',
  },
]

export function SocialProof() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="depoimentos" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container">
        <div
          ref={ref}
          className={cn(
            'text-center max-w-2xl mx-auto mb-12 invisible',
            isVisible && 'animate-fade-in-up',
          )}
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
            Resultados que Transformam Vidas
          </h2>
          <p className="text-muted-foreground">
            Não acredite apenas em nossas palavras. Veja o que as famílias que ajudamos têm a dizer
            sobre nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className={cn('border-none shadow-soft invisible', isVisible && 'animate-fade-in-up')}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between border-t border-border pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://img.usecurling.com/ppl/thumbnail?gender=${testimonial.gender}&seed=${testimonial.seed}`}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="font-semibold text-sm">{testimonial.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                    <BadgeCheck className="w-4 h-4" />
                    <span>Verificado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
