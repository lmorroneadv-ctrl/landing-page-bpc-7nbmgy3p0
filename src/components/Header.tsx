import { useState, useEffect } from 'react'
import { Scale, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

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
    { name: 'Serviços', href: '#servicos' },
    { name: 'Quem Sou', href: '#quem-sou' },
    { name: 'Blog', href: '#blog' },
    { name: 'Publicações', href: '#publicacoes' },
    { name: 'Trabalhe Conosco', href: '#trabalhe-conosco' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 bg-[#000] border-b border-primary/10',
        isScrolled ? 'py-3 shadow-md' : 'py-5',
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 group">
          <div className="bg-primary p-1.5 rounded-sm">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-lg leading-none text-white transition-colors">
              Lucas Morrone
            </span>
            <span className="text-[10px] uppercase tracking-wider text-white/80 transition-colors">
              Advocacia Especializada
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/90 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-[#000] shadow-none transition-all"
          >
            <a href="https://wa.me/5553999998235" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="lg:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-secondary border-l-primary/20"
            >
              <SheetTitle className="sr-only text-white">Menu de Navegação</SheetTitle>
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/90 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-6 border-t border-white/10">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    size="lg"
                  >
                    <a
                      href="https://wa.me/5553999998235"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                    >
                      Falar no WhatsApp
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
