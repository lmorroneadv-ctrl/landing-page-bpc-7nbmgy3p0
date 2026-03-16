import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

const faqData = [
  {
    question: 'Quais são os custos iniciais para contratar o escritório?',
    answer:
      'Trabalhamos no formato "Ad Exitum" (honorários no êxito). Isso significa que não cobramos valores iniciais para estruturar ou ingressar com o seu pedido. A remuneração do escritório ocorre apenas ao final, caso o benefício seja concedido.',
  },
  {
    question: 'Quanto tempo demora para a liberação do BPC?',
    answer:
      'O prazo varia consideravelmente. Administrativamente no INSS, a análise pode levar alguns meses. Caso seja necessário recorrer à via judicial, o tempo médio é maior. Importante ressaltar que, em concessões judiciais, o beneficiário tem direito ao recebimento dos valores retroativos (atrasados) desde a data do requerimento inicial.',
  },
  {
    question: 'Meu pedido já foi negado pelo INSS. Ainda posso tentar?',
    answer:
      'Sim. O indeferimento administrativo é comum e não encerra as possibilidades. Mediante análise detalhada do motivo da recusa, nosso escritório pode ingressar com recursos internos ou ação judicial competente, onde o caso será avaliado por um perito isento designado pelo juízo.',
  },
  {
    question: 'Como funciona o atendimento se eu morar em outra cidade?',
    answer:
      'Nosso atendimento é realizado de forma 100% digital, garantindo conforto e segurança. Reuniões, envio de documentos e acompanhamentos são feitos através do WhatsApp, e-mail e chamadas de vídeo, sem a necessidade de deslocamento físico ao escritório.',
  },
  {
    question: 'Como é feito o pagamento dos honorários no final?',
    answer:
      'Quando o benefício é concedido e os valores retroativos são liberados pela Justiça ou pelo INSS, os honorários contratuais pactuados (um percentual sobre este proveito econômico) são descontados e repassados ao escritório, de forma transparente e documentada.',
  },
  {
    question: 'Vocês atendem em todo o Brasil?',
    answer:
      'Sim. Devido à digitalização dos processos do INSS (Meu INSS) e do sistema do Poder Judiciário (processo eletrônico), estamos habilitados e estruturados para representar clientes em todo o território nacional.',
  },
]

export function FAQ() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container max-w-4xl" ref={ref}>
        <div className={cn('text-center mb-12 invisible', isVisible && 'animate-fade-in-up')}>
          <h2 className="text-3xl font-serif font-bold mb-4">Dúvidas Frequentes</h2>
          <p className="text-muted-foreground">
            Esclarecimentos objetivos sobre nossa atuação e o processo de solicitação do benefício.
          </p>
        </div>

        <div
          className={cn('invisible', isVisible && 'animate-fade-in-up')}
          style={{ animationDelay: '200ms' }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card rounded-2xl border p-6 shadow-sm"
          >
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-border border-b last:border-0"
              >
                <AccordionTrigger className="text-left font-medium text-lg hover:text-primary transition-colors py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
