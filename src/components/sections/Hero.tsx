import { Button } from '@/components/ui/button'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import logoImg from '@/assets/editedimage_1773665784218-e3bbb.png'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#d4af37]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="flex justify-center mb-10">
          <img
            src={logoImg}
            alt="Lucas Morrone Advocacia Logo"
            className="w-48 md:w-64 lg:w-72 h-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] animate-fade-in-up"
          />
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] mb-8 animate-fade-in-up"
          style={{ animationDelay: '100ms' }}
        >
          <ShieldCheck className="w-4 h-4" />
          <span className="text-sm font-semibold tracking-wide uppercase">
            Especialistas em BPC/LOAS
          </span>
        </div>

        <h1
          className="text-4xl md:text-5xl lg:text-6xl/tight font-bold tracking-tight text-white mb-6 max-w-4xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '200ms' }}
        >
          Garantimos o seu benefício <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4af37] to-[#f3e5ab]">
            com segurança e agilidade
          </span>
        </h1>

        <p
          className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          Não deixe que a burocracia do INSS impeça você de receber o que é seu por direito. Nossa
          equipe é especialista em aprovar Benefícios de Prestação Continuada de forma rápida.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '400ms' }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto text-lg h-14 px-8 bg-[#d4af37] hover:bg-[#b5952f] text-black font-bold rounded-md shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Quero meu Benefício
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
