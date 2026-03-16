import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoUrl from '@/assets/editedimage_1773665784218-dc625.png'

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Depoimentos', href: '#depoimentos' },
  { name: 'Dúvidas', href: '#faq' },
  { name: 'Contato', href: '#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const isHomePage = window.location.pathname === '/'

    if (!isHomePage && href.startsWith('#')) {
      window.location.href = '/' + href
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-border py-3 shadow-md'
          : 'bg-background border-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src={logoUrl}
            alt="Lucas Morrone Advocacia Previdenciária"
            className="h-12 md:h-16 w-auto object-contain mix-blend-lighten"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Fale com um Advogado
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-background flex flex-col pt-24 px-6 lg:hidden transition-transform duration-300 ease-in-out',
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          )}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border pb-4"
              >
                {link.name}
              </a>
            ))}
            <Button
              className="mt-4 w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg h-12"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Fale com um Advogado
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
