import { MapPin, Phone, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Location() {
  return (
    <section id="localizacao" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-yellow-600 uppercase tracking-widest mb-2">
              Localização
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Atendimento em todo o Brasil
            </h3>

            <p className="text-gray-400 text-lg mb-8">
              Nosso escritório físico está localizado em São Paulo, mas oferecemos atendimento 100%
              digital, seguro e transparente para clientes de qualquer lugar do país.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-gray-800">
                  <MapPin className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Nosso Escritório</h4>
                  <p className="text-gray-400">
                    Av. Paulista, 1000 - Conjunto 100
                    <br />
                    Bela Vista, São Paulo - SP, 01310-100
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-gray-800">
                  <Phone className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Telefone / WhatsApp</h4>
                  <p className="text-gray-400">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-900 p-3 rounded-full border border-gray-800">
                  <Clock className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Horário de Atendimento</h4>
                  <p className="text-gray-400">Segunda a Sexta: 09h às 18h</p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 rounded-none uppercase tracking-wider font-semibold w-full sm:w-auto"
              onClick={() => window.open('https://maps.google.com', '_blank')}
            >
              Ver no Google Maps
            </Button>
          </div>

          <div className="h-[400px] md:h-[500px] bg-zinc-900 relative rounded-none overflow-hidden border border-gray-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.148645517173!2d-46.65484838446979!3d-23.56309946755458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
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
