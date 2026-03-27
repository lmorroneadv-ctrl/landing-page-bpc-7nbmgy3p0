import { Check, FileText, Smartphone, UserCheck, Activity, Scale, ArrowRight } from 'lucide-react'

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

const docFamilia = [
  'Documento de identidade (RG, CNH)',
  'CPF de todos da residência',
  'Comprovante de residência atual',
  'Comprovante do CadÚnico',
  'Certidão de nascimento/casamento',
  'Carteira de Trabalho (mesmo sem registro)',
]

const docPcd = [
  'Laudos médicos atualizados (com CID legível e histórico)',
  'Exames médicos comprovando a deficiência ou doença grave',
  'Receituários de medicamentos de uso contínuo',
  'Comprovantes de gastos não cobertos pelo SUS (conforme Tema 27 STF)',
]

export default function BpcProcess() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            Passo a Passo da <span className="text-amber-600">Solicitação</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            O processo exige organização e atenção aos detalhes. Veja como funciona a jornada
            completa até a aprovação do seu benefício assistencial.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Steps */}
          <div className="w-full lg:w-5/12 break-inside-avoid pt-4">
            <div className="space-y-10 relative">
              <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-slate-200 z-0 hidden sm:block"></div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative z-10 flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-slate-200 group-hover:border-amber-400 group-hover:bg-amber-50 flex items-center justify-center shrink-0 transition-all duration-300 text-slate-500 group-hover:text-amber-600 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                      {idx + 1}. {step.title}
                    </h4>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="w-full lg:w-7/12">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-xl sticky top-28 break-inside-avoid">
              <div className="h-48 w-full relative">
                <img
                  src="https://img.usecurling.com/p/800/400?q=lawyer%20desk%20documents&color=white"
                  alt="Documentos Legais"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent"></div>
                <div className="absolute bottom-6 left-8 flex items-center gap-4">
                  <div className="bg-white p-3 rounded-xl border border-amber-200 shadow-sm">
                    <FileText className="text-amber-600 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 shadow-sm">
                    Documentação Necessária
                  </h3>
                </div>
              </div>

              <div className="p-8 md:p-10 space-y-10">
                <div>
                  <h4 className="text-lg font-bold text-amber-700 mb-5 border-b border-slate-200 pb-3 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> Requerente e Família
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {docFamilia.map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700 text-sm font-semibold"
                      >
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-amber-700 mb-5 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> Documentos Específicos para PcD
                  </h4>
                  <ul className="space-y-4">
                    {docPcd.map((doc, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-slate-700 text-sm md:text-base font-semibold"
                      >
                        <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
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
