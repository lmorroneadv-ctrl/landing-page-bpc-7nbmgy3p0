import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
            <img
              src={logoUrl}
              alt="Logotipo Lucas Morrone Advocacia Especialista em INSS"
              className="h-32 object-contain mb-6 mix-blend-screen"
            />
            <p className="text-sm text-center md:text-left text-slate-400 font-medium">
              Especialistas em Direito Previdenciário e concessão do benefício BPC/LOAS. Garantindo
              seus direitos com excelência e agilidade.
            </p>
          </div>

          <div>
            <h3 className="text-slate-100 text-lg font-bold mb-6 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-amber-500 shrink-0 mt-1" />
                <div className="flex flex-col gap-1 text-slate-400 font-medium">
                  <a
                    href="https://wa.me/5553981063023"
                    className="hover:text-amber-400 transition-colors"
                  >
                    (53) 98106-3023
                  </a>
                  <a href="tel:+5553999998235" className="hover:text-amber-400 transition-colors">
                    (53) 99999-8235
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <a
                  href="mailto:contato@lucasmorrone.adv.br"
                  className="text-slate-400 font-medium hover:text-amber-400 transition-colors"
                >
                  contato@lucasmorrone.adv.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 text-lg font-bold mb-6 uppercase tracking-wider">
              Endereço
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400 font-medium">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-1" />
                <span>
                  Av. Silva Paes, 293, centro
                  <br />
                  Rio Grande - RS
                  <br />
                  CEP: 96200-340
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 text-lg font-bold mb-6 uppercase tracking-wider">
              Links & Guias
            </h3>
            <ul className="space-y-4 text-slate-400 font-medium flex flex-col items-start">
              <li>
                <Link
                  to="/curriculo"
                  className="hover:text-amber-400 transition-colors font-bold text-slate-100"
                >
                  Currículo do Advogado
                </Link>
              </li>
              <li>
                <Link to="/guia-bpc" className="hover:text-amber-400 transition-colors">
                  Guia BPC/LOAS
                </Link>
              </li>
              <li>
                <Link
                  to="/guia-auxilio-acidente"
                  className="hover:text-amber-400 transition-colors"
                >
                  Guia Auxílio-Acidente
                </Link>
              </li>
              <li>
                <Link to="/guia-pensao-morte" className="hover:text-amber-400 transition-colors">
                  Guia Pensão por Morte
                </Link>
              </li>
              <li>
                <Link to="/guia-aposentadorias" className="hover:text-amber-400 transition-colors">
                  Guia de Aposentadorias
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-100 text-lg font-bold mb-6 uppercase tracking-wider">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adv.lucasmorrone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 transition-colors group border border-slate-800 hover:border-amber-500"
                aria-label="Instagram de Lucas Morrone"
              >
                <Instagram size={20} className="text-slate-300 group-hover:text-black" />
              </a>
              <a
                href="https://www.facebook.com/p/Lucas-Morrone-Advocacia-100042065540026/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 transition-colors group border border-slate-800 hover:border-amber-500"
                aria-label="Facebook de Lucas Morrone"
              >
                <Facebook size={20} className="text-slate-300 group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-12 pt-8 text-center text-sm text-slate-500 font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:items-start items-center gap-1">
            <p>
              &copy; {new Date().getFullYear()} Lucas Morrone Advocacia. Todos os direitos
              reservados.
            </p>
            <p className="text-xs opacity-70">Última atualização do currículo em 12/02/2024</p>
          </div>
          <p>OAB/RS 107485</p>
        </div>
      </div>
    </footer>
  )
}
