import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <img src={logoUrl} alt="Lucas Morrone Advocacia" className="h-28 object-contain mb-6" />
            <p className="text-sm text-center md:text-left text-gray-400">
              Especialistas em Direito Previdenciário e concessão do benefício BPC/LOAS. Garantindo
              seus direitos com excelência e agilidade.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-yellow-600" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-yellow-600" />
                <span>contato@lucasmorrone.adv.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">
              Endereço
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-yellow-600 shrink-0 mt-1" />
                <span>
                  Av. Paulista, 1000 - Conj. 100
                  <br />
                  Bela Vista, São Paulo - SP
                  <br />
                  01310-100
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wider">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-yellow-600 transition-colors"
              >
                <Facebook size={20} className="text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
          <p>OAB/SP 123.456</p>
        </div>
      </div>
    </footer>
  )
}
