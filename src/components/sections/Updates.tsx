import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  CheckCircle2,
  FileText,
  AlertTriangle,
  ShieldCheck,
  Clock,
  HeartPulse,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Updates() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 100,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="atualizacoes" className="py-20 bg-muted border-t border-border/50 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Atualizações <span className="text-gold-dark">Previdenciárias 2026</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Acompanhe as novas regulamentações e exigências do INSS para garantir a concessão dos
            seus benefícios de forma rápida e segura.
          </p>
        </div>

        <div className="hidden sm:flex flex-row justify-center gap-4 mb-16">
          <Button
            variant="outline"
            className="border-gold-dark/30 text-gold-dark hover:bg-gold hover:text-black bg-card shadow-sm h-12 rounded-full font-semibold px-6 transition-colors"
            onClick={() => scrollTo('atestmed')}
          >
            <FileText className="mr-2 h-4 w-4" /> AtestMed (Regras 2026)
          </Button>
          <Button
            variant="outline"
            className="border-gold-dark/30 text-gold-dark hover:bg-gold hover:text-black bg-card shadow-sm h-12 rounded-full font-semibold px-6 transition-colors"
            onClick={() => scrollTo('auxilio')}
          >
            <HeartPulse className="mr-2 h-4 w-4" /> Auxílio-Acidente
          </Button>
        </div>

        <div className="hidden lg:grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-16">
            <div id="atestmed" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <FileText className="h-6 w-6 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Como pedir AtestMed pelo INSS em 2026?
                </h3>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border shadow-soft">
                <p className="text-foreground font-medium mb-6">
                  Para pedir o <strong>AtestMed pelo INSS em 2026</strong>, você deve acessar o
                  aplicativo ou site <strong>Meu INSS</strong>, ou ligar para a central 135. O
                  sistema de análise documental remota foi atualizado pela{' '}
                  <strong>Lei 15.265/2025</strong> e{' '}
                  <strong>Portaria Conjunta MPS/INSS nº 13/2026</strong>. O novo modelo viabiliza a
                  concessão de benefícios por incapacidade (Auxílio Doença) por{' '}
                  <strong>até 90 dias</strong> sem a necessidade de perícia presencial inicial.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-background p-5 rounded-lg border border-border">
                    <h4 className="text-foreground font-semibold flex items-center gap-2 mb-4">
                      <ShieldCheck className="h-5 w-5 text-gold" /> Docs Obrigatórios
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                      {[
                        'Identidade original com foto',
                        'Laudo médico legível',
                        'Identificação completa',
                        'Data e código CID',
                        'Assinatura e CRM/CRO',
                      ].map((i, idx) => (
                        <li key={idx} className="flex gap-2">
                          <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" /> {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-background p-5 rounded-lg border border-border">
                    <h4 className="text-foreground font-semibold flex items-center gap-2 mb-4">
                      <AlertTriangle className="h-5 w-5 text-gold" /> Alertas e Regras
                    </h4>
                    <ul className="space-y-4 text-sm text-muted-foreground font-medium">
                      <li className="flex gap-2">
                        <ChevronRight className="h-4 w-4 text-gold shrink-0 mt-0.5" />{' '}
                        <strong>Como solicitar:</strong> Aplicativo Meu INSS ou central 135.
                      </li>
                      <li className="flex gap-2">
                        <ChevronRight className="h-4 w-4 text-gold shrink-0 mt-0.5" />{' '}
                        <strong>Limites:</strong> 3 negativas no sistema bloqueiam a via remota,
                        tornando a perícia física obrigatória.
                      </li>
                    </ul>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-2">
                  Perguntas Frequentes sobre o AtestMed
                </h4>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="1" className="border-border">
                    <AccordionTrigger className="text-foreground hover:text-gold-dark py-4 font-semibold">
                      Qual a duração máxima do benefício AtestMed?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-medium">
                      Pelo sistema remoto de análise, o benefício pode ser concedido por até 90 dias
                      ininterruptos.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="2" className="border-border">
                    <AccordionTrigger className="text-foreground hover:text-gold-dark py-4 font-semibold">
                      Qual o prazo de análise pelo INSS?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-medium">
                      O INSS possui até 45 dias para concluir a avaliação do seu requerimento via
                      AtestMed.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="3" className="border-border">
                    <AccordionTrigger className="text-foreground hover:text-gold-dark py-4 font-semibold">
                      Quais são as regras para prorrogação?
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground font-medium">
                      A prorrogação do benefício sempre exige obrigatoriamente a perícia médica
                      (presencial ou por telemedicina).
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div id="auxilio" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gold/10 p-3 rounded-lg">
                  <HeartPulse className="h-6 w-6 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Quais as novas regras do Auxílio-Acidente?
                </h3>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border shadow-soft">
                <p className="text-foreground font-medium mb-6">
                  Para os benefícios acidentários, implementou-se uma{' '}
                  <strong>triagem documental obrigatória</strong> que antecede e condiciona a
                  perícia física no INSS.
                </p>
                <div className="bg-red-50 border-l-4 border-red-600 p-5 mb-6 rounded-lg">
                  <p className="text-sm text-red-900 font-medium">
                    <strong>Risco de Negativa:</strong> A ausência de elementos probatórios
                    essenciais resulta no <strong>indeferimento imediato</strong> do pedido,
                    impedindo o agendamento do exame.
                  </p>
                </div>
                <h4 className="font-semibold text-foreground mb-4">
                  Requisitos Essenciais na Documentação:
                </h4>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Clock, t: 'Data exata do acidente' },
                    { icon: FileText, t: 'Descrição detalhada da lesão' },
                    { icon: HeartPulse, t: 'Comprovação de sequelas que afetem o trabalho' },
                  ].map((I, idx) => (
                    <div
                      key={idx}
                      className="bg-background p-5 rounded-lg border border-border flex flex-col items-center text-center transition-colors hover:border-gold/30"
                    >
                      <I.icon className="h-8 w-8 text-gold mb-3" />
                      <span className="text-sm font-semibold text-foreground">{I.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="sticky top-28">
              <Card className="bg-gradient-to-br from-background to-muted border-gold/30 shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground">Por que um advogado?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-medium">
                    Erros documentais custam o seu benefício. A assessoria especializada garante
                    auditoria prévia detalhada, neutralizando riscos de negativas automáticas pelo
                    INSS.
                  </p>
                  <Button
                    className="w-full bg-gold hover:bg-gold/90 text-black font-bold h-14 uppercase text-sm shadow-sm transition-transform hover:scale-[1.02]"
                    asChild
                  >
                    <a
                      href="https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20ajuda%20com%20as%20novas%20regras%20do%20INSS."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Falar com a Equipe Legal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="atestmed"
              className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-gold shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-gold-dark shrink-0" />
                  Regras AtestMed 2026
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-muted-foreground font-medium mb-4 text-sm">
                  O sistema de análise remota permite benefícios por incapacidade por até 90 dias
                  sem perícia presencial inicial.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground font-medium mb-4">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    Documentos: RG, Laudo legível (com CID), CRM/CRO.
                  </li>
                  <li className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    Limite: 3 negativas bloqueiam a via remota.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="auxilio"
              className="bg-card border border-border rounded-lg px-4 data-[state=open]:border-gold shadow-sm"
            >
              <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-4">
                <div className="flex items-center gap-3">
                  <HeartPulse className="h-5 w-5 text-gold-dark shrink-0" />
                  Auxílio-Acidente
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-6">
                <p className="text-muted-foreground font-medium mb-4 text-sm">
                  Triagem documental obrigatória antecede a perícia física. A ausência de elementos
                  probatórios resulta no indeferimento imediato.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground font-medium">
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    Data exata do acidente.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                    Descrição detalhada da lesão e sequelas.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
