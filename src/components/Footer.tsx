import React from 'react';
import Logo from './Logo';
import { Facebook, Twitter, Instagram, Github as GitHub, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-purple-100 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-blue-100 blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600 max-w-xs">
              Premium themes for modern developers. Beautifully designed, expertly crafted code.
            </p>
            <div className="flex space-x-4 mt-6">
              {[
                { icon: <Facebook size={20} />, href: '#' },
                { icon: <Twitter size={20} />, href: '#' },
                { icon: <Instagram size={20} />, href: '#' },
                { icon: <GitHub size={20} />, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-500 hover:text-purple-600 transition-colors duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              {['All Themes', 'Landing Pages', 'E-commerce', 'Dashboards', 'Portfolios'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'Tutorials', 'Blog', 'Changelog', 'Support'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {['About Us', 'Careers', 'Privacy Policy', 'Terms of Service', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 text-center">
          <div className="text-gray-600 flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p>&copy; 2025 ThemeGlass. All rights reserved.</p>
            <p className="flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by ThemeGlass Team
            </p>
          </div>
          
          <div className="mt-6 flex items-center justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
              Terms of Service
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors duration-200 text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;