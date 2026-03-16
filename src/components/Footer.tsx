import logoImg from '@/assets/editedimage_1773665784218-e3bbb.png'
import { Instagram, MapPin, Phone, Mail, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#d4af37]/20 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <img
              src={logoImg}
              alt="Lucas Morrone Advocacia"
              className="h-24 w-auto object-contain mb-6 drop-shadow-lg"
            />
            <p className="text-gray-400 text-center md:text-left text-sm leading-relaxed">
              Atuação especializada em Direito Previdenciário com foco em BPC/LOAS. Compromisso com
              a excelência, ética e resultado rápido para nossos clientes.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#d4af37] rounded-full"></span>
              Links Úteis
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Sobre o Escritório
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-[#d4af37] transition-colors"
                >
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#d4af37] rounded-full"></span>
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 hover:text-[#d4af37] transition-colors">
                <Phone className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                  (11) 99999-9999
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 hover:text-[#d4af37] transition-colors">
                <Mail className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <a href="mailto:contato@lucasmorrone.adv.br">contato@lucasmorrone.adv.br</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
                <span>
                  Edifício de Negócios
                  <br />
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-6 h-1 bg-[#d4af37] rounded-full"></span>
              Horário
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="block text-white font-medium mb-1 text-sm">Segunda a Sexta</span>
                09:00 às 18:00
              </li>
              <li className="text-gray-400 bg-white/5 p-3 rounded-lg border border-white/5">
                <span className="block text-white font-medium mb-1 text-sm">Fins de Semana</span>
                Atendimento online mediante agendamento
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#d4af37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Política de Privacidade
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
