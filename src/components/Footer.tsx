import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { navServices } from '../data/services';

const Footer = () => {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'All Services' },
    { path: '/contact', label: 'Contact' },
  ];

  const contactInfo = {
    phones: ['055 820 1389', '050 982 0619'],
    email: 'info@eskotglobal.com.gh',
    address: 'Accra Dome Pillar 2, Ghana',
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/logoeskot.png"
                  alt="ESKOT GLOBAL"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-bold text-lg">ESKOT GLOBAL</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturer and supplier of quality plywood, marine boards, 
              melamine boards, and furniture accessories in Ghana.
            </p>
            <div className="space-y-3">
              {contactInfo.phones.map((phone, index) => (
                <a
                  key={index}
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone size={16} className="text-[#B8860B]" />
                  <span>{phone}</span>
                </a>
              ))}
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} className="text-[#B8860B]" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[#B8860B] mt-0.5 flex-shrink-0" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {navServices.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-gray-400 text-sm hover:text-[#B8860B] transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 text-sm hover:text-[#B8860B] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Business Hours</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-300">
                Registered under Companies Code 1963 (Act 179) and member of Ghana National Chamber of Commerce.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ESKOT GLOBAL. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
