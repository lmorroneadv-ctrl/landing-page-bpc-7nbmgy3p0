import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function BpcHero() {
  return (
    <section className="relative pt-32 pb-20 bg-slate-100 text-slate-900 min-h-[70vh] flex items-center border-b border-slate-200">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=law%20office%20bright&color=white')] bg-cover bg-center opacity-15 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-white/90 to-white/70" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src={logoUrl}
            alt="Logotipo Lucas Morrone Advocacia"
            className="h-24 md:h-32 mb-8 object-contain drop-shadow-sm"
          />

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold-dark mb-8 shadow-sm">
            <FileText size={18} />
            <span className="text-sm font-bold uppercase tracking-wider">Guia Informativo</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-slate-900 tracking-tight">
            Informações sobre o <span className="text-gold">BPC/LOAS</span>
          </h1>

          <p className="text-xl text-slate-700 mb-10 max-w-2xl leading-relaxed font-medium">
            Entenda os requisitos e regras do Benefício de Prestação Continuada. Conteúdo
            estritamente informativo para conhecimento dos seus direitos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-dark text-black rounded-none px-8 py-6 uppercase tracking-wider font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
              onClick={() => window.open('https://wa.me/5553981063023', '_blank')}
            >
              Falar com um Especialista
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
