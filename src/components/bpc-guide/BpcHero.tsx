import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Download, Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function BpcHero() {
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = () => {
    setIsDownloading(true)

    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js'

    script.onload = () => {
      const element = document.getElementById('bpc-guide-content')
      if (!element) {
        setIsDownloading(false)
        return
      }

      const opt = {
        margin: [10, 10, 10, 10],
        filename:
          'Guia Completo: Benefício de Prestação Continuada (BPC/LOAS) - Dr. Lucas Morrone.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#111111' },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      }

      // @ts-expect-error
      window
        .html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => {
          setIsDownloading(false)
          toast({
            title: 'Download concluído',
            description: 'O guia completo foi baixado com sucesso no formato PDF.',
          })
        })
        .catch(() => {
          setIsDownloading(false)
          toast({
            title: 'Erro no download',
            description: 'Ocorreu um erro ao gerar o PDF.',
            variant: 'destructive',
          })
        })
    }

    script.onerror = () => {
      setIsDownloading(false)
      toast({
        title: 'Erro de conexão',
        description: 'Não foi possível carregar o gerador de PDF.',
        variant: 'destructive',
      })
    }

    document.body.appendChild(script)
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#111111] border-b border-border/50">
      <div className="absolute inset-0 z-0" data-html2canvas-ignore>
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#111111]/95 to-[#1a1a1a] z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=legal%20documents&color=black"
          alt="Guia BPC LOAS"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6 border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
            <BookOpen className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Guia Completo: <span className="text-gold">BPC / LOAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl font-medium leading-relaxed">
            Tudo o que você precisa saber sobre o Benefício de Prestação Continuada.
          </p>

          <div className="bg-gold/10 border border-gold/40 rounded-xl p-6 sm:p-8 mb-10 shadow-[0_0_40px_rgba(212,175,55,0.15)] max-w-2xl w-full backdrop-blur-sm transform hover:scale-[1.02] transition-transform duration-500 break-inside-avoid">
            <p className="text-gold font-bold text-sm uppercase tracking-widest mb-2">
              Valor Atualizado
            </p>
            <p className="text-3xl sm:text-4xl font-black text-white">
              No ano de 2026, o valor do BPC corresponde a{' '}
              <span className="text-gold">R$ 1.621,00</span>
            </p>
            <p className="text-foreground/70 mt-3 text-sm">
              Equivalente a 1 (um) salário mínimo vigente. Benefício de caráter não contributivo.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full justify-center"
            data-html2canvas-ignore
          >
            <Button
              size="lg"
              className="bg-gold text-[#111111] hover:bg-gold/90 text-lg h-14 px-8 font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300"
              asChild
            >
              <a
                href="https://wa.me/5553981063023?text=Olá,%20gostaria%20de%20ajuda%20para%20solicitar%20o%20BPC/LOAS."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Especialista <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadPDF}
              disabled={isDownloading}
              className="border-gold text-gold hover:bg-gold hover:text-[#111111] text-lg h-14 px-8 font-bold transition-all duration-300 bg-[#111111]/50 backdrop-blur-sm"
            >
              {isDownloading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Download className="mr-2 h-5 w-5" />
              )}
              Baixar Guia Completo (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
