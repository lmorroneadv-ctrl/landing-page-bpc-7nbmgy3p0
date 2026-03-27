import { BookOpen, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

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

export function Blog() {
  return (
    <section id="blog" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <BookOpen className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Artigos Úteis & <span className="text-gold-dark">Blog</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Informações técnicas e atualizadas para ajudar você a entender melhor seus direitos
            previdenciários.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border-border hover:border-gold/50 shadow-sm transition-colors bg-card"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground line-clamp-2 leading-tight">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between pt-0">
                <p className="text-muted-foreground text-sm font-medium line-clamp-4 mb-6 leading-relaxed">
                  {article.content}
                </p>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full text-gold-dark border-gold-dark/30 hover:bg-gold hover:text-black font-semibold group mt-auto"
                    >
                      Ler mais
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-2xl bg-card border-gold/20">
                    <DialogHeader>
                      <DialogTitle className="text-2xl text-foreground leading-snug pr-6">
                        {article.title}
                      </DialogTitle>
                      <DialogDescription className="sr-only">
                        Leia o artigo completo sobre {article.title}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 text-muted-foreground font-medium leading-relaxed text-base bg-muted/30 p-4 rounded-lg">
                      {article.content}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
