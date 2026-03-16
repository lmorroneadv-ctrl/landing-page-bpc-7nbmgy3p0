import { MapPin } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

export function Location() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 bg-background">
      <div className="container" ref={ref}>
        <div className={cn('text-center mb-12 invisible', isVisible && 'animate-fade-in-up')}>
          <h2 className="text-3xl font-serif font-bold mb-4">Onde Estamos</h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mt-4">
            <MapPin className="w-5 h-5 text-primary" />
            <p className="text-lg">Av. Silva Paes, 293, Rio Grande - RS, 96200-340</p>
          </div>
        </div>

        <div
          className={cn(
            'rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] invisible',
            isVisible && 'animate-fade-in-up',
          )}
          style={{ animationDelay: '200ms' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.284381710924!2d-52.09914482431718!3d-32.03058867399434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119cf2c0c73321%3A0xc3f958fba2bbbf8a!2sAv.%20Silva%20Paes%2C%20293%20-%20Centro%2C%20Rio%20Grande%20-%20RS%2C%2096200-340!5e0!3m2!1spt-BR!2sbr!4v1710600000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Escritório Lucas Morrone"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
