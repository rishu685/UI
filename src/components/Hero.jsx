export default function Hero() {
  return (
    <section className="py-24 md:py-32 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
          Transform Your Ideas Into Digital Reality
        </h1>
        
        <p className="max-w-2xl mx-auto mt-6 text-slate-600">
          Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, 
          we bring innovation and excellence to every project with our expert team of developers.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Explore Our Services
          </button>
          <button className="btn-secondary">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  )
}