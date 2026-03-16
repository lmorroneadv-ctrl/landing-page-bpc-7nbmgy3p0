import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Info } from 'lucide-react'

export default function BpcTable() {
  return (
    <section className="py-24 bg-[#111111] break-inside-avoid border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
            Comparativo <span className="text-gold">Técnico</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Resumo estruturado das diferenças cruciais entre as duas modalidades do Benefício de
            Prestação Continuada.
          </p>
        </div>

        <div className="bg-[#1A1A1A] rounded-3xl border border-border overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-[#151515]">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-gold font-black text-lg w-[20%] py-6 px-6">
                    Requisito
                  </TableHead>
                  <TableHead className="text-white font-bold text-lg w-[40%] py-6 px-6 border-l border-border/30">
                    BPC Idoso
                  </TableHead>
                  <TableHead className="text-white font-bold text-lg w-[40%] py-6 px-6 border-l border-border/30">
                    BPC Pessoa com Deficiência
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border hover:bg-white/[0.02] transition-colors">
                  <TableCell className="font-bold text-white px-6 py-6 text-base">Idade</TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30 font-medium">
                    65 anos ou mais
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30 font-medium">
                    Qualquer idade
                  </TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-white/[0.02] transition-colors bg-[#111111]/40">
                  <TableCell className="font-bold text-white px-6 py-6 text-base">
                    Perícia
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    Não
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    Sim (Avaliação biopsicossocial)
                  </TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-white/[0.02] transition-colors">
                  <TableCell className="font-bold text-white px-6 py-6 text-base">Renda</TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    Até ¼ do salário mínimo
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    Até ¼ do salário mínimo
                  </TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-white/[0.02] transition-colors bg-[#111111]/40">
                  <TableCell className="font-bold text-white px-6 py-6 text-base">Valor</TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30 font-bold text-white">
                    1 salário mínimo
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30 font-bold text-white">
                    1 salário mínimo
                  </TableCell>
                </TableRow>
                <TableRow className="border-border hover:bg-white/[0.02] transition-colors">
                  <TableCell className="font-bold text-white px-6 py-6 text-base">
                    Revisão
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    A cada 2 anos (Atualização CadÚnico)
                  </TableCell>
                  <TableCell className="text-foreground/80 px-6 py-6 border-l border-border/30">
                    A cada 2 anos (CadÚnico e Nova Perícia)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="bg-[#111111] p-5 text-center text-sm text-foreground/60 border-t border-border flex items-center justify-center gap-2 font-medium">
            <Info className="w-4 h-4 text-gold shrink-0" />
            Esta tabela técnica reflete rigorosamente a legislação previdenciária vigente em 2026.
          </div>
        </div>
      </div>
    </section>
  )
}
