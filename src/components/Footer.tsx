import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Scale } from 'lucide-react'
import logoUrl from '@/assets/editedimage_1773665784218-dc625.png'

export function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 space-y-6">
            <Link to="/">
              <img
                src={logoUrl}
                alt="Lucas Morrone Advocacia"
                className="h-20 w-auto mix-blend-lighten"
              />
            </Link>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Escritório de advocacia especializado em Direito Previdenciário, focado em entregar
              resultados com ética, transparência e agilidade em todo o Brasil.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-muted text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground font-serif">Áreas de Atuação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Benefício Assistencial (BPC/LOAS)
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Aposentadoria por Idade
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Aposentadoria por Invalidez
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Pensão por Morte
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Revisão de Benefícios
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground font-serif">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  O Escritório
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-foreground font-serif">Jurídico</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Scale className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">OAB/SP 123.456</span>
              </div>
              <p className="text-sm text-muted-foreground font-light">CNPJ: 00.000.000/0001-00</p>
              <Link
                to="/politica-de-privacidade"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block mt-4"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos-de-uso"
                className="text-sm text-muted-foreground hover:text-primary transition-colors block"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-muted-foreground font-light">
            © {new Date().getFullYear()} Lucas Morrone Advocacia Previdenciária. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground font-light">
            Desenvolvido com excelência técnica.
          </p>
        </div>
      </div>
    </footer>
  )
}
