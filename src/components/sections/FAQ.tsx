import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Quais são os direitos básicos dos contribuintes do INSS?',
    answer:
      'Os segurados do INSS têm direito a diversos benefícios, dependendo dos requisitos preenchidos, tais como: Aposentadorias (por idade, tempo de contribuição, especial, invalidez), Auxílio-Doença, Salário-Maternidade, Pensão por Morte e Auxílio-Reclusão. A manutenção da qualidade de segurado é essencial para a concessão da maioria destes benefícios.',
  },
  {
    question: 'Como funciona a aposentadoria por idade atualmente?',
    answer:
      'Atualmente, a regra geral exige 65 anos de idade para homens e 62 anos para mulheres, além de um tempo mínimo de contribuição de 15 anos para mulheres e 20 anos para homens (ou 15 anos para homens que já contribuíam antes da Reforma de 2019). É fundamental analisar as regras de transição aplicáveis a cada caso.',
  },
  {
    question: 'Meu benefício foi negado pelo INSS. O que devo fazer?',
    answer:
      'A negativa administrativa (indeferimento) não é o fim da linha. É possível interpor um Recurso Administrativo no próprio INSS ou ingressar com uma Ação Judicial Federal. A escolha da melhor via depende da análise técnica dos motivos da negativa e da documentação disponível.',
  },
  {
    question: 'Quem tem direito ao BPC/LOAS?',
    answer:
      'Para ter direito ao BPC/LOAS, é necessário comprovar dois requisitos principais: 1) Ser idoso (65 anos ou mais) ou pessoa com deficiência (de qualquer idade) que apresente impedimentos de longo prazo; 2) Comprovar estado de vulnerabilidade socioeconômica, com renda familiar per capita igual ou inferior a 1/4 do salário mínimo. Não é exigido ter contribuído para o INSS.',
  },
  {
    question: 'Qual é o papel do advogado no processo previdenciário?',
    answer:
      'O advogado previdenciarista atua na organização documental, no cálculo do tempo de contribuição, na simulação de cenários de aposentadoria e na formulação correta dos pedidos. Sua atuação técnica visa evitar atrasos, prevenir negativas infundadas e garantir que o benefício seja concedido no melhor valor possível, respeitando o Código de Ética da OAB.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HelpCircle className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Dúvidas <span className="text-gold">Frequentes</span>
          </h2>
          <p className="text-foreground/90 text-lg font-medium">
            Respostas claras e diretas para as questões mais comuns sobre direito previdenciário.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-[#1A1A1A] border border-border rounded-lg px-6 data-[state=open]:border-gold/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold hover:no-underline py-4 text-white">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/90 font-medium leading-relaxed text-base pb-6 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
