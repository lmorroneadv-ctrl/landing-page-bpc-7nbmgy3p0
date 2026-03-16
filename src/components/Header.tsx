import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoImg from '@/assets/editedimage_1773665784218-e3bbb.png'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#d4af37]/20">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <span className="sr-only">Lucas Morrone Advocacia</span>
              <img
                src={logoImg}
                alt="Lucas Morrone Advocacia"
                className="h-14 w-auto object-contain"
              />
            </a>
          </div>
          <div className="hidden ml-10 space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex">
            <Button
              className="bg-[#d4af37] hover:bg-[#b5952f] text-black font-semibold"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Falar com Advogado
            </Button>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-[#d4af37]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            'lg:hidden absolute w-full left-0 bg-[#0a0a0a] border-b border-[#d4af37]/20 transition-all duration-300 ease-in-out overflow-hidden shadow-xl',
            isMenuOpen
              ? 'top-[88px] max-h-96 opacity-100 py-4'
              : 'top-[88px] max-h-0 opacity-0 py-0 border-transparent',
          )}
        >
          <div className="flex flex-col space-y-4 px-4 pb-4">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-gray-300 hover:text-[#d4af37] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full bg-[#d4af37] hover:bg-[#b5952f] text-black font-semibold mt-4"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              Falar com Advogado
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
