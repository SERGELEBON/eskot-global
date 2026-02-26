import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { getAllServices } from '../data/services';

const Services = () => {
  const services = getAllServices();

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              What We Offer
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              We provide a comprehensive range of wood products and services 
              for construction, furniture making, and interior design projects.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`fade-in grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="rounded-lg overflow-hidden shadow-lg hover-scale">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-64 lg:h-80 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {service.name}
                  </h2>
                  <p className="text-[#B8860B] font-medium mb-4">
                    {service.shortDesc}
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.slice(0, 4).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-[#B8860B] rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-6 py-3 rounded font-medium hover:bg-[#9A7209] transition-colors btn-transition"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            We can provide custom cutting, sizing, and finishing services 
            tailored to your specific project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-8 py-3 rounded font-medium hover:bg-[#9A7209] transition-colors btn-transition"
            >
              Get a Quote
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:0558201389"
              className="inline-flex items-center gap-2 border-2 border-gray-900 text-gray-900 px-8 py-3 rounded font-medium hover:bg-gray-900 hover:text-white transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
