import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Check, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Ebook() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && contact.trim()) {
      setIsSubmitted(true)
      navigate('/guia-bpc')
    }
  }

  return (
    <section id="guia-bpc" className="py-20 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* E-book Visual */}
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-gold/40 rounded-r-xl rounded-l-sm shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.2),_0_0_20px_rgba(212,175,55,0.15)] flex flex-col items-center justify-center p-6 text-center transform -rotate-2 hover:rotate-0 transition-all duration-500 group">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 rounded-l-sm"></div>
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/10 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 rounded-r-xl rounded-l-sm"></div>

              <div className="relative z-20 flex flex-col items-center h-full w-full">
                <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-gold mb-6 mt-4 group-hover:scale-110 transition-transform duration-500" />
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 uppercase tracking-widest text-gold/80">
                  Guia Informativo
                </h3>
                <h4 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                  TUDO SOBRE
                  <br />
                  <span className="text-gold">BPC/LOAS</span>
                </h4>

                <div className="mt-auto pt-6 border-t border-gold/20 w-full">
                  <p className="text-[10px] sm:text-xs text-slate-300 uppercase tracking-widest font-medium">
                    Lucas Morrone Advocacia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content and Form */}
          <div className="w-full lg:w-7/12 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Acesse nosso Guia Informativo: <br className="hidden md:block" />
              <span className="text-gold-dark">Informações sobre BPC/LOAS</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 font-medium">
              Entenda seus direitos com o nosso conteúdo exclusivo e detalhado de forma estritamente
              informativa.
            </p>

            <div className="mb-8 space-y-3">
              {[
                'Requisitos atualizados',
                'Regras do benefício',
                'Informações de elegibilidade',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center mr-3">
                    <Check className="h-3.5 w-3.5 text-gold-dark" />
                  </div>
                  <span className="text-foreground font-medium text-base md:text-lg">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-card p-6 sm:p-8 rounded-xl border border-border shadow-soft"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-semibold">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    className="bg-background border-border focus-visible:ring-gold h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-foreground font-semibold">
                    WhatsApp ou E-mail
                  </Label>
                  <Input
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Seu melhor contato"
                    required
                    className="bg-background border-border focus-visible:ring-gold h-12"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-black font-bold h-14 mt-4 transition-all duration-300 shadow-md text-sm sm:text-base"
                >
                  ACESSAR O GUIA AGORA
                </Button>
              </form>
            ) : (
              <div className="bg-card p-8 sm:p-10 rounded-xl border border-gold/30 shadow-md text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-gold-dark" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Tudo Certo!</h3>
                <p className="text-muted-foreground mb-8 text-lg font-medium">
                  Seu guia está pronto para acesso. Clique no botão abaixo para ler todo o material
                  agora mesmo.
                </p>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-black font-bold h-14 px-8 text-base shadow-sm"
                >
                  <Link to="/guia-bpc">
                    <BookOpen className="mr-2 h-5 w-5" /> Acessar Guia Completo Agora
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
