import { Button } from '@/components/ui/button'
import { ArrowRight, BookOpen, Scale, Landmark } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-dc625.png'

export function Biography() {
  return (
    <section id="sobre" className="py-24 bg-background overflow-hidden relative">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden border border-border/50">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <img
                src="https://img.usecurling.com/ppl/large?gender=male"
                alt="Dr. Lucas Morrone"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent h-1/3 z-20" />
              <div className="absolute bottom-6 left-6 z-30">
                <p className="text-primary font-bold tracking-wider uppercase text-sm">
                  OAB/SP 123.456
                </p>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/5 rounded-full blur-2xl -z-10" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <img
                src={logoUrl}
                alt="Lucas Morrone Logo"
                className="h-16 w-auto mb-6 opacity-80 mix-blend-lighten"
              />
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif mb-4">
                Compromisso com o seu <span className="text-primary italic">Direito</span>
              </h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed">
                O escritório Lucas Morrone Advocacia Previdenciária nasceu com o propósito
                inabalável de defender os segurados contra as injustiças cometidas pelo INSS.
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Nossa atuação é pautada na ética, transparência e extrema combatividade. Sabemos que
                por trás de cada processo de BPC/LOAS ou aposentadoria existe uma história de vida e
                a necessidade urgente de dignidade.
              </p>
              <p>
                Com atendimento personalizado em todo o território nacional, utilizamos tecnologia e
                profundo conhecimento jurídico para acelerar resultados e garantir o melhor
                benefício possível para nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-border/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/10">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Especialização Técnica</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/10">
                  <Scale className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Atendimento Nacional</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-primary/10">
                  <Landmark className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium text-foreground">Estrutura Sólida</span>
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground uppercase tracking-widest font-semibold px-8"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Consultar Especialista <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
