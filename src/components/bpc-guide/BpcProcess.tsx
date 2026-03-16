import { Check, FileText, Smartphone, UserCheck, Activity, Scale, ArrowRight } from 'lucide-react'

export default function BpcProcess() {
  const steps = [
    {
      title: 'CadÚnico',
      desc: 'Inscreva-se ou atualize o Cadastro Único no CRAS da sua cidade. Este é o passo inicial e obrigatório.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      title: 'Meu INSS',
      desc: 'Acesse o portal "Meu INSS" pelo site ou aplicativo com seu login oficial Gov.br.',
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: 'Solicite Online',
      desc: 'Busque por "Benefício Assistencial", preencha os dados e anexe a documentação inicial.',
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: 'Perícia (Apenas PcD)',
      desc: 'Agende e compareça à perícia médica e avaliação social na agência do INSS.',
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: 'Decisão do INSS',
      desc: 'Aguarde a análise. O INSS possui o prazo legal de até 90 dias para concluir o pedido.',
      icon: <Scale className="w-6 h-6" />,
    },
  ]

  return (
    <section className="py-24 bg-[#151515]">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Passo a Passo da <span className="text-gold">Solicitação</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            O processo exige organização e atenção aos detalhes. Veja como funciona a jornada
            completa até a aprovação do seu benefício assistencial.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Steps */}
          <div className="w-full lg:w-5/12 break-inside-avoid pt-4">
            <div className="space-y-10 relative">
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-border z-0 hidden sm:block"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-[#111111] border-2 border-border group-hover:border-gold group-hover:bg-gold/5 flex items-center justify-center shrink-0 transition-all duration-300 text-foreground group-hover:text-gold shadow-sm group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                      {idx + 1}. {step.title}
                    </h4>
                    <p className="text-foreground/70 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="w-full lg:w-7/12">
            <div className="bg-[#1A1A1A] border border-border rounded-3xl overflow-hidden shadow-2xl sticky top-28 break-inside-avoid">
              <div className="h-48 w-full relative">
                <img
                  src="https://img.usecurling.com/p/800/400?q=lawyer%20desk%20documents&color=black"
                  alt="Documentos Legais"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent"></div>
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="bg-[#111111] p-3 rounded-xl border border-gold/30">
                    <FileText className="text-gold w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white shadow-sm">
                    Documentação Necessária
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-10">
                <div>
                  <h4 className="text-lg font-bold text-gold mb-5 border-b border-border/50 pb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> Requerente e Família
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Documento de identidade (RG, CNH)',
                      'CPF de todos da residência',
                      'Comprovante de residência atual',
                      'Comprovante do CadÚnico',
                      'Certidão de nascimento/casamento',
                      'Carteira de Trabalho (mesmo sem registro)',
                    ].map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground/80 text-sm font-medium"
                      >
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-[#111111] p-6 md:p-8 rounded-2xl border border-border/50 shadow-inner">
                  <h4 className="text-lg font-bold text-gold mb-5 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> Documentos Específicos para PcD
                  </h4>
                  <ul className="space-y-4">
                    {[
                      'Laudos médicos atualizados (com CID legível e histórico)',
                      'Exames médicos comprovando a deficiência ou doença grave',
                      'Receituários de medicamentos de uso contínuo',
                      'Comprovantes de gastos não cobertos pelo SUS (conforme Tema 27 STF)',
                    ].map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-foreground/80 text-sm md:text-base font-medium"
                      >
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
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
