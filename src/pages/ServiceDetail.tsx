import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Phone, Mail, Check } from 'lucide-react';
import { servicesData, getOtherServices } from '../data/services';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  const service = serviceId ? servicesData[serviceId] : null;
  const otherServices = serviceId ? getOtherServices(serviceId, 4) : [];

  // Handle service not found
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-[#B8860B] hover:underline font-medium"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#B8860B] transition-colors">Home</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#B8860B] transition-colors">Services</Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-[#B8860B] font-medium" aria-current="page">{service.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[#000066] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000066] via-[#000066]/90 to-[#000066]/70" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            {service.name}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  About This Service
                </h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.fullDescription}
                </p>
              </div>

              {/* Features */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check size={20} className="text-[#B8860B] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Common Applications
                </h2>
                <div className="flex flex-wrap gap-3">
                  {service.applications.map((app, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Gallery
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {service.gallery.map((img, index) => (
                    <div key={index} className="rounded-lg overflow-hidden hover-scale">
                      <img
                        src={img}
                        alt={`${service.name} ${index + 1}`}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Specifications */}
              <div className="fade-in bg-gray-50 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-4">Specifications</h3>
                <dl className="space-y-4">
                  {service.specifications.map((spec, index) => (
                    <div key={index}>
                      <dt className="text-sm text-gray-500">{spec.label}</dt>
                      <dd className="font-medium text-gray-900">{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Contact CTA */}
              <div className="fade-in bg-[#000066] rounded-lg p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Need a Quote?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Contact us today for pricing and availability.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:0558201389"
                    className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors"
                  >
                    <Phone size={16} />
                    055 820 1389
                  </a>
                  <a
                    href="mailto:info@eskotglobal.com.gh"
                    className="flex items-center gap-2 text-sm hover:text-white/80 transition-colors"
                  >
                    <Mail size={16} />
                    info@eskotglobal.com.gh
                  </a>
                </div>
                <Link
                  to="/quote"
                  className="mt-4 w-full bg-white text-[#B8860B] px-4 py-2 rounded font-medium text-center block hover:bg-gray-100 transition-colors btn-transition"
                >
                  Request Quote
                </Link>
              </div>

              {/* Other Services */}
              {otherServices.length > 0 && (
                <div className="fade-in bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-4">Other Services</h3>
                  <nav className="space-y-2" aria-label="Other services">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.id}`}
                        className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 group-hover:text-[#B8860B] transition-colors">{s.name}</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-[#B8860B] transition-colors" />
                      </Link>
                    ))}
                  </nav>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Navigation to Other Services */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B8860B] transition-colors"
            >
              <ArrowLeft size={18} />
              View All Services
            </Link>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#000066] text-white px-6 py-3 rounded font-medium hover:bg-[#000050] transition-colors btn-transition"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
