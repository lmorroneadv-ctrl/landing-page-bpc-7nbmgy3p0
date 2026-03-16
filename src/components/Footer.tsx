import { MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Lucas Morrone</h3>
            <p className="text-gold font-medium mb-6">Advogado Previdenciário — OAB/RS 107485</p>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-sm">
              Atuação técnica e ética na defesa dos direitos previdenciários. Foco em soluções
              administrativas e judiciais para garantir segurança aos nossos clientes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {['Início', 'Serviços', 'Quem Sou', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-foreground/70 hover:text-gold text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-3 shrink-0" />
                <span className="text-foreground/70 text-sm">
                  Av. Silva Paes, 293, Rio Grande, RS
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3 shrink-0" />
                <a
                  href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-gold text-sm transition-colors"
                >
                  (53) 98106-3023
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/50 text-xs text-center md:text-left">
            &copy; {currentYear} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-foreground/40 text-xs text-center md:text-right max-w-2xl">
            As informações contidas neste site possuem caráter estritamente informativo, não
            configurando promessa de resultados. O exercício da advocacia submete-se ao Código de
            Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  )
}
