import reviewsImage from '@/assets/image-f3b61.png'

export function SocialProof() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que dizem nossos <span className="text-gold-dark">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            O compromisso com a excelência técnica reflete na confiança de quem busca a garantia de
            seus direitos.
          </p>
        </div>

        <div className="w-full flex justify-center px-2 sm:px-4">
          <img
            src={reviewsImage}
            alt="Avaliações de clientes no Google"
            className="w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg border border-border/20 object-contain"
          />
        </div>
      </div>
    </section>
  )
}
