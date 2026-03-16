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
    <div className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-border p-4 z-50 shadow-2xl animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80 text-center sm:text-left">
          Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando,
          você concorda com a nossa política de privacidade e uso de cookies.
        </p>
        <div className="flex gap-3 shrink-0">
          <Button
            variant="outline"
            className="border-border text-foreground/80 hover:text-white"
            onClick={() => setIsVisible(false)}
          >
            Recusar
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={handleAccept}
          >
            Aceitar Cookies
          </Button>
        </div>
      </div>
    </div>
  )
}
