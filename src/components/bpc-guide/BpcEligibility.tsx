import { Users, UserPlus, Calculator, Scale, HeartPulse } from 'lucide-react'

const requirements = [
  { id: 1, title: 'Nacionalidade', desc: 'Brasileiros ou estrangeiros residentes no Brasil.' },
  { id: 2, title: 'Condição', desc: 'Idade 65+ anos ou impedimento de longo prazo (PcD).' },
  { id: 3, title: 'Renda', desc: 'Critério de miserabilidade no CadÚnico atualizado.' },
  { id: 4, title: 'Não Acúmulo', desc: 'Não receber outro benefício da seguridade social.' },
]

export default function BpcEligibility() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            Quem tem <span className="text-gold">Direito ao BPC?</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            O benefício é exclusivamente destinado a dois grupos que comprovem estado de necessidade
            econômica e social.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Idosos */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden group hover:border-gold/50 transition-colors break-inside-avoid flex flex-col shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://img.usecurling.com/p/800/500?q=elderly%20smiling&color=white"
                alt="Idosos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="bg-gold/10 p-3 rounded-xl text-gold-dark shadow-sm border border-gold/30">
                  <UserPlus className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">Idosos (65+ anos)</h3>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                Destinado a idosos que não possuem meios de prover a própria subsistência nem de
                tê-la provida por sua família.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Válido para homens e mulheres a partir de{' '}
                    <strong className="text-slate-900">65 anos completos</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>Não exige nenhuma contribuição prévia ao INSS.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Processo documental:{' '}
                    <strong className="text-slate-900">não exige perícia médica</strong> no INSS
                    para o critério idade.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* PcD */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden group hover:border-gold/50 transition-colors break-inside-avoid flex flex-col shadow-xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://img.usecurling.com/p/800/500?q=wheelchair%20accessibility&color=white"
                alt="Pessoa com Deficiência"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="bg-gold/10 p-3 rounded-xl text-gold-dark shadow-sm border border-gold/30">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900">Pessoas com Deficiência</h3>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                Para pessoas com impedimentos de longo prazo (físico, mental, intelectual ou
                sensorial) de pelo menos 2 anos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Pode ser criança, adolescente, adulto ou idoso.{' '}
                    <strong className="text-slate-900">Qualquer idade.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Exige <strong className="text-slate-900">avaliação biopsicossocial</strong>{' '}
                    (perícia médica e avaliação social).
                  </span>
                </li>
                <li className="flex items-start gap-3 text-slate-700 font-medium">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Inclui Transtorno do Espectro Autista (TEA), visão monocular e doenças graves.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Requirements Horizontal */}
        <div className="mb-16 bg-white rounded-3xl p-8 md:p-12 border border-slate-200 break-inside-avoid shadow-lg">
          <div className="flex items-center gap-6 mb-10 justify-center">
            <div className="h-px bg-slate-200 flex-grow hidden md:block"></div>
            <Scale className="w-10 h-10 text-gold shrink-0" />
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center shrink-0">
              Requisitos Legais Cumulativos
            </h3>
            <div className="h-px bg-slate-200 flex-grow hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {requirements.map((req) => (
              <div
                key={req.id}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center hover:border-gold/50 transition-colors"
              >
                <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold-dark font-black text-xl">
                  {req.id}
                </div>
                <h4 className="text-slate-900 font-bold text-lg mb-2">{req.title}</h4>
                <p className="text-sm text-slate-600 font-medium">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Income Criteria */}
        <div className="bg-white rounded-3xl border border-gold/30 shadow-xl relative overflow-hidden break-inside-avoid flex flex-col md:flex-row">
          <div className="md:w-5/12 relative min-h-[300px]">
            <img
              src="https://img.usecurling.com/p/600/800?q=calculator%20documents&color=white"
              alt="Cálculo de Renda"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white md:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent md:hidden block"></div>
          </div>
          <div className="md:w-7/12 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-dark text-sm font-bold mb-6 w-fit shadow-sm">
              <Calculator className="w-5 h-5" /> Critério de Renda 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
              Renda familiar per capita de até <br className="hidden lg:block" />
              <span className="text-gold border-b-2 border-gold/50 pb-1 mt-2 inline-block">
                R$ 379,50
              </span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Isso corresponde a exatos ¼ (um quarto) do salário mínimo estipulado para o cálculo no
              ano de 2026. Todas as pessoas que moram sob o mesmo teto entram no cálculo da renda do
              grupo familiar.
            </p>

            <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-500 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <HeartPulse className="w-6 h-6 text-red-600" />
                <h4 className="text-red-900 font-bold text-lg">
                  Exceção Legal: STF RE 567.985/MT (Tema 27)
                </h4>
              </div>
              <p className="text-red-800/80 text-sm md:text-base leading-relaxed font-medium">
                A regra de ¼ do salário mínimo{' '}
                <strong className="text-red-900">não é absoluta!</strong> O Supremo Tribunal Federal
                (STF) permite deduzir da renda familiar os gastos comprovados com a saúde do
                requerente (medicamentos, fraldas, alimentação especial, consultas) que não são
                fornecidos pelo SUS. Isso garante o benefício mesmo se a renda nominal ultrapassar o
                limite padrão de R$ 379,50.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
