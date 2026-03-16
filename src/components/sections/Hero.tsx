import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95 z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=law%20office&color=blue"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <Badge
            variant="outline"
            className="mb-8 border-gold/50 text-gold px-5 py-2 rounded-full flex items-center gap-2 text-sm bg-background/50 backdrop-blur-sm shadow-gold"
          >
            <MapPin size={16} />
            Atendimento presencial em Pelotas e Rio Grande
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight font-serif">
            Lucas Morrone
            <span className="block text-3xl md:text-5xl lg:text-5xl mt-2 text-gold font-serif italic">
              Advocacia Especializada
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mb-8 opacity-70"></div>

          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl font-light leading-relaxed">
            Orientação técnica e análise aprofundada para garantir seus direitos junto ao INSS. Uma
            atuação pautada na ética, transparência e excelência jurídica.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold/90 text-base h-14 px-8 shadow-gold font-bold"
              asChild
            >
              <a
                href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar Consulta <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:text-white text-base h-14 px-8 backdrop-blur-sm transition-all"
              asChild
            >
              <a href="#servicos">Nossas Áreas de Atuação</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
