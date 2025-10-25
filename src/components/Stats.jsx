export default function Stats() {
  const stats = [
    { number: "15+", label: "Projects Delivered" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2025", label: "Founded Year" }
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-5xl font-semibold text-accent-600 mb-2">
                {stat.number}
              </div>
              <div className="text-base text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}