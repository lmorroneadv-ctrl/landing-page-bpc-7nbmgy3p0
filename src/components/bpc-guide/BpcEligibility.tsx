import { Users, UserPlus, Calculator, Scale, HeartPulse } from 'lucide-react'

export default function BpcEligibility() {
  return (
    <section className="py-20 bg-[#111111] border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 break-inside-avoid">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Quem tem <span className="text-gold">Direito?</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            O BPC é destinado a dois grupos específicos que cumpram o requisito de renda mínima.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Idosos */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-border relative overflow-hidden group hover:border-gold/30 transition-colors break-inside-avoid">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:bg-gold/10 transition-colors"></div>
            <UserPlus className="w-12 h-12 text-gold mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Idosos com 65 anos ou mais</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Destinado a idosos que não possuem meios de prover a própria subsistência nem de tê-la
              provida por sua família.
            </p>
            <ul className="list-disc list-inside text-foreground/70 space-y-2">
              <li>Para homens e mulheres.</li>
              <li>Não exige contribuição prévia.</li>
              <li>Não passa por perícia médica do INSS.</li>
            </ul>
          </div>

          {/* PcD */}
          <div className="bg-[#1A1A1A] rounded-2xl p-8 border border-border relative overflow-hidden group hover:border-gold/30 transition-colors break-inside-avoid">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10 group-hover:bg-gold/10 transition-colors"></div>
            <Users className="w-12 h-12 text-gold mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Pessoas com Deficiência (PcD)</h3>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Para pessoas de qualquer idade com impedimentos de longo prazo (físico, mental,
              intelectual ou sensorial) de <strong>pelo menos 2 anos</strong>.
            </p>
            <div className="mb-4 text-sm text-foreground/80 bg-[#111111] p-3 rounded-lg border border-border/50">
              <strong className="text-gold block mb-1">
                Modelo Social da Deficiência (Exemplos):
              </strong>
              Transtorno do Espectro Autista (TEA), Síndrome de Down, Esquizofrenia, Visão
              Monocular, Doenças graves com sequelas incapacitantes, entre outros.
            </div>
            <ul className="list-disc list-inside text-foreground/70 space-y-2 text-sm">
              <li>Pode ser criança, adulto ou idoso.</li>
              <li>Exige avaliação biopsicossocial (perícia médica e social).</li>
              <li>Impedimentos que obstruam a participação plena na sociedade.</li>
            </ul>
          </div>
        </div>

        {/* Legal Requirements */}
        <div className="mb-12 bg-[#1A1A1A] rounded-2xl p-8 border border-border break-inside-avoid">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-gold" />
            <h3 className="text-2xl font-bold text-white">Requisitos Legais Cumulativos</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-[#111111] p-4 rounded-xl border border-border/50">
              <h4 className="text-gold font-bold mb-2">1. Nacionalidade</h4>
              <p className="text-sm text-foreground/70">
                Brasileiro nato, naturalizado ou português com residência regular.
              </p>
            </div>
            <div className="bg-[#111111] p-4 rounded-xl border border-border/50">
              <h4 className="text-gold font-bold mb-2">2. Condição</h4>
              <p className="text-sm text-foreground/70">
                Idade de 65+ anos ou impedimento de longo prazo (PcD).
              </p>
            </div>
            <div className="bg-[#111111] p-4 rounded-xl border border-border/50">
              <h4 className="text-gold font-bold mb-2">3. Renda</h4>
              <p className="text-sm text-foreground/70">
                Critério socioeconômico de miserabilidade familiar.
              </p>
            </div>
            <div className="bg-[#111111] p-4 rounded-xl border border-border/50">
              <h4 className="text-gold font-bold mb-2">4. Não Acúmulo</h4>
              <p className="text-sm text-foreground/70">
                Não receber outro benefício da seguridade social.
              </p>
            </div>
          </div>
        </div>

        {/* Income Criteria */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#151515] rounded-2xl p-8 md:p-12 border border-gold/20 shadow-lg relative overflow-hidden break-inside-avoid">
          <div className="absolute -right-10 -bottom-10 opacity-5">
            <Calculator className="w-64 h-64 text-gold" />
          </div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-6">
              <Calculator className="w-4 h-4" /> Critério de Renda
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight">
              Renda familiar per capita de até <span className="text-gold">R$ 379,50</span>
            </h3>
            <p className="text-lg text-foreground/80 mb-8">
              Isso corresponde a exatos ¼ (um quarto) do salário mínimo estipulado para esse cálculo
              no ano de 2026. Todas as pessoas que moram na mesma casa entram no cálculo da renda.
            </p>

            <div className="bg-[#111111] p-6 rounded-xl border border-border/50 mb-6">
              <h4 className="text-gold font-semibold mb-3">Exemplo Prático de Cálculo:</h4>
              <p className="text-foreground/90 font-medium text-lg leading-relaxed">
                Família com 4 membros e renda total de R$ 1.500,00:
                <br />
                <span className="text-2xl font-bold text-white mt-2 inline-block">
                  R$ 1.500,00 ÷ 4 = R$ 375,00
                </span>
              </p>
              <p className="text-green-400 mt-2 font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400"></span> Como R$ 375,00 é menor
                que R$ 379,50, a família cumpre o requisito de renda.
              </p>
            </div>

            <div className="bg-[#111111] p-6 rounded-xl border border-red-900/30 relative">
              <HeartPulse className="absolute top-4 right-4 w-6 h-6 text-red-500/50" />
              <h4 className="text-gold font-semibold mb-2">
                Exceção do STF (Tema 27 / RE 567.985):
              </h4>
              <p className="text-foreground/80 text-sm leading-relaxed">
                A regra de ¼ do salário mínimo não é absoluta! A Justiça permite deduzir da renda
                familiar os gastos comprovados com a saúde do requerente (medicamentos, fraldas,
                alimentação especial, consultas) que não são fornecidos gratuitamente pelo SUS. Isso
                pode garantir o benefício mesmo se a renda nominal for um pouco maior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
