export function FloatingWhatsApp() {
  const whatsappUrl =
    'https://wa.me/5553999998235?text=Olá,%20Entro%20em%20contato%20para%20um%20auxílio%20jurídico%20(INSS).'

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] transition-colors rounded-full p-4 shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 group"
      aria-label="Falar no WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-white">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.334.101.154.453.725.969 1.183.664.588 1.218.769 1.377.855.159.087.253.072.347-.029l.399-.481c.116-.145.231-.116.376-.058.144.058.913.433 1.072.52.159.087.26.13.298.202.038.072.038.419-.106.824z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full border-2 border-background animate-pulse">
        2
      </span>
    </a>
  )
}
