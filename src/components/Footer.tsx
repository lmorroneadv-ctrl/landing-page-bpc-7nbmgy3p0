import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import logoImg from '@/assets/editedimage_1773665784218-3810f.png'

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-900/30 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" className="mb-6 inline-block">
              <img
                src={logoImg}
                alt="Lucas Morrone Advocacia"
                className="h-20 md:h-24 w-auto object-contain drop-shadow-[0_0_10px_rgba(202,138,4,0.1)]"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
              Escritório de advocacia especializado em Direito Previdenciário, com foco em Benefício
              de Prestação Continuada (BPC/LOAS). Comprometidos com a defesa dos seus direitos.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-950/50 border border-yellow-900/50 flex items-center justify-center text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-950/50 border border-yellow-900/50 flex items-center justify-center text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-yellow-950/50 border border-yellow-900/50 flex items-center justify-center text-yellow-500 hover:bg-yellow-600 hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 lg:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">Links Úteis</h4>
            <ul className="space-y-4 text-center md:text-left">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  to="/guia-bpc"
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  Guia do BPC
                </Link>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-gray-400 hover:text-yellow-500 transition-colors text-sm"
                >
                  Sobre o Escritório
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col items-center md:items-start">
            <h4 className="text-white font-semibold text-lg mb-6 tracking-wide">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-yellow-600 shrink-0" />
                <span>contato@lucasmorrone.adv.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-900/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Lucas Morrone Advocacia Previdenciária. Todos os
            direitos reservados.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right">OAB/SP 123.456</p>
        </div>
      </div>
    </footer>
  )
}
