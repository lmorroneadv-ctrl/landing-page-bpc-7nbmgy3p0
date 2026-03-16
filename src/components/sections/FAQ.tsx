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
    question: 'Quanto custa para contratar os serviços?',
    answer:
      'Trabalhamos no formato "Ad Exitum" (no êxito). Isso significa que não cobramos nenhum valor inicial para analisar seu caso ou entrar com o pedido. Nossos honorários são pagos apenas se, e quando, você ganhar a causa, através de um percentual sobre os valores atrasados que você irá receber.',
  },
  {
    question: 'Quanto tempo demora para sair o BPC?',
    answer:
      'O tempo varia. Administrativamente no INSS, pode levar de 3 a 6 meses. Se precisarmos entrar na Justiça, o tempo médio é de 10 a 18 meses. Porém, quando o benefício é aprovado judicialmente, você recebe todo o valor retroativo desde o dia em que o pedido foi feito.',
  },
  {
    question: 'Moro em outra cidade/estado, vocês podem me atender?',
    answer:
      'Sim! Nosso escritório atua de forma 100% digital em todo o Brasil. As consultas são feitas por WhatsApp ou videochamada, e os processos hoje são inteiramente eletrônicos. Você não precisa se deslocar.',
  },
  {
    question: 'Meu filho tem autismo, ele tem direito?',
    answer:
      'Sim. O Transtorno do Espectro Autista (TEA) é considerado deficiência para todos os efeitos legais. Se o critério de renda familiar for preenchido (até 1/4 do salário mínimo por pessoa, podendo haver flexibilização na justiça), ele tem direito ao benefício.',
  },
  {
    question: 'Já tentei sozinho e foi negado, o que fazer?',
    answer:
      'Não se preocupe, é muito comum. Nesses casos, nós analisamos o motivo da negativa e entramos com um recurso ou ação judicial. Na justiça, o caso será avaliado por um perito isento do juiz, e não por um médico do INSS, o que aumenta muito as chances de aprovação.',
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
            Respostas claras e diretas para as principais perguntas de nossos clientes.
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
