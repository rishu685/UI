export default function Projects() {
  const featuredProjects = [
    {
      title: "BEU Mate - Bihar Engineering",
      description: "An AI-powered study companion for B.Tech students offering personalized learning, career guidance, and placement preparation. Available as both web app and mobile application with comprehensive study materials and AI-driven recommendations.",
      tech: ["React Native", "Node.js", "AI/ML", "Firebase", "MongoDB"],
      category: "AI-Powered Educational Platform",
      featured: true,
      links: {
        playStore: "https://play.google.com/store/apps/details?id=com.priyesranjan.beumate",
        website: "https://beumate.app/"
      },
      features: [
        "AI-powered personalized learning paths",
        "Career guidance and placement preparation", 
        "Interactive study materials and quizzes",
        "Progress tracking and analytics",
        "Peer collaboration features"
      ]
    },
    {
      title: "Devskillquest",
      description: "An interactive learning platform designed for aspiring developers to master coding skills through hands-on projects, coding challenges, and industry-relevant curriculum with real-time collaboration features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "WebSocket"],
      category: "Interactive Learning Platform",
      featured: true,
      links: {
        website: "https://devskillquest.com/"
      },
      features: [
        "Interactive coding challenges and projects",
        "Real-time collaboration and mentorship",
        "Industry-relevant curriculum",
        "Progress tracking and certification",
        "Community-driven learning environment"
      ]
    },
    {
      title: "The Weddings Chapter",
      description: "A premium wedding planning platform connecting couples with top vendors, venues, and services. Features comprehensive vendor portfolios, booking management, budget tracking, and seamless communication tools.",
      tech: ["PHP", "Laravel", "MySQL", "Vue.js", "Google Maps API"],
      category: "Wedding Planning Portal",
      featured: true,
      links: {
        website: "https://theweddingschapter.com/"
      },
      features: [
        "Vendor portfolio and booking management",
        "Budget tracking and planning tools",
        "Venue discovery with Google Maps integration",
        "Real-time communication platform",
        "Event timeline and task management"
      ]
    }
  ]

  const openSourceProjects = [
    {
      title: "DeepFake Detection",
      description: "Advanced deep learning model for detecting manipulated media using computer vision and neural networks. Summer internship research project focusing on AI-powered media authenticity verification.",
      tech: ["Python", "AI/ML", "Jupyter", "Computer Vision"],
      category: "AI Research Project",
      featured: false,
      links: {
        github: "https://github.com/priyesranjan/DeepFake"
      }
    },
    {
      title: "NooBot",
      description: "Smart automation bot built with Python for task scheduling, data processing, and intelligent workflow automation. Features advanced scheduling and monitoring capabilities.",
      tech: ["Python", "Automation", "Task Scheduling"],
      category: "Automation Bot",
      featured: false,
      links: {
        github: "https://github.com/priyesranjan/NooBot"
      }
    },
    {
      title: "EduTools",
      description: "Collection of educational tools and utilities for students and teachers. Interactive learning resources, study aids, and classroom management tools.",
      tech: ["HTML/CSS", "JavaScript", "Education"],
      category: "Educational Platform",
      featured: false,
      links: {
        github: "https://github.com/priyesranjan/edutools"
      }
    },
    {
      title: "DialogFlow Chatbot",
      description: "Intelligent chatbot using Google's DialogFlow ES for natural language processing and automated customer support with advanced conversation management.",
      tech: ["DialogFlow", "NLP", "Node.js"],
      category: "AI Assistant",
      featured: false,
      links: {
        github: "https://github.com/priyesranjan/chatbot"
      }
    }
  ]

  const allProjects = [...featuredProjects, ...openSourceProjects]

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-slate-900 mb-4">Our Featured Projects</h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
          Real solutions for real businesses - explore our successful projects that showcase innovation, quality, and impact
        </p>
        
        {/* Featured Projects - Large Cards */}
        <div className="space-y-16 mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Info */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent-600 text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-semibold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-slate-900 font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features?.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <span className="w-2 h-2 bg-accent-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-slate-900 font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                {project.links && (
                  <div className="flex flex-wrap gap-4">
                    {project.links.website && (
                      <a 
                        href={project.links.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        🌐 Visit Website
                      </a>
                    )}
                    {project.links.playStore && (
                      <a 
                        href={project.links.playStore} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        📱 Play Store
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Project Visual Placeholder */}
              <div className="flex-1 max-w-lg">
                <div className="bg-slate-100 border border-slate-200 rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-slate-500 font-medium">{project.title}</p>
                    <p className="text-slate-400 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open Source & Innovation Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-slate-900 text-center mb-4">Open Source & Innovation Projects</h3>
          <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">
            Explore our contributions to AI, automation, and educational technology
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openSourceProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors"
              >
                <div className="mb-3">
                  <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h4>
                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent-600 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.links?.github && (
                  <a 
                    href={project.links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="bg-slate-50 rounded-lg p-8 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-semibold text-accent-600 mb-2">10+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Web Projects</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-accent-600 mb-2">4+</div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Android Apps</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-accent-600 mb-2">1</div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">CRM System</div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-accent-600 mb-2">100%</div>
              <div className="text-slate-600 text-sm uppercase tracking-wider">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-slate-600 mb-6">Interested in working with us on your next project?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Start Your Project →</button>
            <button className="btn-secondary">View Full Portfolio</button>
          </div>
        </div>
      </div>
    </section>
  )
}