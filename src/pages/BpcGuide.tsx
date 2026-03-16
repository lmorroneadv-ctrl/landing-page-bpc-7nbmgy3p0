import { Button } from '@/components/ui/button'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function BpcGuide() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="container max-w-4xl px-4 md:px-6">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para a página inicial
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Guia Completo: Benefício de Prestação Continuada (BPC/LOAS)
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground mb-12 pb-8 border-b border-border">
            <span>Tempo de leitura: 5 min</span>
            <span>•</span>
            <span>Atualizado em 2024</span>
          </div>

          <div className="bg-muted p-8 rounded-xl border border-border mb-12">
            <h3 className="text-xl font-bold text-foreground mb-4 font-serif">
              O que você vai aprender:
            </h3>
            <ul className="space-y-2 m-0 list-none p-0">
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> O que é o BPC
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Quem tem direito
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Documentos necessários
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" /> Como solicitar
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 font-serif">
            O que é o BPC?
          </h2>
          <p className="text-muted-foreground">
            O Benefício de Prestação Continuada (BPC), regulamentado pela Lei Orgânica da
            Assistência Social (LOAS), é a garantia de um salário mínimo mensal à pessoa com
            deficiência e ao idoso com 65 anos ou mais que comprovem não possuir meios de prover a
            própria manutenção, nem de tê-la provida por sua família.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 font-serif">
            Requisitos Principais
          </h2>
          <p className="text-muted-foreground">
            Para ter direito ao benefício, é necessário cumprir dois requisitos básicos
            simultaneamente:
          </p>
          <ol className="text-muted-foreground">
            <li>
              <strong>Requisito Pessoal:</strong> Ser idoso (65 anos ou mais) ou pessoa com
              deficiência (de qualquer idade).
            </li>
            <li>
              <strong>Requisito Econômico:</strong> A renda por pessoa do grupo familiar deve ser
              inferior a 1/4 do salário mínimo vigente. (Observação: A Justiça vem flexibilizando
              este critério em casos de extrema necessidade).
            </li>
          </ol>

          <div className="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
            <p className="text-foreground font-medium m-0">
              <strong>Atenção:</strong> O BPC não é aposentadoria. Para recebê-lo, não é preciso ter
              contribuído para o INSS. Diferente da aposentadoria, o BPC não paga 13º salário e não
              deixa pensão por morte.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4 font-serif">
            Documentação Necessária
          </h2>
          <ul className="text-muted-foreground">
            <li>Identidade (RG) e CPF do requerente e de todos os membros da família</li>
            <li>Comprovante de residência atualizado</li>
            <li>Cadastro Único (CadÚnico) atualizado no CRAS</li>
            <li>Laudos médicos recentes (no caso de pessoa com deficiência)</li>
            <li>Comprovantes de gastos com saúde, medicamentos, fraldas, etc.</li>
          </ul>

          <div className="mt-16 pt-8 border-t border-border flex flex-col items-center text-center bg-muted/50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">
              Precisa de ajuda com seu BPC?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nosso escritório é especialista em Direito Previdenciário. Se o seu pedido foi negado
              pelo INSS ou se você precisa de ajuda para dar entrada, nós podemos ajudar.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Falar com Advogado Especialista
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
