import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck, Scale, FileText } from 'lucide-react'
import logoImg from '@/assets/editedimage_1773665784218-3810f.png'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 pb-12">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/20 via-black to-black"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <div className="animate-fade-in-up flex justify-center w-full mb-8">
          <img
            src={logoImg}
            alt="Lucas Morrone Advocacia"
            className="h-32 md:h-48 lg:h-56 w-auto object-contain drop-shadow-[0_0_15px_rgba(202,138,4,0.3)]"
          />
        </div>

        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-950/50 border border-yellow-600/30 text-yellow-500 text-sm font-medium mb-6 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <ShieldCheck className="w-4 h-4" />
          Especialistas em Direito Previdenciário
        </span>

        <h1
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white max-w-4xl tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Garanta seu{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Benefício BPC/LOAS
          </span>{' '}
          com Segurança
        </h1>

        <p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Atendimento humanizado e especializado para idosos e pessoas com deficiência. Lutamos pelo
          seu direito a um salário mínimo mensal.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <Button
            size="lg"
            className="bg-yellow-600 hover:bg-yellow-700 text-white h-14 px-8 text-lg font-semibold rounded-md"
          >
            Avaliar meu caso gratuitamente
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl border-t border-yellow-900/30 pt-10 animate-fade-in-up"
          style={{ animationDelay: '500ms' }}
        >
          {[
            {
              icon: Scale,
              title: 'Análise Especializada',
              desc: 'Avaliamos seu caso detalhadamente',
            },
            {
              icon: FileText,
              title: 'Processo Ágil',
              desc: 'Burocracia resolvida por especialistas',
            },
            {
              icon: ShieldCheck,
              title: 'Segurança Jurídica',
              desc: 'Atuação transparente e ética',
            },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-yellow-950/50 border border-yellow-600/30 flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-900/50 transition-colors">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-white font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
