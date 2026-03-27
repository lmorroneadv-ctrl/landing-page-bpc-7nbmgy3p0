import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, MapPin } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/90 to-[#111111] z-10" />
        <img
          src="https://img.usecurling.com/p/1920/1080?q=law%20office&color=black"
          alt="Advogado Previdenciário atendendo cliente no escritório"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <Badge
            variant="outline"
            className="mb-6 border-gold text-gold px-4 py-1.5 rounded-full flex items-center gap-2 text-sm bg-black/50 backdrop-blur-sm"
          >
            <MapPin size={16} />
            Atendimento presencial em Pelotas e Rio Grande
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Advocacia Previdenciária <span className="text-gold">Especializada</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/90 mb-10 max-w-2xl font-medium">
            Orientação técnica e análise aprofundada para garantir seus direitos junto ao INSS.
            Atuação ética e transparente em cada etapa do seu processo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8"
              asChild
            >
              <Link to="/#servicos">
                Conheça nossos serviços <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gold text-gold hover:bg-gold/10 text-base h-14 px-8"
              asChild
            >
              <a
                href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Advogado
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
