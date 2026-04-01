import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Scale, Clock, ShieldAlert, HeartPulse } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function AposentadoriasGuide() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Voltar para a página inicial
        </Link>

        <div className="bg-card border border-border rounded-xl p-8 md:p-12 shadow-sm mb-12">
          <div className="inline-block bg-gold/10 text-gold-dark px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
            Direito Previdenciário
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
            Guia Completo de Aposentadorias
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Este material possui caráter estritamente informativo e técnico, elaborado para
            esclarecer as diferentes modalidades de aposentadoria no sistema previdenciário
            brasileiro, seus requisitos de elegibilidade e as regras de transição vigentes após a
            Emenda Constitucional nº 103/2019 (Reforma da Previdência).
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground border-b border-border pb-2">
            Modalidades e Requisitos Legais
          </h2>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-muted p-3 rounded-full shrink-0">
                    <Scale className="text-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Aposentadoria por Idade (Urbana e Rural)
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                <p className="mb-4">
                  A Aposentadoria por Idade é devida ao segurado que atinge a idade mínima exigida
                  por lei, cumprindo cumulativamente o período de carência.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Trabalhadores Urbanos:</strong> A regra
                    geral pós-reforma estabelece a idade mínima de 65 anos para homens e 62 anos
                    para mulheres. É exigido o tempo mínimo de contribuição de 15 anos (para
                    mulheres e homens filiados até 12/11/2019) ou 20 anos (para homens filiados após
                    a reforma).
                  </li>
                  <li>
                    <strong className="text-foreground">Trabalhadores Rurais:</strong> Mantém-se o
                    requisito etário reduzido: 60 anos para homens e 55 anos para mulheres,
                    comprovando o efetivo exercício de atividade rural por 15 anos (180 meses) de
                    carência.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-muted p-3 rounded-full shrink-0">
                    <Clock className="text-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Aposentadoria por Tempo de Contribuição (Regras de Transição)
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                <p className="mb-4">
                  A reforma extinguiu a modalidade pura de aposentadoria por tempo de contribuição,
                  instituindo Regras de Transição para os segurados filiados antes de 13/11/2019.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Pedágio de 50%:</strong> Aplicável a quem
                    estava a menos de 2 anos de se aposentar na data da reforma. Exige o cumprimento
                    de 50% do tempo que faltava.
                  </li>
                  <li>
                    <strong className="text-foreground">Pedágio de 100%:</strong> Exige o
                    cumprimento do dobro (100%) do tempo que faltava para a aposentadoria em
                    13/11/2019, cumulado com idade mínima (60 anos homem, 57 mulher).
                  </li>
                  <li>
                    <strong className="text-foreground">Idade Mínima Progressiva:</strong> Requer 35
                    anos de contribuição (homem) ou 30 anos (mulher), somados a uma idade mínima que
                    aumenta gradativamente a cada ano.
                  </li>
                  <li>
                    <strong className="text-foreground">Sistema de Pontos:</strong> Soma da idade
                    com o tempo de contribuição. A pontuação mínima exigida sobe um ponto a cada
                    ano.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-muted p-3 rounded-full shrink-0">
                    <ShieldAlert className="text-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Aposentadoria Especial
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                <p className="mb-4">
                  Destinada a segurados que trabalharam expostos a agentes nocivos à saúde (físicos,
                  químicos ou biológicos) de forma contínua e ininterrupta, em níveis acima dos
                  limites legais de tolerância.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Requisitos Pós-Reforma:</strong> Exige-se
                    idade mínima atrelada ao tempo de exposição. Geralmente: 60 anos de idade para
                    25 anos de exposição; 58 anos para 20 anos de exposição; ou 55 anos para 15 anos
                    de exposição (ex: atividades em minas subterrâneas).
                  </li>
                  <li>
                    <strong className="text-foreground">Regra de Transição (Pontos):</strong> Para
                    filiados antes da reforma, utiliza-se a soma da idade com o tempo de
                    contribuição (ex: 86 pontos para atividades de 25 anos).
                  </li>
                  <li>
                    A comprovação se dá mediante documentação técnica específica, como o Perfil
                    Profissiográfico Previdenciário (PPP) e Laudo Técnico de Condições Ambientais do
                    Trabalho (LTCAT).
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="bg-muted p-3 rounded-full shrink-0">
                    <HeartPulse className="text-foreground w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      Aposentadoria por Incapacidade Permanente (Invalidez)
                    </h3>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                <p className="mb-4">
                  Benefício concedido ao segurado que for considerado permanentemente e totalmente
                  incapaz para o trabalho, sem possibilidade de reabilitação para outra atividade
                  que lhe garanta a subsistência.
                </p>
                <ul className="space-y-3 list-disc pl-5">
                  <li>
                    <strong className="text-foreground">Requisitos:</strong> Qualidade de segurado,
                    cumprimento da carência de 12 contribuições mensais (exceto em casos de acidente
                    de qualquer natureza ou doença profissional/trabalho, ou doenças graves
                    especificadas em lei) e comprovação da incapacidade.
                  </li>
                  <li>
                    <strong className="text-foreground">Perícia Médica:</strong> A constatação da
                    incapacidade permanente deve ser atestada obrigatoriamente por perícia médica a
                    cargo do INSS.
                  </li>
                  <li>
                    O benefício está sujeito a revisões periódicas (o "pente-fino"), salvo exceções
                    previstas em lei (como segurados maiores de 60 anos).
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="bg-slate-900 text-white rounded-xl p-8 md:p-12 text-center shadow-lg border border-slate-800">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Análise Técnica de Elegibilidade</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            A verificação dos requisitos legais e das regras de transição aplicáveis demanda análise
            detalhada do histórico contributivo. Em caso de dúvidas sobre a legislação ou sobre seu
            extrato previdenciário (CNIS), consulte assessoria jurídica especializada.
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-black font-bold uppercase tracking-wider h-14 px-8 w-full sm:w-auto"
            onClick={() =>
              window.open(
                'https://wa.me/5553981063023?text=Olá,%20li%20o%20Guia%20de%20Aposentadorias%20e%20gostaria%20de%20uma%20análise%20técnica%20do%20meu%20caso.',
                '_blank',
              )
            }
          >
            Falar com Advogado
          </Button>
        </div>
      </div>
    </main>
  )
}
