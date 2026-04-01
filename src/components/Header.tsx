import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/editedimage_1773665784218-56dfb.png'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm py-2' : 'bg-background py-4',
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Logotipo Lucas Morrone Advocacia Previdenciária e Assistencial"
              className={cn(
                'transition-all duration-300 object-contain',
                isScrolled ? 'h-14' : 'h-20',
              )}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-gold-dark transition-colors text-sm uppercase tracking-wider font-bold"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-gold-dark transition-colors text-sm uppercase tracking-wider font-bold"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-foreground hover:text-gold-dark transition-colors text-sm uppercase tracking-wider font-bold"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-gold-dark transition-colors text-sm uppercase tracking-wider font-bold"
            >
              Dúvidas
            </button>
            <div className="relative group">
              <button className="text-foreground hover:text-gold-dark transition-colors text-sm uppercase tracking-wider font-bold flex items-center gap-1">
                Guias
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-70"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-52 z-50">
                <div className="bg-background border border-border shadow-lg rounded-md py-2 flex flex-col">
                  <Link
                    to="/guia-bpc"
                    className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold-dark font-bold tracking-wide"
                  >
                    Guia BPC/LOAS
                  </Link>
                  <Link
                    to="/guia-auxilio-acidente"
                    className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold-dark font-bold tracking-wide"
                  >
                    Auxílio-Acidente
                  </Link>
                  <Link
                    to="/guia-pensao-morte"
                    className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold-dark font-bold tracking-wide"
                  >
                    Pensão por Morte
                  </Link>
                  <Link
                    to="/guia-aposentadorias"
                    className="px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-gold-dark font-bold tracking-wide"
                  >
                    Aposentadorias
                  </Link>
                </div>
              </div>
            </div>
            <Button
              className="bg-gold hover:bg-gold/90 text-black rounded-none px-6 uppercase text-sm font-bold tracking-wider shadow-sm"
              onClick={() =>
                window.open(
                  'https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS).',
                  '_blank',
                )
              }
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-xl py-4 flex flex-col items-center gap-4">
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-foreground hover:text-gold-dark text-lg py-2 font-medium"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-foreground hover:text-gold-dark text-lg py-2 font-medium"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('localizacao')}
            className="text-foreground hover:text-gold-dark text-lg py-2 font-medium"
          >
            Localização
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-gold-dark text-lg py-2 font-medium"
          >
            Dúvidas
          </button>
          <div className="flex flex-col items-center w-full border-y border-border py-4 my-2 bg-slate-50/50">
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Guias Práticos
            </span>
            <Link
              to="/guia-bpc"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-gold-dark text-base py-2 font-medium"
            >
              Guia BPC/LOAS
            </Link>
            <Link
              to="/guia-auxilio-acidente"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-gold-dark text-base py-2 font-medium"
            >
              Guia Auxílio-Acidente
            </Link>
            <Link
              to="/guia-pensao-morte"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-gold-dark text-base py-2 font-medium"
            >
              Guia Pensão por Morte
            </Link>
            <Link
              to="/guia-aposentadorias"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-gold-dark text-base py-2 font-medium"
            >
              Guia de Aposentadorias
            </Link>
          </div>
          <Button
            className="bg-gold hover:bg-gold/90 text-black w-[90%] mt-2 rounded-none font-bold uppercase tracking-wider shadow-sm"
            onClick={() =>
              window.open(
                'https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS).',
                '_blank',
              )
            }
          >
            Fale com um Advogado
          </Button>
        </div>
      )}
    </header>
  )
}
