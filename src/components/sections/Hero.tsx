import { Button } from '@/components/ui/button'
import { CheckCircle2, ChevronRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=lawyer%20office%20professional&color=black&dpr=2"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85 bg-gradient-to-r from-secondary/95 to-secondary/75 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-fade-in-up">
            <CheckCircle2 className="h-4 w-4" />
            <span>Advocacia Especializada em BPC (LOAS)</span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-balance animate-fade-in-up"
            style={{ animationDelay: '100ms' }}
          >
            BPC/LOAS: Orientação Especializada para a Conquista do seu Direito
          </h1>

          <p
            className="text-lg md:text-xl text-white/80 text-balance animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            Atuação focada em Direito Previdenciário para pessoas com deficiência e idosos.
            Transparência e compromisso com o seu benefício.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button size="lg" className="h-14 px-8 text-base shadow-gold group" asChild>
              <a href="#contato">
                Solicitar Análise do Meu Caso
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
              asChild
            >
              <a href="#como-funciona">Entender o Processo</a>
            </Button>
          </div>

          <div
            className="flex items-center gap-4 pt-6 mt-6 border-t border-white/10 animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://img.usecurling.com/ppl/thumbnail?gender=${i % 2 === 0 ? 'female' : 'male'}&seed=${i}`}
                  alt="Cliente"
                  className="w-10 h-10 rounded-full border-2 border-secondary object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-white/70">
              <span className="text-white font-bold block">Centenas de casos</span>
              analisados em todo Brasil
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
