import { Check } from 'lucide-react'
import perfilUrl from '../../assets/perfil-20-6d6d4.png'

export default function Biography() {
  return (
    <section id="quem-sou" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-4 bg-gold rounded-xl rotate-3 scale-105 opacity-10 blur-lg"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 to-transparent rounded-xl rotate-2"></div>
              <img
                src={perfilUrl}
                alt="Lucas Morrone Costa"
                className="relative z-10 w-full h-auto rounded-xl border border-border/50 object-cover shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-block px-4 py-1.5 bg-secondary border border-border/50 text-gold text-sm font-medium rounded-full mb-8 tracking-wide">
              OAB/RS 107485
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white font-serif">
              Lucas Morrone Costa
            </h2>

            <div className="space-y-5 text-lg text-foreground/80 mb-10 font-light leading-relaxed">
              <p>
                Sou o advogado Lucas Morrone Costa, especialista em Direito Previdenciário. Atendo
                presencialmente e online, oferecendo análise técnica precisa e orientação
                personalizada para cada cliente.
              </p>
              <p>
                Meu objetivo é proporcionar segurança jurídica, garantindo que todos os direitos dos
                segurados sejam rigorosamente respeitados pelo INSS, com total transparência e
                excelência em cada etapa do processo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {[
                'Atendimento Especializado',
                'Análise Técnica Aprofundada',
                'Atuação Ética e Transparente',
                'Foco no Direito do Segurado',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded bg-gold/10 border border-gold/20 flex items-center justify-center mr-4">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="text-foreground/90 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border-l-4 border-gold p-6 rounded-r-lg shadow-sm">
              <h4 className="text-gold font-semibold mb-2 text-xs uppercase tracking-widest">
                Nota Importante
              </h4>
              <p className="text-sm text-foreground/60 italic leading-relaxed">
                Até 2023 utilizei o nome Lucas Moran Costa. A atualização para Lucas Morrone Costa
                já está presente em todos os meus registros oficiais. Documentos ou referências
                anteriores em nome de Lucas Moran Costa correspondem ao mesmo profissional, inscrito
                na OAB/RS 107485.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
