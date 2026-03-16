import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/editedimage_1773665784218-3810f.png'

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

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Guia BPC', href: '/guia-bpc' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-yellow-600/20 py-3'
          : 'bg-black/80 backdrop-blur-sm border-transparent py-5',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img
            src={logoImg}
            alt="Lucas Morrone Advocacia Previdenciária"
            className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(202,138,4,0.2)]"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-sm font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Button className="bg-yellow-600 hover:bg-yellow-700 text-white border-none gap-2">
            <Phone className="w-4 h-4" />
            Fale Conosco
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-gray-300 hover:text-yellow-500"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={cn(
            'fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300 md:hidden',
            isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
          )}
        >
          <ul className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="text-2xl font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="text-2xl font-medium text-gray-300 hover:text-yellow-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
            <li>
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white mt-4 gap-2">
                <Phone className="w-5 h-5" />
                Agendar Consulta
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
