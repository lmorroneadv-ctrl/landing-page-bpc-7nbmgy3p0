import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted')
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 z-50 shadow-2xl">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left font-light">
          Utilizamos cookies essenciais para oferecer a melhor experiência em nosso site. Ao
          continuar navegando, você concorda com a nossa política de privacidade.
        </p>
        <div className="flex gap-4 shrink-0">
          <Button
            variant="outline"
            size="sm"
            onClick={acceptCookies}
            className="border-border hover:bg-muted"
          >
            Recusar Não Essenciais
          </Button>
          <Button
            size="sm"
            onClick={acceptCookies}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Aceitar Todos
          </Button>
        </div>
      </div>
    </div>
  )
}
