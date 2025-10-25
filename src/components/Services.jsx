export default function Services() {
  const services = [
    {
      icon: "📱",
      title: "Android App Development",
      description: "Custom Android applications built with the latest technologies to bring your ideas to life. From native to hybrid solutions, we deliver apps that perform seamlessly across all Android devices.",
      features: ["Native & Hybrid Apps", "Play Store Deployment", "Maintenance & Support", "Performance Optimization", "Security Implementation"],
      technologies: ["Kotlin", "Java", "React Native", "Flutter"],
      highlights: "4+ Mobile Apps Delivered"
    },
    {
      icon: "🌐",
      title: "Web Development", 
      description: "Responsive and scalable web applications tailored to your business needs. We create modern, fast-loading websites that provide exceptional user experiences across all devices.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps", "Custom CMS", "SEO Optimization"],
      technologies: ["React", "Next.js", "Vue.js", "Laravel", "Node.js"],
      highlights: "10+ Web Projects Completed"
    },
    {
      icon: "🎨",
      title: "UI/UX Development",
      description: "Beautiful, intuitive user interfaces that enhance user experience and engagement. We believe great design is invisible—it just works, creating seamless interactions for your users.",
      features: ["User Research", "Wireframing & Prototyping", "Brand Identity", "Usability Testing", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      highlights: "User-Centric Design Approach"
    },
    {
      icon: "💼",
      title: "CRM Software",
      description: "Comprehensive CRM solutions to manage customer relationships and boost productivity. Custom-built systems that streamline your business processes and improve customer satisfaction.",
      features: ["Custom Development", "Integration Services", "Training & Support", "Analytics Dashboard", "Workflow Automation"],
      technologies: ["PHP", "Laravel", "MySQL", "MongoDB"],
      highlights: "1 Enterprise CRM Delivered"
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses. We help you leverage the power of cloud computing for better performance and cost efficiency.",
      features: ["AWS, Azure, GCP", "Migration Services", "Performance Tuning", "Auto-scaling", "Security & Compliance"],
      technologies: ["Docker", "Kubernetes", "AWS", "Azure"],
      highlights: "24/7 Cloud Monitoring"
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Protect your business with robust security solutions and best practices. Comprehensive security audits and implementation to safeguard your digital assets from threats.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Assessment", "Security Training"],
      technologies: ["OWASP", "SSL/TLS", "Firewall", "Encryption"],
      highlights: "100% Security Compliance"
    }
  ]

  const whyChooseUs = [
    {
      icon: "✅",
      title: "Complete Lifecycle Expertise",
      description: "From ideation to deployment and beyond"
    },
    {
      icon: "⚡",
      title: "Cutting-Edge Technology Stack", 
      description: "We work with the latest tools and frameworks"
    },
    {
      icon: "🚀",
      title: "Agile Development Process",
      description: "Fast iterations, continuous feedback, rapid delivery"
    },
    {
      icon: "🎯",
      title: "Quality-First Approach",
      description: "Rigorous testing and code reviews ensure excellence"
    },
    {
      icon: "📈",
      title: "Scalable Solutions",
      description: "Built to grow with your business"
    },
    {
      icon: "🤝",
      title: "Client-Centric Focus",
      description: "Your success is our success"
    }
  ]

  const technologies = [
    "⚛️ React", "🟢 Node.js", "🐍 Python", "🍃 MongoDB", 
    "☁️ AWS", "🐳 Docker", "📱 Kotlin", "💙 TypeScript"
  ]

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-slate-900 mb-4">Our Services</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          We deliver end-to-end IT solutions that drive business growth and digital transformation
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
              
              {/* Key Features */}
              <div className="mb-4">
                <h4 className="text-slate-900 font-medium mb-2 text-sm">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-700">
                      <span className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="text-slate-900 font-medium mb-2 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent-600 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlight */}
              <div className="bg-white border border-accent-200 rounded-lg p-3">
                <p className="text-accent-600 font-medium text-sm">📊 {service.highlights}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose AppDost Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-slate-900 text-center mb-4">Why Choose AppDost?</h3>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            We combine technical expertise with business understanding to deliver solutions that truly make a difference
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies We Master */}
        <div className="bg-slate-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-slate-900 text-center mb-4">Technologies We Master</h3>
          <p className="text-center text-slate-600 mb-8">
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-accent-600 hover:text-accent-600 transition-colors"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}