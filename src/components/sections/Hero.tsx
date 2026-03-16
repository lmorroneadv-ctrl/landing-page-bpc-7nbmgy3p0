import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Scale, Award } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-dc625.png'

export function Hero() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999', '_blank')
  }

  return (
    <section
      id="inicio"
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-background"
    >
      {/* Subtle background grid and gradient for an elegant look */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center max-w-5xl mx-auto">
        {/* Main Logo Focus */}
        <div className="animate-fade-in-up mb-10">
          <img
            src={logoUrl}
            alt="Lucas Morrone - Advocacia Previdenciária"
            className="h-40 md:h-56 lg:h-64 w-auto object-contain drop-shadow-2xl mix-blend-lighten"
          />
        </div>

        <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            <ShieldCheck className="mr-2 h-4 w-4" />
            Escritório Especializado em Direito Previdenciário
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-foreground text-balance">
            Garanta seu direito à{' '}
            <span className="text-primary font-serif italic">Aposentadoria</span> e{' '}
            <span className="text-primary font-serif italic">BPC/LOAS</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Atuação jurídica ágil, transparente e de excelência. Lutamos para que você receba o
            benefício que é seu por direito, com a segurança de um escritório altamente
            especializado.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 w-full justify-center mt-10 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <Button
            size="lg"
            onClick={handleWhatsApp}
            className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold uppercase tracking-wider"
          >
            Análise Gratuita do Caso <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-lg px-8 h-14 border-primary/30 text-foreground hover:bg-primary/10"
          >
            Conhecer Especialidades
          </Button>
        </div>

        {/* Elegant Trust Indicators */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 mt-20 pt-10 border-t border-border/50 animate-fade-in-up"
          style={{ animationDelay: '450ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <Scale className="h-8 w-8 text-primary/80" />
            <p className="text-sm font-medium text-foreground">Alta Taxa de Sucesso</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Award className="h-8 w-8 text-primary/80" />
            <p className="text-sm font-medium text-foreground">Especialistas em INSS</p>
          </div>
          <div className="flex flex-col items-center gap-2 col-span-2 md:col-span-1">
            <ShieldCheck className="h-8 w-8 text-primary/80" />
            <p className="text-sm font-medium text-foreground">Sigilo e Segurança Total</p>
          </div>
        </div>
      </div>
    </section>
  )
}
