import { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { navServices } from '../data/services';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  // Memoized active check for better performance
  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  const isServicesActive = location.pathname.startsWith('/services');

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={handleNavClick}>
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0">
              <img
                src="/logoeskot.png"
                alt="ESKOT GLOBAL"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900 block leading-tight">ESKOT GLOBAL</span>
              <span className="text-xs text-gray-500">Wood Products Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-[#B8860B]' : 'text-gray-700 hover:text-[#B8860B]'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-[#B8860B]' : 'text-gray-700 hover:text-[#B8860B]'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                  isServicesActive ? 'text-[#B8860B]' : 'text-gray-700 hover:text-[#B8860B]'
                }`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B8860B] transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    All Services
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {navServices.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#B8860B] transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-[#B8860B]' : 'text-gray-700 hover:text-[#B8860B]'
              }`}
            >
              Contact
            </Link>

            <Link
              to="/quote"
              className="bg-[#B8860B] text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-[#9A7209] transition-colors btn-transition"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/') ? 'text-[#B8860B] bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/about') ? 'text-[#B8860B] bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={handleNavClick}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/services') ? 'text-[#B8860B] bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={handleNavClick}
            >
              Services
            </Link>
            <div className="pl-6 space-y-1 border-l-2 border-gray-100 ml-3">
              {navServices.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-[#B8860B] transition-colors"
                  onClick={handleNavClick}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive('/contact') ? 'text-[#B8860B] bg-gray-50' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={handleNavClick}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
