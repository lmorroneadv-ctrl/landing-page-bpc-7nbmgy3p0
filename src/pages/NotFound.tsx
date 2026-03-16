import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-gold mb-4 font-serif">404</h1>
      <h2 className="text-3xl font-bold text-white mb-6 text-center font-serif">
        Página não encontrada
      </h2>
      <p className="text-foreground/70 mb-8 text-center max-w-md font-light">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Button
        asChild
        className="bg-gold text-primary-foreground hover:bg-gold/90 font-bold px-8 shadow-gold"
      >
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  )
}
