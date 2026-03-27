import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Scale, Clock, Users, ShieldAlert, Tractor, Activity } from 'lucide-react'

const services = [
  {
    title: 'Aposentadoria por Idade',
    icon: <Clock className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Cálculo do tempo de contribuição',
      'Simulação do benefício',
      'Correção de vínculos',
      'Pedido administrativo completo',
    ],
  },
  {
    title: 'Aposentadoria por Tempo',
    icon: <Scale className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Análise de direito adquirido',
      'Simulação de todas as regras',
      'Correção de vínculos',
      'Planejamento previdenciário completo',
    ],
  },
  {
    title: 'Pensão por Morte',
    icon: <Users className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Análise de dependência',
      'Documentação necessária',
      'Pedido administrativo completo',
      'Revisão do valor do benefício',
    ],
  },
  {
    title: 'BPC / LOAS',
    icon: <ShieldAlert className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Análise de renda e requisitos legais',
      'Organização da documentação',
      'Pedido administrativo completo',
      'Recurso em caso de negativa',
    ],
  },
  {
    title: 'Aposentadoria Híbrida',
    icon: <Tractor className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Cálculo urbano + rural atualizado',
      'Validação de documentos rurais',
      'Simulação completa',
      'Pedido administrativo completo',
    ],
  },
  {
    title: 'Benefícios por Incapacidade',
    icon: <Activity className="h-8 w-8 text-gold mb-4" />,
    items: [
      'Benefício por Incapacidade Temporária',
      'Benefício por Incapacidade Permanente',
      'Análise médica previdenciária',
      'Recurso em caso de negativa',
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Áreas de <span className="text-gold-dark">Atuação</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Oferecemos assessoria jurídica especializada para garantir que seus direitos
            previdenciários sejam respeitados e concedidos de forma correta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-gold shadow-soft transition-all duration-300 hover:shadow-md"
            >
              <CardHeader>
                {service.icon}
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground font-medium">
                      <CheckCircle2 className="h-5 w-5 text-gold mr-3 shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-gold-dark text-gold-dark hover:bg-gold hover:text-black hover:border-gold transition-colors font-semibold"
                  asChild
                >
                  <a
                    href={`https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar Análise
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
