import { Scale, MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-primary/20">
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
            Atuação ética e transparente em Direito Previdenciário, focada na orientação sobre
            benefícios assistenciais (BPC/LOAS).
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 relative inline-block">
            Links Úteis
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="#inicio" className="hover:text-primary transition-colors">
                Início
              </a>
            </li>
            <li>
              <a href="#servicos" className="hover:text-primary transition-colors">
                Serviços
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Serviço
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold text-white mb-6 relative inline-block">
            Contato & Endereço
            <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-primary"></span>
          </h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <span>
                Av. Silva Paes, 293
                <br />
                Rio Grande - RS
                <br />
                CEP: 96200-340
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary shrink-0" />
              <span>+55 53 99999-8235</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary shrink-0" />
              <span>contato@lucasmorrone.adv.br</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-white/80">Lucas Morrone Costa - OAB/RS 107485</p>
          <p className="text-xs text-white/40">
            © {currentYear} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
        </div>
        <p className="text-xs text-white/40 max-w-xl text-center md:text-right">
          Este site possui caráter estritamente informativo, em observância ao Código de Ética e
          Disciplina da OAB. A contratação de serviços não assegura garantia de resultados.
        </p>
      </div>

      {/* Simple Cookie Banner Mock */}
      <div className="fixed bottom-0 left-0 w-full bg-[#111111] border-t border-primary/20 p-4 z-[60] hidden">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70 text-center sm:text-left">
            Utilizamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa
            Política de Privacidade.
          </p>
          <button className="bg-primary text-primary-foreground text-xs px-4 py-2 rounded font-semibold whitespace-nowrap">
            Concordar e Fechar
          </button>
        </div>
      </div>
    </footer>
  )
}
