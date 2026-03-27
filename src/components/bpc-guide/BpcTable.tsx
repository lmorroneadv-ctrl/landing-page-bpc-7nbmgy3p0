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
    <section className="py-24 bg-slate-50 break-inside-avoid border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-slate-900 leading-tight tracking-tight">
            Comparativo <span className="text-gold">Técnico</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            Resumo estruturado das diferenças cruciais entre as duas modalidades do Benefício de
            Prestação Continuada.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-100">
                <TableRow className="border-slate-200 hover:bg-transparent">
                  <TableHead className="text-gold-dark font-black text-lg w-[20%] py-6 px-6">
                    Requisito
                  </TableHead>
                  <TableHead className="text-slate-900 font-bold text-lg w-[40%] py-6 px-6 border-l border-slate-200">
                    BPC Idoso
                  </TableHead>
                  <TableHead className="text-slate-900 font-bold text-lg w-[40%] py-6 px-6 border-l border-slate-200">
                    BPC Pessoa com Deficiência
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Idade
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    65 anos ou mais
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Qualquer idade
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors bg-slate-50/80">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Avaliação
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Apenas Documental
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Avaliação Biopsicossocial
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Renda
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Até ¼ do salário mínimo
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Até ¼ do salário mínimo
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors bg-slate-50/80">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Valor
                  </TableCell>
                  <TableCell className="text-slate-900 px-6 py-6 border-l border-slate-200 font-bold">
                    1 salário mínimo
                  </TableCell>
                  <TableCell className="text-slate-900 px-6 py-6 border-l border-slate-200 font-bold">
                    1 salário mínimo
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Acúmulo
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Não permitido
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    Não permitido
                  </TableCell>
                </TableRow>
                <TableRow className="border-slate-200 hover:bg-slate-50/50 transition-colors bg-slate-50/80">
                  <TableCell className="font-bold text-slate-900 px-6 py-6 text-base">
                    Revisão
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    A cada 2 anos (Atualização CadÚnico)
                  </TableCell>
                  <TableCell className="text-slate-700 px-6 py-6 border-l border-slate-200 font-medium">
                    A cada 2 anos (CadÚnico e Nova Avaliação)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="bg-slate-100 p-5 text-center text-sm text-slate-600 border-t border-slate-200 flex items-center justify-center gap-2 font-semibold">
            <Info className="w-4 h-4 text-gold shrink-0" />
            Esta tabela técnica reflete rigorosamente a legislação previdenciária vigente em 2026.
          </div>
        </div>
      </div>
    </section>
  )
}
