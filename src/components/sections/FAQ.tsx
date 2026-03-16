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
    question: 'Quais são os direitos de quem contribui para o INSS?',
    answer:
      'Quem contribui para o INSS possui a qualidade de segurado e tem direito a benefícios como auxílio-doença (benefício por incapacidade temporária), aposentadoria por invalidez, salário-maternidade, pensão por morte, entre outros previstos em lei, desde que cumpridos os requisitos específicos de carência e condição de cada benefício.',
  },
  {
    question: 'Como funciona a aposentadoria por idade?',
    answer:
      'A aposentadoria por idade é devida ao segurado que atingir a idade mínima estipulada pela legislação (atualmente 65 anos para homens e 62 para mulheres) e comprovar o tempo mínimo de contribuição exigido (carência).',
  },
  {
    question: 'O que fazer quando o INSS nega o benefício?',
    answer:
      'Diante de uma negativa do INSS, é possível apresentar um recurso administrativo no próprio órgão ou buscar a via judicial. A análise técnica por um advogado especializado é recomendada para identificar o motivo do indeferimento e a melhor estratégia a ser adotada.',
  },
  {
    question: 'Quem tem direito ao BPC/LOAS?',
    answer:
      'O BPC/LOAS é assistencial (não exige contribuição). É destinado a idosos com 65+ ou pessoas com deficiência que comprovem baixa renda e CadÚnico atualizado.',
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
            Esclarecimentos objetivos sobre benefícios assistenciais e previdenciários.
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
