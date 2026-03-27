import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg shadow-black/30 transition-all duration-300 hover:scale-110 flex items-center justify-center group',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none',
      )}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-background border border-border text-foreground text-sm py-2 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
        Fale conosco agora
      </span>
    </a>
  )
}
