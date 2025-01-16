import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-orange" />
                <p>123 Green Street, Foodville, FL 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-orange" />
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-orange" />
                <p>info@zeropercent.com</p>
              </div>
              <button className="mt-4 inline-flex items-center space-x-2 bg-primary-orange text-white px-6 py-2 rounded-md hover:bg-primary-orange/90 transition-colors">
                <span>Get in Touch</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/shipping-policy" className="hover:text-primary-orange transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="/payment-refund-policy" className="hover:text-primary-orange transition-colors">
                  Payment & Refund Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-primary-orange transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-primary-orange transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-orange transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-orange transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} zeropercent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};