export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We deep dive into your requirements, understand your business goals, analyze competitors, and create a comprehensive project roadmap with clear milestones."
    },
    {
      number: "2", 
      title: "Design & Prototype",
      description: "Our design team creates intuitive wireframes, stunning UI mockups, and interactive prototypes that bring your vision to life before development begins."
    },
    {
      number: "3",
      title: "Development & Testing", 
      description: "Expert developers write clean, scalable code while our QA team performs rigorous testing to ensure flawless functionality across all devices and platforms."
    },
    {
      number: "4",
      title: "Deployment & Support",
      description: "We handle the complete deployment process and provide ongoing maintenance, updates, and 24/7 technical support to keep your solution running smoothly."
    }
  ]

  return (
    <section id="process" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-slate-900 mb-4">Our Development Process</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-16">
          A proven methodology that ensures quality, efficiency, and client satisfaction
        </p>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-8">
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 bg-accent-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}