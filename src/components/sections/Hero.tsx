import { Button } from '@/components/ui/button'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center pt-[120px] lg:pt-24 bg-[#111111]"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=lawyer%20office%20professional&color=black&dpr=2"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-fade-in-up">
            <CheckCircle2 className="h-4 w-4" />
            <span>Benefício de Prestação Continuada</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            Orientação Especializada para o seu BPC — Mesmo Que Tenha Sido Negado
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 text-balance animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Especialista em Direito Previdenciário com foco em concessão e reversão de negativas.
            Atendimento presencial em Pelotas e Rio Grande.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="h-14 px-8 text-base shadow-gold group bg-primary text-primary-foreground hover:bg-primary/90"
              asChild
            >
              <a href="#contato">
                Solicitar Análise do Meu Caso
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div
            className="flex items-center gap-4 pt-6 mt-6 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={`https://img.usecurling.com/ppl/thumbnail?gender=${i % 2 === 0 ? 'female' : 'male'}&seed=${i}`}
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-white/70">
              <span className="text-white font-bold block">Avaliados positivamente</span>
              por nossos clientes no Google
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
