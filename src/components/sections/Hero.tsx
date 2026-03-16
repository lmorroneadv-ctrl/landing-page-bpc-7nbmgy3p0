import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import profileUrl from '@/assets/perfil-10-735c9.png'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black opacity-80" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start animate-fade-in-up">
            <img
              src={logoUrl}
              alt="Lucas Morrone Logo"
              className="h-24 md:h-32 mb-8 object-contain"
            />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/50 border border-yellow-700/50 text-yellow-500 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Especialistas em BPC/LOAS
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Garanta o seu <span className="text-yellow-500">Benefício Assistencial</span> com
              Segurança
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Você ou um familiar possui alguma deficiência ou tem mais de 65 anos e não contribuiu
              para o INSS? Descubra se você tem direito a receber um salário mínimo por mês.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Análise gratuita do seu caso',
                'Atendimento humanizado e transparente',
                'Você só paga se ganhar o processo',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-200">
                  <CheckCircle2 className="text-yellow-600 shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-none px-8 py-6 text-base uppercase tracking-wider font-semibold"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Falar com Advogado Agora
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-600 to-transparent opacity-20 blur-3xl rounded-full" />
              <div className="relative border-b-4 border-yellow-600 overflow-hidden bg-zinc-900 rounded-t-full pt-12 px-8">
                <img
                  src={profileUrl}
                  alt="Dr. Lucas Morrone"
                  className="w-full h-auto object-cover object-bottom drop-shadow-2xl"
                />
              </div>

              <div className="absolute bottom-4 -left-6 md:-left-12 bg-black border border-gray-800 p-4 shadow-xl flex items-center gap-4">
                <div className="bg-yellow-600/10 p-3 rounded-full">
                  <CheckCircle2 className="text-yellow-600" size={24} />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">1000+</p>
                  <p className="text-gray-400 text-sm">Benefícios Concedidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
