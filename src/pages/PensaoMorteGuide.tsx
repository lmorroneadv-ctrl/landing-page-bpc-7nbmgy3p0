import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, Users, Clock, ShieldCheck, Scale } from 'lucide-react'

export default function PensaoMorteGuide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="bg-slate-50 text-slate-900 font-sans selection:bg-gold/30 pt-24">
      <main>
        {/* Hero Section */}
        <section className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1200/800?q=courthouse&color=black&dpr=2')] bg-cover bg-center opacity-20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/20 text-gold border border-gold/30 mb-6 text-sm font-bold uppercase tracking-widest">
              <Scale size={16} />
              <span>Guia Informativo</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              Pensão por Morte
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium">
              Entenda as diretrizes e os requisitos legais para a concessão do benefício aos
              dependentes do segurado.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Sobre o Benefício</h2>
              <p className="text-slate-600 font-medium">
                A Pensão por Morte é um benefício previdenciário pago pelo INSS aos dependentes do
                segurado que falecer, seja ele aposentado ou não. Tem como objetivo garantir a
                segurança financeira da família após o óbito do provedor.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem
                value="item-1"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-gold" size={24} />
                    <span>Requisitos Fundamentais</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p className="mb-4">
                    A concessão da pensão por morte exige o preenchimento de três requisitos
                    básicos:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Ocorrência do óbito ou morte presumida do segurado.</li>
                    <li>
                      A qualidade de segurado do falecido no momento do óbito (estar contribuindo ou
                      em período de graça, ou já ser aposentado).
                    </li>
                    <li>A condição de dependente daquele que pleiteia o benefício.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Users className="text-gold" size={24} />
                    <span>Dependentes Legais</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p className="mb-4">
                    A lei previdenciária divide os dependentes em classes (a existência de
                    dependentes de uma classe exclui o direito dos das classes seguintes):
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Classe 1:</strong> Cônjuge, companheiro(a) e filhos não emancipados,
                      de qualquer condição, menores de 21 anos ou inválidos. (A dependência
                      econômica é presumida).
                    </li>
                    <li>
                      <strong>Classe 2:</strong> Pais do segurado falecido. (A dependência econômica
                      deve ser comprovada).
                    </li>
                    <li>
                      <strong>Classe 3:</strong> Irmãos não emancipados, menores de 21 anos ou
                      inválidos. (A dependência econômica deve ser comprovada).
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-slate-50 border border-slate-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-lg font-bold text-slate-900 hover:text-gold-dark hover:no-underline py-6">
                  <div className="flex items-center gap-3">
                    <Clock className="text-gold" size={24} />
                    <span>Duração do Benefício</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-base leading-relaxed pb-6">
                  <p>
                    A duração do benefício para o cônjuge ou companheiro(a) varia de acordo com a
                    idade do dependente na data do óbito e o tempo de casamento ou união estável
                    (exige-se mais de 2 anos de união e 18 contribuições para não ser de apenas 4
                    meses). Para filhos, o benefício cessa aos 21 anos, salvo em casos de invalidez.
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
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dúvidas sobre o Processo?</h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium text-lg">
                As regras de concessão e duração da Pensão por Morte passaram por diversas
                alterações legislativas. Consultar um especialista pode garantir o correto
                enquadramento legal.
              </p>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-black rounded-none px-8 py-6 uppercase tracking-wider font-bold shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    'https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20orientação%20sobre%20Pensão%20por%20Morte.',
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
