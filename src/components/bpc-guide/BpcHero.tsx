import { Button } from '@/components/ui/button'
import { Download, CheckCircle2 } from 'lucide-react'
import logoImg from '@/assets/editedimage_1773665784218-3810f.png'

export function BpcHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/50 border border-yellow-600/30 text-yellow-500 text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Guia Completo e Atualizado 2024
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Tudo o que você precisa saber sobre o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                BPC/LOAS
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Descubra quem tem direito, quais os requisitos e como dar entrada no Benefício de
              Prestação Continuada de forma correta e sem dores de cabeça.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white h-14 px-8 text-lg font-semibold rounded-md"
              >
                Baixar Guia PDF
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <ul className="mt-10 space-y-3 text-left w-full max-w-md">
              {[
                'Requisitos completos para idosos e PCDs',
                'Lista de documentos necessários',
                'Como comprovar a baixa renda',
                'O que fazer em caso de negativa do INSS',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-tr from-yellow-950 to-black border border-yellow-800/30 rounded-2xl flex items-center justify-center p-8 shadow-[0_0_40px_rgba(202,138,4,0.1)]">
              {/* Decorative elements */}
              <div className="absolute inset-4 border border-yellow-600/20 rounded-xl border-dashed"></div>
              <img
                src={logoImg}
                alt="Lucas Morrone Advocacia"
                className="w-4/5 h-auto object-contain drop-shadow-[0_0_20px_rgba(202,138,4,0.4)] relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
