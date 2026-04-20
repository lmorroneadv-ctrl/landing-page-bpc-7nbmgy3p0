export function SocialProof() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que dizem nossos <span className="text-gold-dark">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            O compromisso com a excelência técnica reflete na confiança de quem busca a garantia de
            seus direitos.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <img
            src="/google-reviews.png"
            alt="Avaliações de clientes no Google"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-xl border border-border/50"
            onError={(e) => {
              e.currentTarget.src = 'https://img.usecurling.com/p/1200/600?q=customer%20reviews'
            }}
          />
        </div>
      </div>
    </section>
  )
}
