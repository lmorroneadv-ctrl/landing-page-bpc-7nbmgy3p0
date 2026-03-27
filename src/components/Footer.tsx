import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function Footer() {
  return (
    <footer className="bg-card text-muted-foreground py-16 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <img
              src={logoUrl}
              alt="Logotipo Lucas Morrone Advocacia Especialista em INSS"
              className="h-28 object-contain mb-6"
            />
            <p className="text-sm text-center md:text-left text-muted-foreground font-medium">
              Especialistas em Direito Previdenciário e concessão do benefício BPC/LOAS. Garantindo
              seus direitos com excelência e agilidade.
            </p>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-bold mb-6 uppercase tracking-wider">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold-dark shrink-0 mt-1" />
                <div className="flex flex-col gap-1 text-muted-foreground font-medium">
                  <a
                    href="https://wa.me/5553981063023"
                    className="hover:text-gold-dark transition-colors"
                  >
                    (53) 98106-3023
                  </a>
                  <a href="tel:+5553999998235" className="hover:text-gold-dark transition-colors">
                    (53) 99999-8235
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-dark shrink-0" />
                <a
                  href="mailto:contato@lucasmorrone.adv.br"
                  className="text-muted-foreground font-medium hover:text-gold-dark transition-colors"
                >
                  contato@lucasmorrone.adv.br
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground text-lg font-bold mb-6 uppercase tracking-wider">
              Endereço
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground font-medium">
                <MapPin size={18} className="text-gold-dark shrink-0 mt-1" />
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
            <h3 className="text-foreground text-lg font-bold mb-6 uppercase tracking-wider">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/adv.lucasmorrone"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gold transition-colors group border border-border"
                aria-label="Instagram de Lucas Morrone"
              >
                <Instagram size={20} className="text-foreground group-hover:text-black" />
              </a>
              <a
                href="https://www.facebook.com/p/Lucas-Morrone-Advocacia-100042065540026/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-gold transition-colors group border border-border"
                aria-label="Facebook de Lucas Morrone"
              >
                <Facebook size={20} className="text-foreground group-hover:text-black" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground font-medium flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            &copy; {new Date().getFullYear()} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
          <p>OAB/RS 107485</p>
        </div>
      </div>
    </footer>
  )
}
