import { useState, useEffect } from 'react'
import { Menu, X, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
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

  const navLinks = [
    { name: 'Início', href: '/#inicio' },
    { name: 'Serviços', href: '/#servicos' },
    { name: 'Quem Sou', href: '/#quem-sou' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Guia BPC', href: '/guia-bpc', isRoute: true },
    { name: 'Contato', href: '/#contato' },
  ]

  const isHome = location.pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md py-3 border-b border-border/50'
          : 'bg-background md:bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded bg-gold/10 border border-gold/30 text-gold group-hover:bg-gold/20 transition-colors shadow-gold">
            <Scale size={24} strokeWidth={1.5} className="md:w-7 md:h-7" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold leading-none tracking-wide text-white">
              LUCAS MORRONE
            </span>
            <span className="text-[9px] md:text-[10px] font-sans tracking-[0.25em] text-gold uppercase mt-1.5">
              Advocacia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ),
          )}
          <Button
            asChild
            className="bg-gold text-primary-foreground hover:bg-gold/90 font-bold shadow-gold"
          >
            <a
              href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground hover:text-gold transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-5 flex flex-col gap-5 shadow-lg animate-in slide-in-from-top-2">
          {navLinks.map((link) =>
            link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-base font-medium text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={isHome ? link.href : `/${link.href}`}
                className="text-base font-medium text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ),
          )}
          <Button
            asChild
            className="w-full bg-gold text-primary-foreground hover:bg-gold/90 font-bold mt-2 shadow-gold"
          >
            <a
              href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Consulta
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
