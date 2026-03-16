import { MapPin, Phone, Scale } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#050810] border-t border-border/30 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded bg-gold/10 border border-gold/30 text-gold">
                <Scale size={20} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold leading-none tracking-wide text-white">
                  LUCAS MORRONE
                </span>
                <span className="text-[10px] font-sans tracking-[0.25em] text-gold uppercase mt-1">
                  Advocacia
                </span>
              </div>
            </div>
            <p className="text-gold font-medium mb-6 text-sm uppercase tracking-widest">
              OAB/RS 107485
            </p>
            <p className="text-foreground/60 text-sm leading-relaxed max-w-sm font-light">
              Atuação técnica e ética na defesa dos direitos previdenciários. Foco em soluções
              administrativas e judiciais para garantir segurança aos nossos clientes.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Serviços', 'Quem Sou', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-foreground/60 hover:text-gold text-sm transition-colors font-light"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-serif font-bold text-white mb-6">Contato</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold mr-4 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-foreground/60 text-sm font-light leading-relaxed">
                  Av. Silva Paes, 293
                  <br />
                  Rio Grande, RS
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-4 shrink-0" strokeWidth={1.5} />
                <a
                  href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-gold text-sm transition-colors font-light"
                >
                  (53) 98106-3023
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/40 text-xs text-center md:text-left font-light tracking-wide">
            &copy; {currentYear} Lucas Morrone Advocacia. Todos os direitos reservados.
          </p>
          <p className="text-foreground/40 text-xs text-center md:text-right max-w-2xl font-light leading-relaxed">
            As informações contidas neste site possuem caráter estritamente informativo, não
            configurando promessa de resultados. O exercício da advocacia submete-se ao Código de
            Ética e Disciplina da OAB.
          </p>
        </div>
      </div>
    </footer>
  )
}
