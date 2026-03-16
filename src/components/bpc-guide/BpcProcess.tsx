import { Check, FileText, Smartphone, UserCheck, Activity, Search, Scale } from 'lucide-react'

export default function BpcProcess() {
  const steps = [
    {
      title: 'CadÚnico',
      desc: 'Inscreva-se ou atualize o Cadastro Único no CRAS da sua cidade.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: 'Meu INSS',
      desc: 'Acesse o site ou aplicativo "Meu INSS" com seu login Gov.br.',
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: 'Solicite',
      desc: 'Busque por "Benefício Assistencial" e siga as instruções na tela.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Perícia',
      desc: 'Para PcD, agende e compareça à perícia médica e social.',
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: 'Acompanhe',
      desc: 'Monitore o andamento do pedido através do aplicativo.',
      icon: <Search className="w-6 h-6" />,
    },
    {
      title: 'Decisão',
      desc: 'Aguarde a carta de concessão ou a decisão de indeferimento.',
      icon: <Scale className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-20 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Steps */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Passo a Passo da <span className="text-gold">Solicitação</span>
            </h2>
            <p className="text-foreground/70 text-lg mb-10">
              O processo pode ser feito totalmente online, mas exige atenção aos detalhes para
              evitar negativas.
            </p>

            <div className="space-y-8 relative">
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border z-0 hidden sm:block"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex items-start gap-6">
                  <div className="w-14 h-14 rounded-full bg-[#111111] border-2 border-gold flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(212,175,55,0.2)] text-gold">
                    {step.icon}
                  </div>
                  <div className="pt-3">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {idx + 1}. {step.title}
                    </h4>
                    <p className="text-foreground/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="w-full lg:w-1/2">
            <div className="bg-[#1A1A1A] border border-border rounded-2xl p-8 md:p-10 shadow-xl sticky top-28">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="text-gold" /> Documentação Necessária
              </h3>

              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gold mb-4 border-b border-border pb-2">
                    Para o Requerente e Grupo Familiar
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Documento de identidade (RG, CNH, etc.) e CPF',
                      'Comprovante de residência atualizado',
                      'Comprovante de inscrição no CadÚnico atualizado',
                      'Certidão de nascimento ou casamento',
                      'Carteira de Trabalho (mesmo que sem registro)',
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gold mb-4 border-b border-border pb-2">
                    Específicos para PcD
                  </h4>
                  <ul className="space-y-3">
                    {[
                      'Laudos médicos atualizados (com indicação do CID)',
                      'Exames médicos que comprovem a deficiência',
                      'Receituários de medicamentos contínuos',
                      'Relatórios de terapias ou tratamentos especializados',
                      'Comprovantes de gastos médicos (se houver)',
                    ].map((doc, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <Check className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
