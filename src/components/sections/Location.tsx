import { MapPin, Phone, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export default function Location() {
  return (
    <section id="contato" className="py-20 bg-[#111111]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Localização & <span className="text-gold">Contato</span>
          </h2>
          <p className="text-foreground/70 text-lg">
            Atendimento presencial em nossa sede em Rio Grande e em Pelotas mediante agendamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-[#1A1A1A] border-border overflow-hidden h-full">
            <CardContent className="p-0 h-[400px] lg:h-full min-h-[400px]">
              <iframe
                title="Mapa do Escritório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3381.802187688229!2d-52.09886752427847!3d-32.04618787396783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95119c8ca601e3b5%3A0x6e27bcfb9264c8c7!2sAv.%20Silva%20Paes%2C%20293%20-%20Centro%2C%20Rio%20Grande%20-%20RS%2C%2096200-340!5e0!3m2!1spt-BR!2sbr!4v1709215000000!5m2!1spt-BR!2sbr"
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
            <Card className="bg-[#1A1A1A] border-border">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Endereço Principal</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Av. Silva Paes, 293
                    <br />
                    Centro, Rio Grande - RS
                    <br />
                    CEP: 96200-340
                  </p>
                  <p className="mt-3 text-sm text-gold font-medium">
                    *Atendimento em Pelotas sob agendamento prévio.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-border">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <Phone className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Contato</h3>
                  <p className="text-foreground/80 mb-1">
                    WhatsApp:{' '}
                    <a
                      href="https://wa.me/5553999998235"
                      className="hover:text-gold transition-colors"
                    >
                      (53) 99999-8235
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1A1A1A] border-border">
              <CardContent className="p-8 flex items-start gap-4">
                <div className="bg-gold/10 p-3 rounded-full shrink-0">
                  <Clock className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Horário de Atendimento</h3>
                  <p className="text-foreground/80">
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
