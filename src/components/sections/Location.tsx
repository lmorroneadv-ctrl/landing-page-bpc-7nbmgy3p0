import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export function Location() {
  return (
    <section id="contato" className="py-24 bg-muted border-t border-border">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Contato</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground font-serif">
            Atendimento Nacional
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl font-light">
            Nossa estrutura 100% digital permite excelência jurídica em todo o Brasil. Estamos
            prontos para atender você com máxima agilidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Endereço Sede</h4>
                <p className="text-muted-foreground">Av. Paulista, 1000 - Bela Vista</p>
                <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
                <p className="text-sm text-primary mt-2 italic">
                  *Atendimento presencial sob agendamento
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">Telefone / WhatsApp</h4>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">E-mail</h4>
                <p className="text-muted-foreground">contato@lucasmorrone.adv.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-foreground mb-1">
                  Horário de Atendimento
                </h4>
                <p className="text-muted-foreground">Segunda a Sexta: 09h às 18h</p>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full rounded-xl overflow-hidden border border-border bg-card">
            {/* Simple map placeholder - in a real app, use Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973617195796!2d-46.65487738502213!3d-23.561348884682496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(1) invert(0.9) hue-rotate(180deg) opacity(0.8)',
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
