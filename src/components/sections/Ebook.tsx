import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, BookOpen, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Ebook() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && contact.trim()) {
      setIsSubmitted(true)
    }
  }

  return (
    <section
      id="ebook"
      className="py-24 bg-card border-y border-border/30 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 bg-gradient-to-br from-secondary via-background to-secondary border border-border rounded-r-xl rounded-l-sm shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.5),_0_0_20px_rgba(212,175,55,0.1)] flex flex-col items-center justify-center p-8 text-center transform -rotate-2 hover:rotate-0 transition-all duration-500 group">
              <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-background/90 via-background/40 to-transparent z-10 rounded-l-sm"></div>
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-white/5 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10 rounded-r-xl rounded-l-sm"></div>

              <div className="relative z-20 flex flex-col items-center h-full w-full">
                <Scale className="w-12 h-12 sm:w-14 sm:h-14 text-gold mb-6 mt-4 group-hover:scale-110 transition-transform duration-500 stroke-[1.5]" />
                <h3 className="text-sm sm:text-xs font-bold text-white mb-2 uppercase tracking-widest text-gold/80">
                  Guia Jurídico Gratuito
                </h3>
                <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 leading-tight">
                  Tudo Sobre
                  <br />
                  <span className="text-gold italic">BPC/LOAS</span>
                </h4>

                <div className="mt-auto pt-6 border-t border-gold/20 w-full">
                  <p className="text-[10px] text-foreground/50 uppercase tracking-[0.2em] font-sans">
                    Lucas Morrone Advocacia
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-7/12 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-serif">
              Acesse nosso Guia Gratuito: <br className="hidden md:block" />
              <span className="text-gold italic">Tudo sobre BPC/LOAS</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-8 font-light">
              Entenda seus direitos e aprenda como solicitar o benefício de forma correta com o
              nosso conteúdo exclusivo e detalhado, elaborado por especialistas.
            </p>

            <div className="mb-10 space-y-4">
              {[
                'Requisitos legais atualizados',
                'Documentação probatória necessária',
                'Erros comuns a evitar no INSS',
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mr-4">
                    <Check className="h-3.5 w-3.5 text-gold" />
                  </div>
                  <span className="text-foreground/90 font-medium text-base">{benefit}</span>
                </div>
              ))}
            </div>

            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 bg-background p-6 sm:p-8 rounded-xl border border-border/50 shadow-lg"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground/80 font-medium">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Digite seu nome completo"
                    required
                    className="bg-secondary border-border focus-visible:ring-gold h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-foreground/80 font-medium">
                    WhatsApp ou E-mail
                  </Label>
                  <Input
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Seu melhor contato"
                    required
                    className="bg-secondary border-border focus-visible:ring-gold h-12"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/90 text-primary-foreground font-bold h-14 mt-4 transition-all duration-300 shadow-gold"
                >
                  ACESSAR O GUIA AGORA
                </Button>
              </form>
            ) : (
              <div className="bg-background p-8 sm:p-10 rounded-xl border border-gold/30 shadow-gold text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/20">
                  <Check className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 font-serif">Tudo Certo!</h3>
                <p className="text-foreground/80 mb-8 text-lg font-light">
                  Seu guia está pronto para acesso. Clique no botão abaixo para ler todo o material
                  agora mesmo em nosso site.
                </p>
                <Button
                  asChild
                  className="w-full sm:w-auto bg-gold hover:bg-gold/90 text-primary-foreground font-bold h-14 px-8 text-base shadow-gold"
                >
                  <Link to="/guia-bpc">
                    <BookOpen className="mr-2 h-5 w-5" /> Acessar Guia Completo
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
