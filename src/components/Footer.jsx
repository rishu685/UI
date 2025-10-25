export default function Footer() {
  const quickLinks = ["Home", "Services", "Careers", "Blog", "Contact"]
  const services = ["Android App Development", "Web Development", "UI/UX Design", "CRM Software", "Cloud Solutions", "Cybersecurity"]

  return (
    <footer id="contact" className="py-16 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">AppDost</h3>
            <p className="text-slate-600 mb-6 max-w-md">
              Complete IT Solution Provider. Delivering innovative IT solutions since 2025. 
              We transform ideas into powerful digital experiences with cutting-edge technology and expert craftsmanship.
            </p>
            <div className="space-y-2">
              <p className="text-slate-600">📧 contact@appdost.in</p>
              <p className="text-slate-600">📞 +91 76350 75422 / +91 11 6929 0750</p>
              <p className="text-slate-600">📍 3 Offices: Banka (HQ), Motihari, Patna</p>
              <p className="text-slate-600">🕒 Mon - Sat: 9:00 AM - 6:00 PM IST</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">
                    → {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors text-sm">
                    → {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 text-sm">
            © 2025 AppDost - Complete IT Solution. All rights reserved. Built with ❤️ in India
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-600 text-sm hover:text-slate-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}