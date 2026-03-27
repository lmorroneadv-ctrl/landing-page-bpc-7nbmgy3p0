import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'

const faqs = [
  {
    q: 'Posso trabalhar enquanto recebo BPC?',
    a: 'Regra geral não, o benefício é suspenso se o titular começar a trabalhar com carteira assinada. A exceção é o contrato de aprendizagem (jovem aprendiz). Para PcD, existe também a possibilidade do Auxílio-Inclusão caso consiga emprego.',
  },
  {
    q: 'O BPC pode ser transformado em aposentadoria?',
    a: 'Apenas se houver contribuições posteriores. O BPC não se transforma automaticamente em aposentadoria, pois não exige contribuição prévia. Se você passar a contribuir como segurado facultativo, poderá solicitar a conversão futura.',
  },
  {
    q: 'Crianças podem receber BPC?',
    a: 'Sim, se PcD. Crianças e adolescentes com deficiência ou doença grave têm direito ao BPC/LOAS, desde que a família cumpra o requisito de renda mínima e o impacto da deficiência seja comprovado.',
  },
  {
    q: 'O que fazer se o pedido for negado?',
    a: 'Você pode entrar com recurso administrativo no próprio INSS ou ingressar com uma ação judicial. A via judicial, com o auxílio de um advogado especialista, costuma ser mais rápida e efetiva para reverter negativas injustas.',
  },
  {
    q: 'O benefício precisa ser renovado?',
    a: 'Sim, o BPC passa por revisão a cada 2 anos. É obrigatório manter o CadÚnico atualizado e, no caso da pessoa com deficiência, pode ser necessária uma nova perícia médica para comprovar a continuidade do impedimento.',
  },
  {
    q: 'O BPC permite consignado?',
    a: 'Sim, limite de 35%. A legislação vigente permite que beneficiários do BPC/LOAS realizem empréstimos consignados, limitando o desconto direto no benefício para proteger a renda mínima de sobrevivência.',
  },
]

export default function BpcFAQ() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-5/12 break-inside-avoid">
            <div className="sticky top-28">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 border border-amber-200 shadow-sm">
                <HelpCircle className="h-8 w-8 text-amber-700" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
                Perguntas <span className="text-amber-600">Frequentes</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                Esclareça rapidamente suas dúvidas sobre as regras aplicáveis em 2026.
              </p>

              <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-md">
                <div className="h-32 w-full mb-6 rounded-xl overflow-hidden relative">
                  <img
                    src="https://img.usecurling.com/p/600/300?q=consultation%20lawyer&color=white"
                    alt="Atendimento Especializado"
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-slate-900 font-bold mb-3 text-xl">Dúvidas Específicas?</h4>
                <p className="text-sm text-slate-600 mb-8 leading-relaxed font-medium">
                  A avaliação técnica do seu caso pode identificar direitos que muitas vezes são
                  negados injustamente pelo INSS. Fale conosco pelo WhatsApp{' '}
                  <strong className="text-slate-800">55 53 981063023</strong>.
                </p>
                <Button
                  className="w-full bg-amber-600 text-white hover:bg-amber-700 font-bold h-14 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://wa.me/5553981063023?text=Olá,%20li%20o%20guia%20do%20BPC%20e%20gostaria%20de%20uma%20análise%20do%20meu%20caso."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneCall className="mr-2 h-5 w-5" /> Falar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 pt-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="faq-0"
              className="w-full space-y-4 md:space-y-6"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-white border border-slate-200 rounded-2xl px-6 md:px-8 data-[state=open]:border-amber-400 transition-colors break-inside-avoid shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-slate-900 hover:text-amber-700 hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed text-base pb-8 pt-2 block border-t border-slate-100 mt-2 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
