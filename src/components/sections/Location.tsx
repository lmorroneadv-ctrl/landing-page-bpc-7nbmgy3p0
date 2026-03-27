import { MapPin, Phone, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Localização & <span className="text-gold-dark">Contato</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Atendimento presencial em nossa sede em Rio Grande e em Pelotas mediante agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-card border-border shadow-soft overflow-hidden h-full">
            <CardContent className="p-0 h-[400px] lg:h-full min-h-[400px]">
              <iframe
                title="Mapa do Escritório"
                src="https://maps.google.com/maps?q=Av.%20Silva%20Paes,%20293,%20Rio%20Grande%20-%20RS&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Endereço Principal</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">
                    Av. Silva Paes, 293, centro
                    <br />
                    Rio Grande - RS
                    <br />
                    CEP: 96200-340
                  </p>
                  <p className="mt-3 text-sm text-gold-dark font-semibold">
                    *Atendimento em Pelotas sob agendamento prévio.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Contato</h3>
                  <p className="text-muted-foreground font-medium mb-1">
                    WhatsApp/Telefone:{' '}
                    <a
                      href="https://wa.me/5553981063023?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-gold-dark font-semibold transition-colors"
                    >
                      (53) 98106-3023
                    </a>
                  </p>
                  <p className="text-muted-foreground font-medium">
                    Telefone Secundário:{' '}
                    <a
                      href="tel:+5553999998235"
                      className="text-foreground hover:text-gold-dark font-semibold transition-colors"
                    >
                      (53) 99999-8235
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-soft">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Horário de Atendimento</h3>
                  <p className="text-muted-foreground font-medium">
                    Segunda a Sexta-feira
                    <br />
                    09:00 às 12:00 e 13:30 às 18:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
