import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, FileText, AlertCircle, Scale, Stethoscope } from 'lucide-react'

export default function AuxilioAcidenteGuide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-gold/30 pt-24">
      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/800?q=law%20office&color=black&dpr=2')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-6 text-sm font-bold uppercase tracking-widest">
              <Scale size={16} />
              <span>Guia Informativo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Auxílio-Acidente
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Informações técnicas e detalhadas sobre a natureza indenizatória do Auxílio-Acidente e
              seus requisitos legais.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Entenda o Benefício</h2>
              <p className="text-slate-600 font-medium">
                O Auxílio-Acidente possui caráter indenizatório e é devido ao segurado quando, após
                a consolidação das lesões decorrentes de acidente de qualquer natureza, resultarem
                sequelas que impliquem redução da capacidade para o trabalho que habitualmente
                exercia.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <FileText className="text-gold" size={24} />
                    <span>Requisitos e Elegibilidade</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p className="mb-4">
                    Para ter direito ao benefício, é necessário preencher os seguintes requisitos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ter qualidade de segurado no momento do acidente.</li>
                    <li>
                      Ter sofrido um acidente de qualquer natureza (não apenas acidentes de
                      trabalho).
                    </li>
                    <li>Redução parcial e definitiva da capacidade para o trabalho habitual.</li>
                    <li>Nexo causal entre o acidente e a redução da capacidade.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Stethoscope className="text-gold" size={24} />
                    <span>A Importância do Atestado Médico</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p>
                    A comprovação da sequela e da redução da capacidade laborativa é estritamente
                    técnica. A apresentação de um{' '}
                    <strong>atestado médico detalhado e atualizado</strong> é essencial para a
                    instrução processual e administrativa. O documento deve descrever com precisão
                    as limitações físicas ou mentais consolidadas após o acidente.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="text-gold" size={24} />
                    <span>Nova Portaria e Atualizações</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p>
                    A recente <strong>nova portaria</strong> estabelece diretrizes atualizadas para
                    a realização das perícias médicas no INSS. As inovações normativas podem
                    impactar os critérios de avaliação e os prazos de agendamento. É fundamental
                    contar com orientação jurídica especializada para compreender como as novas
                    regras se aplicam ao seu caso concreto.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center bg-white border border-slate-200 p-10 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Necessita de Orientação Técnica?
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium text-lg">
                A análise do seu caso demanda conhecimento especializado. Uma avaliação jurídica
                pode esclarecer seus direitos e a viabilidade do benefício.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black rounded-none px-8 py-6 uppercase tracking-wider font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    'https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20orientação%20sobre%20Auxílio-Acidente.',
                    '_blank',
                  )
                }
              >
                Falar com o Escritório
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
