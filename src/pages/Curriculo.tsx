import { ExternalLink, GraduationCap, Briefcase, Microscope, BookOpen, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function Curriculo() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-muted/30 py-12 md:py-20 border-b border-border">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-full border-4 border-gold/20 overflow-hidden bg-muted">
              <img
                src="https://img.usecurling.com/ppl/large?gender=male&seed=1"
                alt="Lucas Morrone Costa"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                Lucas Morrone Costa
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Possui graduação em Direito pela Universidade Federal do Rio Grande (2016). Tem
                experiência na área de Direito, com ênfase em Direito Previdenciário, atuando
                principalmente nos seguintes temas: direitos sociais, proibição do retrocesso social
                e direito à previdência.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold-dark hover:bg-gold hover:text-black font-semibold"
                >
                  <a
                    href="http://lattes.cnpq.br/6521759343883367"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Currículo Lattes
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gold text-gold-dark hover:bg-gold hover:text-black font-semibold"
                >
                  <a
                    href="https://orcid.org/0000-0001-9096-2614"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Perfil ORCID
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-6 max-w-4xl mt-12 space-y-16">
        {/* Formação Acadêmica */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-2 border-b border-border">
            <GraduationCap className="w-8 h-8 text-gold" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Formação Acadêmica
            </h2>
          </div>
          <div className="space-y-8 pl-2 md:pl-4">
            <div className="relative pl-6 border-l-2 border-gold/30">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold" />
              <span className="text-sm font-bold text-gold-dark bg-gold/10 px-2 py-1 rounded-md mb-2 inline-block">
                2021 - 2023
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Mestrado em Direito e Justiça Social
              </h3>
              <p className="text-lg text-muted-foreground font-medium mb-2">
                Universidade Federal do Rio Grande (FURG)
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Título:</span> A (in)justiça social
                presente nas Turmas Recursais do RS: uma análise dos julgados.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-gold/30">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold/50" />
              <span className="text-sm font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md mb-2 inline-block">
                2020
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Especialização em Advocacia Empresarial Previdenciária
              </h3>
              <p className="text-lg text-muted-foreground font-medium">EBRADI</p>
            </div>

            <div className="relative pl-6 border-l-2 border-gold/30">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold/50" />
              <span className="text-sm font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md mb-2 inline-block">
                2018 - 2020
              </span>
              <h3 className="text-xl font-bold text-foreground">
                Especialização em Advocacia Trabalhista e Previdenciária
              </h3>
              <p className="text-lg text-muted-foreground font-medium mb-2">
                Universidade de Santa Cruz do Sul (UNISC)
              </p>
              <p className="text-muted-foreground">
                <span className="font-semibold text-foreground">Título:</span> O BENEFÍCIO DE
                PRESTAÇÃO CONTINUADA: ALTERAÇÕES DA PEC 06 DE 2019 E A OFENSA AOS PRINCÍPIOS DA
                SOLIDARIEDADE E DA VEDAÇÃO AO RETROCESSO SOCIAL.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-gold/30">
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gold/50" />
              <span className="text-sm font-bold text-muted-foreground bg-muted px-2 py-1 rounded-md mb-2 inline-block">
                2012 - 2016
              </span>
              <h3 className="text-xl font-bold text-foreground">Graduação em Direito</h3>
              <p className="text-lg text-muted-foreground font-medium">
                Universidade Federal do Rio Grande (FURG)
              </p>
            </div>
          </div>
        </section>

        {/* Atuação Profissional */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-2 border-b border-border">
            <Briefcase className="w-8 h-8 text-gold" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Atuação Profissional
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gold-dark mb-2 block">2012 - 2016</span>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Universidade Federal do Rio Grande
              </h3>
              <p className="text-muted-foreground">FURG</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gold-dark mb-2 block">2015 - 2016</span>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-foreground">AGU</h3>
                <span className="text-xs font-semibold bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full border border-gold/20">
                  Estágio
                </span>
              </div>
              <p className="text-muted-foreground">Advocacia-Geral da União</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gold-dark mb-2 block">2012 - 2015</span>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-foreground">Justiça Federal de 1º Grau</h3>
                <span className="text-xs font-semibold bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full border border-gold/20">
                  Estágio
                </span>
              </div>
              <p className="text-muted-foreground">Rio Grande do Sul (RS)</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-bold text-gold-dark mb-2 block">2012 - 2013</span>
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-foreground">Tribunal de Justiça</h3>
                <span className="text-xs font-semibold bg-gold/10 text-gold-dark px-2 py-0.5 rounded-full border border-gold/20">
                  Estágio
                </span>
              </div>
              <p className="text-muted-foreground">Rio Grande do Sul (TJRS)</p>
            </div>
          </div>
        </section>

        {/* Pesquisa e Projetos */}
        <section>
          <div className="flex items-center gap-3 mb-8 pb-2 border-b border-border">
            <Microscope className="w-8 h-8 text-gold" />
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
              Pesquisa e Projetos
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-foreground">Grupo de Pesquisa: CIDIJUS</h3>
                <span className="text-sm font-bold text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                  2017 - Atual
                </span>
              </div>
              <p className="text-muted-foreground">CIDADANIA, DIREITOS E JUSTIÇA</p>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                <h3 className="text-lg font-bold text-foreground">Projeto de Pesquisa</h3>
                <span className="text-sm font-bold text-muted-foreground bg-background px-3 py-1 rounded-full border border-border">
                  2013 - 2014
                </span>
              </div>
              <p className="text-muted-foreground">
                Direito e Justiça Social: instrumentos jurídicos de proteção...
              </p>
            </div>
          </div>
        </section>

        {/* Produção e Eventos (Accordions) */}
        <section className="space-y-6">
          <Accordion
            type="single"
            collapsible
            className="w-full bg-card border border-border rounded-lg shadow-sm"
          >
            <AccordionItem value="producao" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-gold" />
                  <span className="text-xl font-bold uppercase tracking-wider text-left">
                    Produção Bibliográfica
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Artigo (2022):</span>{' '}
                      Datenismo penal e a licença para matar.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Artigo (2022):</span> O
                      Nefasto Requisito da Renda Per Capita...
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Artigo (2020):</span> Desafios
                      a segurança e a saúde em tempos de pandemia...
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Artigo (2019):</span> O
                      fenômeno da judicialização da política além do Brasil.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 shrink-0" />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Livro/Capítulo (2021):</span>{' '}
                      DOSSIÊ CIDIJUS PANDEMIA.
                    </p>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <Accordion
            type="single"
            collapsible
            className="w-full bg-card border border-border rounded-lg shadow-sm"
          >
            <AccordionItem value="eventos" className="border-none">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-muted/50 transition-colors rounded-lg">
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-gold" />
                  <span className="text-xl font-bold uppercase tracking-wider text-left">
                    Eventos e Apresentações
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 pt-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-3 text-lg">
                      Apresentações de Trabalho
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        Diversas apresentações realizadas entre 2021 e 2023.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-3 text-lg">
                      Participação em Eventos
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border">
                        IBDP
                      </span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border">
                        ESMAFE
                      </span>
                      <span className="px-3 py-1 bg-muted rounded-full text-sm font-medium border border-border">
                        OAB/RS
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  )
}
