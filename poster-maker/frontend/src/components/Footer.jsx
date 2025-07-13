import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { name: 'Templates', href: '#templates' },
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'AI Tools', href: '#' },
        { name: 'Print Services', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Design Tips', href: '#' },
        { name: 'Marketing Guide', href: '#' },
        { name: 'Success Stories', href: '#gallery' },
        { name: 'Blog', href: '#' },
        { name: 'Help Center', href: '/support' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '/contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Customer Support', href: '/support' },
        { name: 'Live Chat', href: '/support' },
        { name: 'WhatsApp Help', href: 'https://wa.me/254700123456' },
        { name: 'Video Tutorials', href: '/support' },
        { name: 'Community Forum', href: '#' },
      ]
    }
  ];

  return (
    <footer className="text-black dark:text-gray-100 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-900 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">HF</span>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-gray-100">HustleFlyerForge</span>
              </Link>
              <p className="text-gray-900 dark:text-gray-100 mb-6 leading-relaxed">
                Empowering Kenyan hustlers and small businesses with professional marketing materials. Create stunning flyers and posters in minutes.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-sm">📧</span>
                  <span className="text-gray-900 dark:text-gray-100 text-sm">support@hustleflyerforge.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm">📱</span>
                  <span className="text-gray-900 dark:text-gray-100 text-sm">+254 742 301 119</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-sm">💬</span>
                  <span className="text-gray-900 dark:text-gray-100 text-sm">WhatsApp Support</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4 text-green-700">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </Link>
                      ) : link.href.startsWith('https://') ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-900 dark:text-gray-100 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 text-sm"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Newsletter Section */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">Stay Updated</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Get design tips, new templates, and special offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary-dark text-black dark:text-white px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-700" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-900 dark:text-gray-100 text-sm font-bold text-center md:text-left">
              © 2024 HustleFlyerForge. All rights reserved. Made for Kenyan hustlers By Magdaline and Duncan.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-lg font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-lg font-bold">t</span>
                </div>
              </a>
              <a href="#" className="text-white hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-lg font-bold">i</span>
                </div>
              </a>
              <a 
                href="https://wa.me/254708679430" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
              >
                <span className="sr-only">WhatsApp</span>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                  <span className="text-lg font-bold">w</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
