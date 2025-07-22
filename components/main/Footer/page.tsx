import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-200 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Company Column */}
          <div className="flex flex-col">
            <h2 className="text-xl font-bold mb-4">TailGrids Marketplace</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed text-justify">
              The leading B2B SaaS marketplace connecting enterprises with premium digital solutions. Trusted by 15,000+ businesses worldwide.
            </p>
            <div className="flex items-center text-gray-700 dark:text-gray-400 text-sm mb-3">
              <Phone className="w-4 h-4 mr-2 text-[#48CAE4] dark:text-[#0077B6]" />
              <span>Enterprise Support: +1 (800) 123-4567</span>
            </div>
            <div className="flex items-center text-gray-700 dark:text-gray-400 text-sm">
              <Mail className="w-4 h-4 mr-2 text-[#48CAE4] dark:text-[#0077B6]" />
              <span>corporate@tailgrids.com</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Market Solutions</h3>
            <div className="space-y-3 text-justify">
              {[
                'Enterprise SaaS Suite',
                'Payment Processing',
                'Business Analytics',
                'Supply Chain Tools',
                'CRM Integration'
              ].map((item) => (
                <a 
                  key={item} 
                  href="#"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <div className="space-y-3 text-justify">
              {[
                'API Documentation',
                'Developer Portal',
                'Case Studies',
                'White Papers',
                'Compliance Center'
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-600 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Apps Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Mobile Access</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-justify">
              Manage your enterprise solutions anywhere with our mobile applications.
            </p>
            
            <div className="space-y-3">
              {/* App Store Button */}
              <a 
                href="#"
                className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="text-2xl mr-3">􀄯</div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Download on the</div>
                  <div className="text-gray-800 dark:text-gray-200 text-sm font-medium">App Store</div>
                </div>
              </a>
              
              {/* Google Play Button */}
              <a 
                href="#"
                className="flex items-center border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <div className="mr-3">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Get it on</div>
                  <div className="text-gray-800 dark:text-gray-200 text-sm font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 md:mb-0">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-xs transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-xs transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-xs transition-colors">Service Level Agreement</a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-[#48CAE4] dark:hover:text-[#0077B6] text-xs transition-colors">GDPR Compliance</a>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-gray-500 dark:text-gray-400 text-sm">© 2025 TailGrids Corporation</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-[#48CAE4] dark:hover:text-[#0077B6] transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-[#48CAE4] dark:hover:text-[#0077B6] transition-colors">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-[#48CAE4] dark:hover:text-[#0077B6] transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-blue-[#48CAE4] dark:hover:text-[#0077B6] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
