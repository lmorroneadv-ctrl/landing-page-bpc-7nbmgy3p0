import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria C. Santos',
    role: 'Aposentadoria Concedida',
    text: 'A clareza técnica e a dedicação do Dr. Lucas foram fundamentais para a concessão da minha aposentadoria. O processo foi conduzido de forma ética e muito transparente.',
  },
  {
    name: 'João R. Oliveira',
    role: 'BPC/LOAS',
    text: 'Depois de ter o benefício negado duas vezes pelo INSS, procurei o escritório. A organização da documentação e a orientação precisa fizeram toda a diferença para o meu filho.',
  },
  {
    name: 'Antônio M. Silva',
    role: 'Aposentadoria por Tempo',
    text: 'Profissionalismo exemplar. Fizeram um planejamento previdenciário completo que me mostrou exatamente qual seria o melhor momento para dar entrada no meu pedido.',
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos <span className="text-gold">Clientes</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            O compromisso com a excelência técnica reflete na confiança de quem busca a garantia de
            seus direitos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1A1A1A] border-border relative mt-6">
              <div className="absolute -top-6 left-6 bg-gold rounded-full p-3 shadow-lg">
                <Quote className="h-6 w-6 text-[#111111]" />
              </div>
              <CardContent className="pt-10 pb-8 px-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
