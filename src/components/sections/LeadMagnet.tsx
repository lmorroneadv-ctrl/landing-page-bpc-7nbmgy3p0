import { useState } from 'react'
import { Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function LeadMagnet() {
  const { toast } = useToast()
  const { ref, isVisible } = useScrollAnimation()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: 'Guia enviado com sucesso!',
        description: 'Verifique seu e-mail ou WhatsApp para acessar o material.',
      })
    }, 1500)
  }

  return (
    <section className="py-20 bg-primary/5 border-y border-primary/10">
      <div className="container" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className={cn('invisible', isVisible && 'animate-fade-in-up')}>
            <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full mb-6">
              Material Educativo
            </div>
            <h2 className="text-3xl font-serif font-bold mb-4 text-balance">
              Guia Gratuito: 7 Erros Que Causam a Negativa do BPC
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-balance">
              Muitos benefícios são negados por detalhes que poderiam ser evitados. Baixe nosso guia
              informativo e entenda como preparar sua documentação com maior segurança.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <Input
                required
                type="text"
                placeholder="Seu Nome Completo"
                className="bg-background"
              />
              <Input
                required
                type="email"
                placeholder="Seu Melhor E-mail"
                className="bg-background"
              />
              <Input
                required
                type="tel"
                placeholder="Seu WhatsApp (com DDD)"
                className="bg-background"
              />
              <Button type="submit" className="w-full shadow-md" disabled={isLoading}>
                {isLoading ? (
                  'Processando...'
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Baixar Guia Agora
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              Compromisso com a sua privacidade. Seus dados não serão compartilhados.
            </p>
          </div>

          <div
            className={cn('hidden lg:block relative invisible', isVisible && 'animate-fade-in-up')}
            style={{ animationDelay: '200ms' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
            <img
              src="https://img.usecurling.com/p/600/800?q=legal%20document%20contract%20pdf&color=black&dpr=2"
              alt="Mockup do Guia em PDF"
              className="relative z-10 rounded-2xl shadow-2xl border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
