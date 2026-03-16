import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { BookOpen } from 'lucide-react'

const articles = [
  {
    title: 'Como aumentar suas chances no pedido do INSS',
    content:
      'O deferimento do seu benefício depende diretamente da qualidade da documentação apresentada e do correto preenchimento dos formulários. É fundamental manter o CNIS atualizado, reunir laudos médicos detalhados em caso de incapacidade, e contar com uma análise prévia para identificar possíveis inconsistências que possam levar à negativa do INSS.',
  },
  {
    title: 'Aposentadoria por Idade — O que mudou após a Reforma',
    content:
      'Com a Reforma da Previdência (EC 103/2019), a idade mínima para mulheres passou a ser de 62 anos, e para homens, manteve-se em 65 anos. O tempo mínimo de contribuição é de 15 anos para mulheres e 20 anos para homens que começaram a contribuir após a reforma. Existem regras de transição que devem ser cuidadosamente analisadas caso a caso.',
  },
  {
    title: 'BPC/LOAS — Quem tem direito e como solicitar',
    content:
      'O Benefício de Prestação Continuada (BPC) garante um salário mínimo mensal à pessoa com deficiência e ao idoso com 65 anos ou mais, que comprovem não possuir meios de prover a própria manutenção nem de tê-la provida por sua família (renda per capita inferior a 1/4 do salário mínimo). Não é necessário ter contribuído para o INSS.',
  },
  {
    title: 'Aposentadoria Especial — Informações úteis',
    content:
      'Destinada aos trabalhadores expostos a agentes nocivos à saúde (físicos, químicos ou biológicos). Após a Reforma, passou a exigir idade mínima (55, 58 ou 60 anos, dependendo do grau de risco) além do tempo de exposição. O Perfil Profissiográfico Previdenciário (PPP) é o documento essencial para comprovar a exposição.',
  },
  {
    title: 'BPC/LOAS para criança / adolescente com autismo',
    content:
      'Crianças e adolescentes diagnosticados com Transtorno do Espectro Autista (TEA) podem ter direito ao BPC/LOAS, desde que preenchidos os requisitos socioeconômicos (renda familiar). É imprescindível apresentar laudos médicos atualizados, relatórios escolares e terapêuticos que demonstrem as barreiras enfrentadas e a limitação na participação social.',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-card border-y border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
            <BookOpen className="h-8 w-8 text-gold" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
            Artigos Úteis & <span className="text-gold italic">Blog</span>
          </h2>
          <p className="text-foreground/70 text-lg font-light">
            Informações técnicas e atualizadas para ajudar você a entender melhor seus direitos
            previdenciários.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {articles.map((article, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary border border-border/50 rounded-lg px-6 data-[state=open]:border-gold/50 data-[state=open]:shadow-sm transition-all"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-gold hover:no-underline py-5 font-serif">
                  {article.title}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed text-base pb-6 pt-2 font-light">
                  {article.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
