import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="font-bold text-xl text-slate-900">
              AppDost
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Services
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Projects
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">
              Get Free Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a href="#" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#services" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">
                Services
              </a>
              <a href="#projects" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">
                Projects
              </a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="btn-primary w-full">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}