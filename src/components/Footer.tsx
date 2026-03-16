import { Scale, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-sm">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-xl leading-none text-white">
                Lucas Morrone
              </span>
              <span className="text-[10px] uppercase tracking-wider text-white/60">
                Advocacia Especializada
              </span>
            </div>
          </div>
          <p className="text-sm text-white/60 max-w-xs mt-4">
            Especialistas em Direito Previdenciário com foco na aprovação de Benefícios de Prestação
            Continuada (BPC).
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 relative inline-block">
            Links Rápidos
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#inicio" className="hover:text-primary transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#como-funciona" className="hover:text-primary transition-colors">
                Como Funciona o Processo
              </a>
            </li>
            <li>
              <a href="#depoimentos" className="hover:text-primary transition-colors">
                Histórias de Sucesso
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-primary transition-colors">
                Dúvidas Frequentes
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 relative inline-block">
            Contato
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>
                Av. Paulista, 1000, Sala 502
                <br />
                São Paulo - SP, 01310-100
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>(11) 99999-9999</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contato@lucasmorrone.adv.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} Lucas Morrone Advocacia. Todos os direitos reservados. OAB/SP
          123.456.
        </p>
        <p className="text-xs text-white/40 max-w-xl text-center md:text-right">
          A contratação de advogado não garante ganho de causa. Este site tem caráter informativo e
          respeita o Código de Ética e Disciplina da OAB.
        </p>
      </div>
    </footer>
  )
}
