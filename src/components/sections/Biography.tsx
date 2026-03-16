import profileUrl from '@/assets/perfil-10-735c9.png'
import { Scale, GraduationCap, Award } from 'lucide-react'

export function Biography() {
  return (
    <section id="sobre" className="py-24 bg-zinc-950 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 border border-yellow-600/30 translate-x-4 translate-y-4" />
            <img
              src={profileUrl}
              alt="Dr. Lucas Morrone"
              className="relative z-10 w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="order-1 md:order-2 flex flex-col items-start">
            <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
              Sobre o Advogado
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Dr. Lucas Morrone</h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
              <p>
                Com anos de atuação exclusiva no Direito Previdenciário, construí minha carreira com
                um propósito claro: garantir dignidade e justiça para aqueles que mais precisam
                através do Benefício de Prestação Continuada (BPC/LOAS).
              </p>
              <p>
                Acredito que o acesso à informação e uma representação legal de excelência são
                fundamentais para transformar vidas. Minha equipe e eu trabalhamos incansavelmente
                para reverter negativas do INSS e assegurar seus direitos.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 w-full">
              <div className="flex gap-4">
                <GraduationCap className="text-yellow-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-white">Especialista</h4>
                  <p className="text-sm text-gray-400">Pós-graduado em Direito Previdenciário</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Scale className="text-yellow-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-white">Experiência</h4>
                  <p className="text-sm text-gray-400">Atuação exclusiva e focada no INSS</p>
                </div>
              </div>

              <div className="flex gap-4 sm:col-span-2">
                <Award className="text-yellow-600 shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-white">OAB/SP 123.456</h4>
                  <p className="text-sm text-gray-400">
                    Inscrito regularmente nos quadros da Ordem dos Advogados do Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
