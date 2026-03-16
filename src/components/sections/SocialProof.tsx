import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    text: 'Após ter meu BPC negado duas vezes pelo INSS, o Dr. Lucas conseguiu reverter a situação na justiça em tempo recorde. Muito atencioso e profissional.',
  },
  {
    name: 'José Santos',
    location: 'Campinas, SP',
    text: 'Achei que nunca conseguiria me aposentar por causa de problemas na minha carteira de trabalho. O escritório fez todo o levantamento e deu certo.',
  },
  {
    name: 'Ana Oliveira',
    location: 'Rio de Janeiro, RJ',
    text: 'Estava desesperada quando meu auxílio-doença foi cortado. A equipe foi impecável e consegui a aposentadoria por invalidez.',
  },
  {
    name: 'Carlos Mendes',
    location: 'Belo Horizonte, MG',
    text: 'Atendimento nota 10! Mesmo morando em outro estado, todo o processo foi transparente e sempre me mantiveram informado pelo WhatsApp.',
  },
]

export function SocialProof() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))

  return (
    <section id="depoimentos" className="py-24 bg-muted border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Credibilidade
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
            Reconhecimento
          </h3>
          <div className="flex items-center gap-1 justify-center mt-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            O sucesso das nossas ações reflete o compromisso com cada cliente. Leia o que dizem
            aqueles que confiaram em nosso trabalho.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-10">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            opts={{
              align: 'start',
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-background border-border shadow-none h-full">
                      <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                        <div className="space-y-4">
                          <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="h-4 w-4 fill-primary text-primary" />
                            ))}
                          </div>
                          <p className="text-muted-foreground italic leading-relaxed">
                            "{testimonial.text}"
                          </p>
                        </div>
                        <div className="pt-4 border-t border-border/50">
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-primary/20 text-primary hover:bg-primary/10" />
            <CarouselNext className="hidden md:flex -right-12 border-primary/20 text-primary hover:bg-primary/10" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}
