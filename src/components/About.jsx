export default function About() {
  const keyFeatures = [
    {
      title: "Complete Lifecycle Expertise",
      description: "From ideation to deployment and beyond, we handle every aspect of your digital transformation journey."
    },
    {
      title: "Cutting-Edge Technology Stack", 
      description: "We work with the latest tools and frameworks to ensure your solutions are future-ready and scalable."
    },
    {
      title: "Agile Development Process",
      description: "Fast iterations, continuous feedback, and rapid delivery to bring your products to market quickly."
    },
    {
      title: "Quality-First Approach",
      description: "Rigorous testing and code reviews ensure excellence in every line of code we write."
    },
    {
      title: "Scalable Solutions", 
      description: "Built to grow with your business, our solutions can handle increasing demands and complexity."
    },
    {
      title: "Client-Centric Focus",
      description: "Your success is our success. We work as an extension of your team to achieve your goals."
    }
  ]

  const workCulture = [
    {
      icon: "🎯",
      title: "Innovation First",
      description: "Encouraging creative problem-solving"
    },
    {
      icon: "🤝", 
      title: "Collaborative Environment",
      description: "Cross-functional teamwork"
    },
    {
      icon: "📚",
      title: "Continuous Learning", 
      description: "Regular training & workshops"
    },
    {
      icon: "🌱",
      title: "Growth Mindset",
      description: "Diverse projects & new technologies"
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible arrangements"
    },
    {
      icon: "🏆",
      title: "Recognition & Rewards",
      description: "Celebrating achievements"
    }
  ]

  const companyStats = [
    { number: "2025", label: "Founded Year" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "3", label: "Office Locations" }
  ]

  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-semibold text-slate-900 mb-6">
              Your Trusted Partner for Complete Digital Transformation
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              AppDost is your trusted partner for complete digital transformation. We are a dynamic, 
              innovation-driven IT solutions provider specializing in turning visionary ideas into 
              powerful, market-ready products.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our mission is to empower businesses with cutting-edge technology solutions that drive 
              growth, enhance user experiences, and create lasting digital impact. Since 2025, we've 
              been delivering innovative IT solutions with cutting-edge technology and expert craftsmanship.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl font-semibold text-accent-600 mb-1">{stat.number}</div>
                  <div className="text-slate-500 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            {keyFeatures.slice(0, 3).map((feature, index) => (
              <div key={index} className="border-l-4 border-accent-600 pl-6 py-2">
                <h4 className="text-slate-900 font-semibold mb-1">{feature.title}</h4>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose AppDost - Detailed */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-slate-900 text-center mb-4">Why Choose AppDost?</h3>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            We combine technical expertise with business understanding to deliver exceptional results
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">✓</span>
                </div>
                <h4 className="text-slate-900 font-semibold mb-2">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work Culture & Values */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-3xl font-semibold text-slate-900 text-center mb-4">Work Culture & Values</h3>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            At AppDost, we believe in creating an environment that fosters innovation, collaboration, and growth
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workCulture.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 bg-white rounded-lg p-4">
                <div className="text-2xl">{value.icon}</div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">{value.title}</h4>
                  <p className="text-slate-600 text-sm">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-slate-600 mb-4">Ready to join our innovative team?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Join Our Team</button>
              <button className="btn-secondary">Learn More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}