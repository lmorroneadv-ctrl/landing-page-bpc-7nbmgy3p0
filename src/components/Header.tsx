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
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-md py-2' : 'bg-black py-4',
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="Lucas Morrone Advocacia"
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
              className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('localizacao')}
              className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Dúvidas
            </button>
            <Link
              to="/guia-bpc"
              className="text-white hover:text-yellow-500 transition-colors text-sm uppercase tracking-wider font-medium"
            >
              Guia BPC
            </Link>
            <Button
              className="bg-yellow-600 hover:bg-yellow-700 text-white rounded-none px-6 uppercase text-sm tracking-wider"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Fale Conosco
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black border-t border-gray-800 shadow-xl py-4 flex flex-col items-center gap-4">
          <button onClick={() => scrollToSection('servicos')} className="text-white text-lg py-2">
            Serviços
          </button>
          <button onClick={() => scrollToSection('sobre')} className="text-white text-lg py-2">
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('localizacao')}
            className="text-white text-lg py-2"
          >
            Localização
          </button>
          <button onClick={() => scrollToSection('faq')} className="text-white text-lg py-2">
            Dúvidas
          </button>
          <Link
            to="/guia-bpc"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white text-lg py-2"
          >
            Guia BPC
          </Link>
          <Button
            className="bg-yellow-600 hover:bg-yellow-700 text-white w-[90%] mt-2 rounded-none uppercase tracking-wider"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            Fale com um Advogado
          </Button>
        </div>
      )}
    </header>
  )
}
