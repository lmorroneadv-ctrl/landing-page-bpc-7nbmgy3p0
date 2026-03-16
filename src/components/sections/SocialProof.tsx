import { Star, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const testimonials = [
  {
    name: 'Maria T.',
    text: 'Procurei o Dr. Lucas após o BPC da minha mãe ser negado. Fui muito bem orientada sobre cada passo e conseguimos reverter a situação. Excelente profissional.',
    seed: 4,
    gender: 'female',
  },
  {
    name: 'João R.',
    text: 'Atendimento muito transparente e humano. Tirou todas as minhas dúvidas sobre a documentação necessária para o benefício do meu filho.',
    seed: 5,
    gender: 'male',
  },
  {
    name: 'Fernanda L.',
    text: 'Profissionalismo impecável. O acompanhamento do caso foi feito com muita clareza, sempre me atualizando sobre o andamento no INSS.',
    seed: 6,
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
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-border">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span className="font-semibold text-sm">Verificado no Google</span>
            <CheckCircle className="w-4 h-4 text-blue-500" />
          </div>
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
