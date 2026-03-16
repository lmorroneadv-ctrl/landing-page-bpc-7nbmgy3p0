import { Users, UserPlus, Calculator, Scale, HeartPulse } from 'lucide-react'

export default function BpcEligibility() {
  return (
    <section className="py-24 bg-[#111111] border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Quem tem <span className="text-gold">Direito ao BPC?</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            O benefício é exclusivamente destinado a dois grupos que comprovem estado de necessidade
            econômica e social.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Idosos */}
          <div className="bg-[#1A1A1A] rounded-3xl border border-border overflow-hidden group hover:border-gold/30 transition-colors break-inside-avoid flex flex-col shadow-2xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://img.usecurling.com/p/800/500?q=elderly%20smiling&color=black"
                alt="Idosos"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="bg-gold p-3 rounded-xl text-[#111111] shadow-lg">
                  <UserPlus className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white shadow-sm">Idosos (65+ anos)</h3>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Destinado a idosos que não possuem meios de prover a própria subsistência nem de
                tê-la provida por sua família.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Válido para homens e mulheres a partir de <strong>65 anos completos</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>Não exige nenhuma contribuição prévia ao INSS.</span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Processo mais ágil: <strong>não passa por perícia médica</strong> no INSS.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* PcD */}
          <div className="bg-[#1A1A1A] rounded-3xl border border-border overflow-hidden group hover:border-gold/30 transition-colors break-inside-avoid flex flex-col shadow-2xl">
            <div className="h-64 overflow-hidden relative">
              <img
                src="https://img.usecurling.com/p/800/500?q=wheelchair%20accessibility&color=black"
                alt="Pessoa com Deficiência"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent"></div>
              <div className="absolute bottom-6 left-8 flex items-center gap-4">
                <div className="bg-gold p-3 rounded-xl text-[#111111] shadow-lg">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white shadow-sm">Pessoas com Deficiência</h3>
              </div>
            </div>
            <div className="p-8 md:p-10 flex-grow">
              <p className="text-foreground/80 text-lg leading-relaxed mb-8">
                Para pessoas com impedimentos de longo prazo (físico, mental, intelectual ou
                sensorial) de pelo menos 2 anos.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Pode ser criança, adolescente, adulto ou idoso. <strong>Qualquer idade.</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0"></div>
                  <span>
                    Exige <strong>avaliação biopsicossocial</strong> (perícia médica e social
                    rigorosa).
                  </span>
                </li>
                <li className="flex items-start gap-3 text-foreground/80">
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
        <div className="mb-16 bg-[#1A1A1A] rounded-3xl p-8 md:p-12 border border-border break-inside-avoid shadow-2xl">
          <div className="flex items-center gap-6 mb-10 justify-center">
            <div className="h-px bg-border flex-grow hidden md:block"></div>
            <Scale className="w-10 h-10 text-gold shrink-0" />
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center shrink-0">
              Requisitos Legais Cumulativos
            </h3>
            <div className="h-px bg-border flex-grow hidden md:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111111] p-6 rounded-2xl border border-border/50 text-center hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold font-black text-xl">
                1
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Nacionalidade</h4>
              <p className="text-sm text-foreground/70">
                Brasileiro nato, naturalizado ou português regular.
              </p>
            </div>
            <div className="bg-[#111111] p-6 rounded-2xl border border-border/50 text-center hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold font-black text-xl">
                2
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Condição</h4>
              <p className="text-sm text-foreground/70">
                Idade 65+ anos ou impedimento de longo prazo (PcD).
              </p>
            </div>
            <div className="bg-[#111111] p-6 rounded-2xl border border-border/50 text-center hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold font-black text-xl">
                3
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Renda</h4>
              <p className="text-sm text-foreground/70">
                Critério de miserabilidade no CadÚnico atualizado.
              </p>
            </div>
            <div className="bg-[#111111] p-6 rounded-2xl border border-border/50 text-center hover:border-gold/30 transition-colors">
              <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-4 text-gold font-black text-xl">
                4
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Não Acúmulo</h4>
              <p className="text-sm text-foreground/70">
                Não receber outro benefício da seguridade social.
              </p>
            </div>
          </div>
        </div>

        {/* Income Criteria */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] rounded-3xl border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.1)] relative overflow-hidden break-inside-avoid flex flex-col md:flex-row">
          <div className="md:w-5/12 relative min-h-[300px]">
            <img
              src="https://img.usecurling.com/p/600/800?q=calculator%20documents&color=black"
              alt="Cálculo de Renda"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#111111]/50 to-[#111111] md:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent md:hidden block"></div>
          </div>
          <div className="md:w-7/12 p-8 md:p-12 relative z-10 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-6 w-fit">
              <Calculator className="w-5 h-5" /> Critério de Renda 2026
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Renda familiar per capita de até <br className="hidden lg:block" />
              <span className="text-gold border-b-2 border-gold/50 pb-1 mt-2 inline-block">
                R$ 379,50
              </span>
            </h3>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Isso corresponde a exatos ¼ (um quarto) do salário mínimo estipulado para o cálculo no
              ano de 2026. Todas as pessoas que moram sob o mesmo teto entram no cálculo da renda do
              grupo familiar.
            </p>

            <div className="bg-[#151515] p-6 rounded-2xl border-l-4 border-red-600 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <HeartPulse className="w-6 h-6 text-red-500" />
                <h4 className="text-white font-bold text-lg">
                  Exceção Legal: STF RE 567.985/MT (Tema 27)
                </h4>
              </div>
              <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                A regra de ¼ do salário mínimo <strong>não é absoluta!</strong> O Supremo Tribunal
                Federal (STF) permite deduzir da renda familiar os gastos comprovados com a saúde do
                requerente (medicamentos, fraldas, alimentação especial, consultas) que não são
                fornecidos gratuitamente pelo SUS. Isso garante o benefício mesmo se a renda nominal
                ultrapassar o limite padrão de R$ 379,50.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
