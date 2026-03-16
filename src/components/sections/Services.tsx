import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Landmark, FileText, HandHeart, Users, Briefcase, Clock } from 'lucide-react'

const services = [
  {
    title: 'Benefício Assistencial (BPC/LOAS)',
    description:
      'Assessoria completa para idosos acima de 65 anos e pessoas com deficiência de baixa renda conquistarem o benefício assistencial de um salário mínimo.',
    icon: HandHeart,
  },
  {
    title: 'Aposentadoria por Idade',
    description:
      'Análise detalhada do seu tempo de contribuição e idade para garantir o melhor benefício possível no momento certo.',
    icon: Landmark,
  },
  {
    title: 'Aposentadoria por Invalidez',
    description:
      'Atuação forte e especializada em casos de incapacidade total e permanente para o trabalho, garantindo o amparo financeiro.',
    icon: Briefcase,
  },
  {
    title: 'Pensão por Morte',
    description:
      'Suporte humanizado e jurídico aos dependentes para a obtenção do benefício previdenciário de forma rápida e segura.',
    icon: Users,
  },
  {
    title: 'Revisão de Benefícios',
    description:
      'Identificação de erros no cálculo do INSS e ingresso com ações judiciais para aumentar o valor da sua aposentadoria.',
    icon: FileText,
  },
  {
    title: 'Planejamento Previdenciário',
    description:
      'Estudo aprofundado do seu histórico para definir as melhores estratégias de contribuição e o momento ideal para a aposentadoria.',
    icon: Clock,
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Áreas de Atuação
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
            Especialidade Previdenciária
          </h3>
          <p className="text-lg text-muted-foreground max-w-[800px] font-light">
            Foco exclusivo na defesa dos direitos do segurado. Garantimos que o INSS cumpra com suas
            obrigações legais, oferecendo suporte em todas as instâncias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-background border-border hover:border-primary/50 transition-all duration-300 group shadow-none"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground font-semibold">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
