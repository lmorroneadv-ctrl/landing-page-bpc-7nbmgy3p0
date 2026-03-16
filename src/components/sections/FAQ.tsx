import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'O que é o BPC/LOAS e quem tem direito?',
    answer:
      'O BPC (Benefício de Prestação Continuada) é um benefício no valor de um salário mínimo mensal pago pelo INSS. Têm direito idosos com 65 anos ou mais e pessoas de qualquer idade com deficiência (física, mental, intelectual ou sensorial) de longo prazo, que comprovem não possuir meios de se sustentar ou ser sustentado pela família (baixa renda).',
  },
  {
    question: 'Preciso ter contribuído para o INSS para receber o BPC?',
    answer:
      'Não. Diferente da aposentadoria, o BPC é um benefício assistencial e não exige que a pessoa tenha contribuído para o INSS. O principal requisito é a comprovação da idade/deficiência e da condição de vulnerabilidade social (baixa renda).',
  },
  {
    question: 'O INSS negou meu pedido. O que devo fazer?',
    answer:
      'A negativa do INSS é muito comum, muitas vezes por erros de análise ou exigências descabidas. Se o seu pedido foi negado, o ideal é procurar um advogado especialista imediatamente para ingressar com uma ação judicial. Na justiça, a análise é feita de forma mais detalhada e justa.',
  },
  {
    question: 'Vocês atendem clientes de outros estados?',
    answer:
      'Sim! Hoje o processo judicial e administrativo previdenciário é 100% digital. Isso nos permite representar clientes em qualquer lugar do Brasil com a mesma eficiência e proximidade, mantendo contato constante através de WhatsApp e reuniões por vídeo.',
  },
  {
    question: 'Quanto custa para contratar o escritório?',
    answer:
      'Trabalhamos na modalidade de risco. Isso significa que fazemos a análise inicial do seu caso gratuitamente. Se assumirmos a causa, nossos honorários só serão cobrados no final, apenas se ganharmos o processo. Você não precisa tirar dinheiro do bolso para iniciar a ação.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background border-t border-border">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">
            Dúvidas Frequentes
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
            Esclarecimentos Jurídicos
          </h3>
          <p className="text-lg text-muted-foreground font-light">
            Respostas diretas para as principais dúvidas sobre seus direitos previdenciários.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-border bg-card px-6 rounded-lg"
            >
              <AccordionTrigger className="text-left text-lg font-medium text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
