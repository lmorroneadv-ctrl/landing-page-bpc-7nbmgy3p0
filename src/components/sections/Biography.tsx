import { Check } from 'lucide-react'
import perfilUrl from '../../assets/perfil-20-6d6d4.png'

export function Biography() {
  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-5/12">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gold rounded-xl rotate-3 scale-105 opacity-20"></div>
              <img
                src={perfilUrl}
                alt="Advogado Previdenciário Lucas Morrone Costa especialista em INSS"
                className="relative z-10 w-full h-auto rounded-xl border-2 border-gold object-cover shadow-xl"
              />
            </div>
          </div>

          <div className="w-full lg:w-7/12">
            <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 text-gold-dark text-sm font-semibold rounded-full mb-6">
              OAB/RS 107485
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Lucas Morrone Costa
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground font-medium mb-8">
              <p>
                Sou o advogado Lucas Morrone Costa, especialista em Direito Previdenciário. Atendo
                presencialmente e online, oferecendo análise técnica precisa e orientação
                personalizada para cada cliente.
              </p>
              <p>
                Meu objetivo é proporcionar segurança jurídica, garantindo que todos os direitos dos
                segurados sejam rigorosamente respeitados pelo INSS, com total transparência em cada
                etapa do processo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                'Atendimento Especializado',
                'Análise Técnica Aprofundada',
                'Atuação Ética e Transparente',
                'Foco no Direito do Segurado',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <Check className="h-3.5 w-3.5 text-gold-dark" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border-l-4 border-gold p-6 rounded-r-lg shadow-soft">
              <h4 className="text-gold-dark font-semibold mb-2 text-sm uppercase tracking-wider">
                Nota Importante
              </h4>
              <p className="text-sm text-muted-foreground font-medium italic leading-relaxed">
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
