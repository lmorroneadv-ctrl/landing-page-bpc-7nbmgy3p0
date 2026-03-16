import { FileText, Shield, Clock, HeartHandshake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Services() {
  const services = [
    {
      icon: <FileText size={32} className="text-yellow-600" />,
      title: 'Requerimento Administrativo',
      description:
        'Montamos todo o seu processo no INSS da forma correta, anexando laudos e documentos indispensáveis para aprovação.',
    },
    {
      icon: <Shield size={32} className="text-yellow-600" />,
      title: 'Ação Judicial',
      description:
        'Seu BPC foi negado pelo INSS? Nós entramos com processo na Justiça Federal para garantir o seu direito.',
    },
    {
      icon: <Clock size={32} className="text-yellow-600" />,
      title: 'Análise de Requisitos',
      description:
        'Avaliamos gratuitamente se você preenche os requisitos de renda e deficiência/idade para receber o benefício.',
    },
    {
      icon: <HeartHandshake size={32} className="text-yellow-600" />,
      title: 'Acompanhamento Integral',
      description:
        'Do início ao fim, você será informado sobre cada movimentação do seu processo, com total transparência.',
    },
  ]

  return (
    <section id="servicos" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
            Nossas Soluções
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Como podemos ajudar você?
          </h3>
          <p className="text-gray-400 text-lg">
            Atuação especializada para desburocratizar o acesso ao seu benefício e reverter
            injustiças cometidas pelo INSS.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-black border-gray-800 hover:border-yellow-600/50 transition-colors duration-300 rounded-none"
            >
              <CardContent className="pt-8 px-6 pb-8">
                <div className="mb-6 bg-zinc-900 w-16 h-16 flex items-center justify-center rounded-full border border-gray-800">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
