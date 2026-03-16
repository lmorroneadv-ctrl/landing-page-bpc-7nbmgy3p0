import { useState, useEffect } from 'react'
import { Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-sm">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif font-bold text-lg leading-none ${isScrolled ? 'text-foreground' : 'text-foreground lg:text-white'} transition-colors`}
            >
              Lucas Morrone
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider ${isScrolled ? 'text-muted-foreground' : 'text-muted-foreground lg:text-white/80'} transition-colors`}
            >
              Advocacia Especializada
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground/80' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="shadow-gold hover:scale-105 transition-transform">
            <a href="#contato">Solicitar Análise</a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? 'text-foreground' : 'text-foreground lg:text-white'}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t">
                  <Button asChild className="w-full" size="lg">
                    <a href="#contato" onClick={() => setIsOpen(false)}>
                      Solicitar Análise Gratuita
                    </a>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
