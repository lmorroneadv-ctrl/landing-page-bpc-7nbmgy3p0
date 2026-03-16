import { Button } from '@/components/ui/button'
import { ArrowRight, FileText } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function BpcHero() {
  return (
    <section className="relative pt-32 pb-20 bg-black text-white min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src={logoUrl}
            alt="Lucas Morrone Logo"
            className="h-28 md:h-36 mb-8 object-contain"
          />

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-900/30 border border-yellow-600/30 text-yellow-500 mb-8">
            <FileText size={18} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Guia Completo e Definitivo
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Tudo o que você precisa saber sobre o <span className="text-yellow-500">BPC/LOAS</span>
          </h1>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Entenda os requisitos, documentos necessários e como solicitar o benefício no INSS de
            forma correta para evitar negativas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-none px-8 py-6 uppercase tracking-wider font-semibold"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Fale com um Especialista
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
