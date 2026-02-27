
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Phone, Award, Users, Truck, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getAllServices } from '../data/services';
import type { Feature } from '../types';

const Home = () => {
  const services = getAllServices();

  const features: Feature[] = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'All products meet international quality standards.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Over 25 years of experience in the industry.',
    },
    {
      icon: Truck,
      title: 'Nationwide Delivery',
      description: 'Reliable delivery across Ghana.',
    },
  ];

  const companyHighlights = [
    'Registered under Companies Act 179',
    'Member of Ghana National Chamber of Commerce',
    'ISO-aligned quality processes',
    'Serving local and international markets',
  ];

  // Hero images slider
  const heroImages = [
    {
      src: '/images/hero_left_panel.jpg',
      alt: 'Woodworking craftsmanship'
    },
    {
      src: '/images/materials_left.jpg',
      alt: 'Quality materials and plywood'
    },
    {
      src: '/images/craft_left.jpg',
      alt: 'Expert craftsmanship'
    },
    {
      src: '/images/precision_left.jpg',
      alt: 'Precision manufacturing'
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex(currentImageIndex === 0 ? heroImages.length - 1 : currentImageIndex - 1);
  };

  const goToNextSlide = () => {
    setCurrentImageIndex(currentImageIndex === heroImages.length - 1 ? 0 : currentImageIndex + 1);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#000066] overflow-hidden">
        {/* Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-full h-full object-cover transition-opacity duration-1000 absolute inset-0 ${
                index === currentImageIndex ? 'opacity-60' : 'opacity-0'
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#000066]/70 via-[#000066]/50 to-transparent" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentImageIndex
                  ? 'bg-[#B8860B]'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#00AEEF]/20 text-[#00AEEF] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Award size={16} />
              Registered Member - Ghana Chamber of Commerce
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quality Wood Products &{' '}
              <span className="text-[#B8860B]">Furniture Solutions</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              ESKOT GLOBAL is a leading manufacturer and supplier of plywood,
              marine boards, melamine boards, and furniture accessories in Ghana.
              Serving both local and international markets since 1998.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#000066] text-white px-6 py-3 rounded font-medium hover:bg-[#000050] transition-colors btn-transition"
              >
                Our Services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Phone size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in flex items-start gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="/images/materials_left.jpg"
                alt="Our manufacturing facility"
                className="rounded-lg shadow-xl w-full"
                loading="lazy"
              />
            </div>
            <div className="fade-in">
              <span className="text-[#00AEEF] font-medium text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-6">
                Building Quality Since 1998
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                ESKOT GLOBAL is duly registered under the Companies Code,
                1963 (Act 179) as a limited liability company with the Registrar General
                Department (R.G.D). We are a viable and registered member of the Ghana
                National Chamber of Commerce and Industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We started out with the manufacturing of wooden furniture for domestic 
                markets. The company has evolved to become one of the leading technological 
                manufacturers in the Western and Central regions and the country as a whole 
                in all types of furniture.
              </p>
              <ul className="space-y-3 mb-8">
                {companyHighlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check size={18} className="text-[#B8860B] flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#B8860B] font-medium hover:underline"
              >
                Learn More About Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <span className="text-[#00AEEF] font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We provide a comprehensive range of wood products and services 
              for construction, furniture making, and interior design.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="fade-in group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-[#B8860B] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{service.shortDesc}</p>
                  <span className="inline-flex items-center gap-1 text-[#B8860B] text-sm font-medium">
                    Learn More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-[#000066] text-white px-6 py-3 rounded font-medium hover:bg-[#000050] transition-colors btn-transition"
            >
              View All Services
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#000066]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Contact us today for a free quote. Our team is ready to help you 
            find the perfect materials for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-white text-[#B8860B] px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors btn-transition"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0558201389"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-[#B8860B] transition-colors"
            >
              <Phone size={18} />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
