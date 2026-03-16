import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

export function FAQ() {
  const faqs = [
    {
      question: 'O que é o BPC/LOAS?',
      answer:
        'O BPC (Benefício de Prestação Continuada) é um benefício no valor de um salário mínimo mensal pago pelo INSS a idosos acima de 65 anos ou pessoas com deficiência de qualquer idade, que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família.',
    },
    {
      question: 'Preciso ter contribuído para o INSS para receber?',
      answer:
        'Não. O BPC é um benefício assistencial, não previdenciário. Portanto, não é exigida nenhuma contribuição prévia ao INSS para ter direito a ele.',
    },
    {
      question: 'Qual o limite de renda para ter direito?',
      answer:
        'A regra geral exige que a renda por pessoa do grupo familiar seja igual ou menor que 1/4 do salário mínimo. No entanto, na Justiça, é possível flexibilizar esse critério caso sejam comprovados gastos elevados com medicamentos, fraldas, tratamentos, entre outros.',
    },
    {
      question: 'Quais doenças dão direito ao BPC?',
      answer:
        'O BPC não é concedido por uma doença específica, mas sim pela deficiência (física, mental, intelectual ou sensorial) que cause impedimentos de longo prazo (mínimo de 2 anos). Exemplos comuns incluem Autismo (TEA), Esquizofrenia, sequelas de AVC, deficiências graves e doenças incapacitantes.',
    },
    {
      question: 'Meu pedido foi negado. E agora?',
      answer:
        'Se o seu BPC foi negado (indeferido) pelo INSS, nós podemos analisar o motivo da negativa e entrar com uma ação judicial. Na Justiça, as avaliações médicas e sociais costumam ser mais justas e detalhadas do que no INSS.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5 flex flex-col items-start">
            <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
              Dúvidas Frequentes
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ainda tem dúvidas sobre o BPC?</h3>
            <p className="text-gray-400 text-lg mb-8">
              Reunimos as principais perguntas dos nossos clientes para ajudar você a entender
              melhor seus direitos. Se sua dúvida não estiver aqui, fale com a gente.
            </p>
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-none uppercase tracking-wider font-semibold"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Tirar Dúvida no WhatsApp
            </Button>
          </div>

          <div className="md:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-gray-800">
                  <AccordionTrigger className="text-left text-lg hover:text-yellow-500 transition-colors py-6 font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                    {faq.answer}
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
