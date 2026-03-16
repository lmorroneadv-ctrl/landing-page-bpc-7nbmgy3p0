import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, FileCheck } from 'lucide-react'

export default function BpcHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#111111] border-b border-border/50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#111111] via-[#111111]/95 to-[#1a1a1a] z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=legal%20documents%20desk&color=black"
          alt="Guia BPC LOAS"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-20 max-w-5xl">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-bold mb-8 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <FileCheck className="w-4 h-4" /> Atualizado para 2026
          </div>

          <div className="w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center mb-8 border border-gold/40 shadow-[0_0_40px_rgba(212,175,55,0.2)] transform rotate-3">
            <BookOpen className="w-10 h-10 text-gold -rotate-3" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Guia Completo: <br className="hidden md:block" />
            <span className="text-gold">BPC / LOAS</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl font-medium leading-relaxed">
            Visão Geral e regras definitivas sobre o Benefício de Prestação Continuada.
          </p>

          <div className="bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-gold/40 rounded-2xl p-8 sm:p-10 mb-12 shadow-[0_0_50px_rgba(212,175,55,0.15)] max-w-2xl w-full backdrop-blur-md transform hover:scale-[1.02] transition-transform duration-500 break-inside-avoid relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -z-10"></div>
            <p className="text-gold font-bold text-sm uppercase tracking-widest mb-3 flex items-center justify-center gap-2">
              Valor Oficial
            </p>
            <p className="text-3xl sm:text-4xl font-black text-white leading-tight">
              No ano de 2026, o valor do BPC corresponde a{' '}
              <span className="text-gold block mt-2 border-b-2 border-gold/30 pb-2 inline-block">
                R$ 1.621,00
              </span>
            </p>
            <p className="text-foreground/70 mt-4 text-sm font-medium">
              Equivalente a 1 (um) salário mínimo vigente. Benefício assistencial não contributivo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center items-center">
            <Button
              size="lg"
              className="bg-gold text-[#111111] hover:bg-gold/90 text-lg h-16 px-8 font-bold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 w-full sm:w-auto rounded-xl"
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
          </div>
        </div>
      </div>
    </section>
  )
}
