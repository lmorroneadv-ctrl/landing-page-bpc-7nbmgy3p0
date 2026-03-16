import { Star, MessageCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Maria José da Silva',
    text: 'Procurei o escritório após ter o BPC do meu filho negado. A equipe foi muito clara desde o início sobre as possibilidades. Felizmente, conseguimos reverter a situação na justiça.',
    seed: 1,
    gender: 'female',
  },
  {
    name: 'Antônio Carlos',
    text: 'Atendimento muito profissional e transparente. O fato de trabalharem com honorários apenas no êxito me passou a segurança que eu precisava para iniciar o processo.',
    seed: 2,
    gender: 'male',
  },
  {
    name: 'Sandra Regina',
    text: 'Toda a comunicação foi feita pelo WhatsApp, o que facilitou muito por eu morar no interior. Fui sempre informada sobre cada andamento do meu pedido no INSS.',
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
            Experiências de Nossos Clientes
          </h2>
          <p className="text-muted-foreground">
            A transparência e o compromisso ético refletidos nas avaliações de quem já confiou em
            nosso trabalho.
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
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                    <MessageCircle className="w-3 h-3" />
                    <span>Google Reviews</span>
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
