import { MessageCircle } from 'lucide-react'

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5553999998235?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS)."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75"></div>

        <div className="relative bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-xl transition-transform duration-300 transform group-hover:scale-110 flex items-center justify-center">
          <MessageCircle className="h-7 w-7" />
        </div>

        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-[#111111] shadow-sm">
          2
        </div>
      </div>
    </a>
  )
}
