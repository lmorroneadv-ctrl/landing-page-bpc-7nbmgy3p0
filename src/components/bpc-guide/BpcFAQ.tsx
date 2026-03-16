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
    q: 'Posso trabalhar e receber o BPC?',
    a: 'Em regra, quem recebe BPC não pode exercer atividade remunerada. Caso comece a trabalhar com carteira assinada, o benefício é suspenso, mas não cancelado. Para pessoas com deficiência, existe a possibilidade do Auxílio-Inclusão.',
  },
  {
    q: 'O BPC pode ser transformado em aposentadoria?',
    a: 'Não automaticamente. O BPC não é aposentadoria e não exige contribuição. Se você passar a contribuir para o INSS e atingir os requisitos de uma aposentadoria, poderá solicitar a troca para o benefício previdenciário (que costuma ser mais vantajoso por incluir 13º salário e pensão por morte).',
  },
  {
    q: 'Crianças têm direito ao BPC?',
    a: 'Sim. Crianças e adolescentes com deficiência (física, mental, intelectual ou sensorial) têm direito ao BPC/LOAS, desde que a renda familiar cumpra o requisito de até ¼ do salário mínimo por pessoa e a deficiência cause impacto no seu desenvolvimento e participação social.',
  },
  {
    q: 'O que fazer se o pedido for negado?',
    a: 'A negativa administrativa é muito comum. Você pode entrar com um recurso administrativo no próprio INSS em até 30 dias, ou, o que geralmente é mais eficaz, buscar a via judicial através de um advogado especialista para garantir o seu direito com análise de um juiz.',
  },
  {
    q: 'Preciso renovar o BPC?',
    a: 'Sim. É obrigatório manter o Cadastro Único (CadÚnico) atualizado no CRAS pelo menos a cada 2 anos. Além disso, o INSS pode convocar o beneficiário para revisões periódicas (o chamado "Pente-fino") para verificar se as condições de renda ou de deficiência ainda se mantêm.',
  },
  {
    q: 'Posso fazer empréstimo consignado com o BPC?',
    a: 'As regras sobre empréstimo consignado para beneficiários do BPC mudam com frequência. Devido a decisões judiciais recentes e mudanças legislativas, existem limitações rigorosas (ou até proibições temporárias) para a contratação de novos consignados, com o objetivo de proteger a renda mínima de sobrevivência do beneficiário. Consulte a regra exata vigente no momento.',
  },
]

export default function BpcFAQ() {
  return (
    <section className="py-20 bg-[#151515] border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28">
              <HelpCircle className="h-12 w-12 text-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Perguntas <span className="text-gold">Frequentes</span> Esclarecidas
              </h2>
              <p className="text-foreground/70 text-lg mb-8">
                Tire suas dúvidas sobre o Benefício de Prestação Continuada. Ainda tem questões?
                Fale diretamente conosco.
              </p>

              <div className="bg-[#111111] p-6 rounded-xl border border-border">
                <h4 className="text-white font-bold mb-2">Precisa de Análise do seu Caso?</h4>
                <p className="text-sm text-foreground/70 mb-4">
                  A avaliação técnica pode identificar direitos que muitas vezes são negados
                  injustamente pelo INSS.
                </p>
                <Button
                  className="w-full bg-gold text-[#111111] hover:bg-gold/90 font-bold"
                  asChild
                >
                  <a
                    href="https://wa.me/5553981063023?text=Olá,%20li%20o%20guia%20do%20BPC%20e%20gostaria%20de%20uma%20análise%20do%20meu%20caso."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PhoneCall className="mr-2 h-4 w-4" /> Contato pelo WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-[#1A1A1A] border border-border rounded-lg px-6 data-[state=open]:border-gold/50 transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-gold hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed text-base pb-6 pt-2">
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
