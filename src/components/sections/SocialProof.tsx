import { Star, Quote } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function SocialProof() {
  const testimonials = [
    {
      name: 'Maria da Silva',
      role: 'Mãe de criança atípica',
      content:
        'Depois de tentar duas vezes sozinha e ter o pedido negado, o Dr. Lucas conseguiu o benefício do meu filho na justiça. Mudou nossa vida.',
    },
    {
      name: 'José Carlos',
      role: 'Idoso (68 anos)',
      content:
        'Fui muito bem atendido desde a primeira mensagem. A equipe cuidou de toda a papelada e hoje recebo meu benefício certinho todo mês.',
    },
    {
      name: 'Ana Oliveira',
      role: 'Aposentadoria por Invalidez',
      content:
        'Excelente profissional. Me explicou tudo com muita clareza e acompanhou meu caso com muita dedicação. Recomendo de olhos fechados.',
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
            Depoimentos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que dizem nossos clientes
          </h3>
          <p className="text-gray-400 text-lg">
            A maior recompensa do nosso trabalho é a transformação na vida de quem confia em nós.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-zinc-900 border-gray-800 rounded-none relative">
              <Quote className="absolute top-6 right-6 text-gray-800" size={48} />
              <CardContent className="pt-10 px-8 pb-8 relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg italic mb-8 relative z-10">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
