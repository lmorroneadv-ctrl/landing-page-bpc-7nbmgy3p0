import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function BpcTable() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Comparativo <span className="text-gold">Técnico</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Entenda as diferenças exatas entre o benefício para idosos e para pessoas com
            deficiência.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-[#1A1A1A] rounded-xl border border-border overflow-hidden shadow-xl">
          <Table>
            <TableHeader className="bg-[#222222]">
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-gold font-bold text-lg w-1/3 py-5">Item</TableHead>
                <TableHead className="text-white font-bold text-lg w-1/3 py-5">Idoso</TableHead>
                <TableHead className="text-white font-bold text-lg w-1/3 py-5">PcD</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Idade</TableCell>
                <TableCell className="text-foreground/80">65 anos ou mais</TableCell>
                <TableCell className="text-foreground/80">qualquer idade</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Perícia</TableCell>
                <TableCell className="text-foreground/80">não exige</TableCell>
                <TableCell className="text-foreground/80">
                  exige avaliação biopsicossocial
                </TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Renda</TableCell>
                <TableCell className="text-foreground/80">até ¼ do salário mínimo</TableCell>
                <TableCell className="text-foreground/80">até ¼ do salário mínimo</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Valor</TableCell>
                <TableCell className="text-foreground/80">1 salário mínimo</TableCell>
                <TableCell className="text-foreground/80">1 salário mínimo</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Acúmulo</TableCell>
                <TableCell className="text-foreground/80">Não é permitido</TableCell>
                <TableCell className="text-foreground/80">Não é permitido</TableCell>
              </TableRow>
              <TableRow className="border-border hover:bg-white/5">
                <TableCell className="font-semibold text-white">Revisão</TableCell>
                <TableCell className="text-foreground/80">a cada 2 anos (CadÚnico)</TableCell>
                <TableCell className="text-foreground/80">
                  a cada 2 anos (CadÚnico + perícia)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  )
}
