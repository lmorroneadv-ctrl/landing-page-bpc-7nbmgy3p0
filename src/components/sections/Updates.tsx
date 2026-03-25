import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { FileText, Clock, AlertCircle, ShieldAlert, Stethoscope, FilePlus } from 'lucide-react'

export function Updates() {
  return (
    <section id="atualizacoes" className="py-20 bg-[#1A1A1A] border-y border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FileText className="h-10 w-10 text-gold mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Últimas <span className="text-gold">Atualizações</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Mantenha-se informado sobre as recentes mudanças nas normativas do INSS e como elas
            impactam seus direitos previdenciários.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          <Card className="bg-[#111111] border-border hover:border-gold/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                  Incapacidade Temporária
                </span>
              </div>
              <CardTitle className="text-2xl text-white leading-tight">
                AtestMed 2026: Solicitação de Auxílio-Doença via Web por até 90 Dias
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-6">
                O AtestMed consolidou-se como o sistema digital oficial para análise documental,
                substituindo a perícia presencial na concessão de benefícios por incapacidade
                temporária, permitindo aprovações de até 90 dias.
              </p>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="passo-a-passo" className="border-border">
                  <AccordionTrigger className="text-white hover:text-gold">
                    Passo a Passo da Solicitação
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 shrink-0 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-xs">
                        1
                      </div>
                      <p>Reunir documentação médica que comprove a incapacidade.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 shrink-0 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-xs">
                        2
                      </div>
                      <p>Solicitar o benefício pelo portal "Meu INSS" ou pela central 135.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 shrink-0 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-xs">
                        3
                      </div>
                      <p>Fazer o upload dos arquivos necessários (laudos, exames, atestados).</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-6 w-6 shrink-0 bg-gold/20 text-gold rounded-full flex items-center justify-center font-bold text-xs">
                        4
                      </div>
                      <p>Aguardar a análise remota por um perito médico federal.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="mudancas-2026" className="border-border">
                  <AccordionTrigger className="text-white hover:text-gold">
                    Mudanças de 2026 (Portaria 13/2026)
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    O procedimento evoluiu de uma simples triagem para uma avaliação pericial remota
                    completa. O perito agora possui autonomia para fixar o período de recuperação e,
                    inclusive, reconhecer acidentes de trabalho diretamente de forma digital pelo
                    AtestMed.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="regras-importantes" className="border-border">
                  <AccordionTrigger className="text-white hover:text-gold">
                    Regras e Prazos Importantes
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 space-y-2">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Pedidos de prorrogação possuem uma janela de 15 dias finais do benefício e
                        exigem avaliação presencial.
                      </li>
                      <li>
                        Há um limite de 3 negativas consecutivas via sistema; após isso, a avaliação
                        presencial é obrigatória.
                      </li>
                      <li>Prazo estrito de 30 dias para interposição de recurso administrativo.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="documentos" className="border-transparent">
                  <AccordionTrigger className="text-white hover:text-gold">
                    Documentação Exigida e Dicas
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    <p className="mb-3">
                      <strong className="text-white">Documentos Obrigatórios:</strong> Documento de
                      identidade oficial com foto e documentação médica/odontológica contendo
                      identificação do paciente, data, CID, assinatura e CRM/CRO do profissional.
                    </p>
                    <div className="bg-gold/10 p-4 rounded-lg border border-gold/20 flex gap-3">
                      <Stethoscope className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <p className="text-sm">
                        <strong className="text-gold">Dica do Especialista:</strong> Descreva seus
                        sintomas com clareza no campo específico do "Meu INSS". Ter um laudo médico
                        detalhado é o fator mais importante para aumentar as chances de aprovação.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="bg-[#111111] border-border hover:border-gold/30 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-gold/10 rounded-lg">
                  <ShieldAlert className="h-6 w-6 text-gold" />
                </div>
                <span className="text-sm font-semibold text-gold tracking-wider uppercase">
                  Benefício Acidentário
                </span>
              </div>
              <CardTitle className="text-2xl text-white leading-tight">
                Auxílio-Acidente: Triagem Documental Torna-se Etapa Obrigatória
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-8">
                O INSS implementou uma nova e rigorosa exigência para a concessão do
                Auxílio-Acidente: a obrigatoriedade de uma revisão documental preliminar antes mesmo
                do agendamento da perícia médica presencial.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 bg-[#1A1A1A] p-2 rounded-full h-fit border border-border">
                    <FilePlus className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">A Nova Regra Chave</h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      O exame físico deixou de ser um agendamento automático. Agora, o requerente
                      deve, obrigatoriamente, fornecer relatórios e exames consistentes que
                      comprovem a ocorrência do acidente e atestem as sequelas consolidadas que
                      impactam sua capacidade de trabalho.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 bg-[#1A1A1A] p-2 rounded-full h-fit border border-border">
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">
                      Consequências na Análise do Pedido
                    </h4>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Caso os documentos anexados sejam considerados insuficientes ou inconclusivos
                      durante a triagem inicial, o requerimento poderá ser sumariamente indeferido,
                      sem que haja sequer a convocação do segurado para a avaliação presencial.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#111111] border border-gold/20 rounded-xl p-8 text-center max-w-3xl mx-auto shadow-[0_0_30px_rgba(212,175,55,0.05)]">
          <h3 className="text-2xl font-bold text-white mb-3">
            Dúvidas sobre o impacto dessas regras no seu benefício?
          </h3>
          <p className="text-foreground/80 mb-8 text-lg">
            A complexidade técnica das novas normativas exige uma organização documental impecável
            para evitar negativas indevidas pelo INSS.
          </p>
          <Button
            className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-[#111111] font-bold h-14 px-8 text-base shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300"
            asChild
          >
            <a
              href="https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20uma%20análise%20sobre%20as%20novas%20regras%20do%20INSS."
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale com a equipe da Bocchi Advogados e receba uma análise do seu caso
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
