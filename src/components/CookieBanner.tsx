import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 p-4 z-50 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-5">
        <p className="text-sm text-foreground/70 text-center sm:text-left font-light">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando,
          você concorda com a nossa política de privacidade e uso de cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            className="border-border text-foreground hover:bg-secondary hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            Recusar
          </Button>
          <Button
            className="bg-gold text-primary-foreground hover:bg-gold/90 font-medium"
            onClick={handleAccept}
          >
            Aceitar Cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
