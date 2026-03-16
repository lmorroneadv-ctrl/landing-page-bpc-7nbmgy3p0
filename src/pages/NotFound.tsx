import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111111] flex flex-col items-center justify-center p-4">
      <h1 className="text-6xl font-bold text-gold mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Página não encontrada</h2>
      <p className="text-foreground/70 mb-8 text-center max-w-md">
        Desculpe, a página que você está procurando não existe ou foi movida.
      </p>
      <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  )
}
