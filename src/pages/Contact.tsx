import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Plywood',
    'Marine Boards',
    'Melamine Boards',
    'Furniture Accessories',
    'Quartz Tops',
    'Cutting & Edging',
    'Panels',
    'Other',
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#000066] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <span className="text-[#00AEEF] font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              Get in Touch
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Have a question or need a quote? We're here to help. 
              Reach out to us and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: 'Phone',
                lines: ['055 820 1389', '050 982 0619'],
                href: 'tel:0558201389',
              },
              {
                icon: Mail,
                title: 'Email',
                lines: ['info@eskotglobal.com.gh'],
                href: 'mailto:info@eskotglobal.com.gh',
              },
              {
                icon: MapPin,
                title: 'Address',
                lines: ['Accra Dome Pillar 2', 'Ghana'],
                href: '#',
              },
              {
                icon: Clock,
                title: 'Business Hours',
                lines: ['Mon-Fri: 8AM - 6PM', 'Sat: 9AM - 4PM'],
                href: '#',
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="fade-in bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="w-12 h-12 bg-[#B8860B]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-[#B8860B]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                {item.lines.map((line, i) => (
                  <p key={i} className="text-gray-600 text-sm">{line}</p>
                ))}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="fade-in bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              {submitted ? (
                <div className="bg-[#00AEEF]/10 border border-[#00AEEF]/30 rounded-lg p-6 text-center">
                  <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={24} className="text-[#00AEEF]" />
                  </div>
                  <h3 className="font-semibold text-[#00AEEF] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#00AEEF] text-sm">
                    Thank you for contacting us. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08085E] focus:border-[#08085E] outline-none transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#000066] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#000050] transition-colors flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Visit Our Location
                </h2>
                <p className="text-gray-600 mb-6">
                  We're conveniently located in Accra. Visit us to see our products 
                  in person and discuss your project with our team.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="fade-in bg-gray-200 rounded-lg h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 font-medium">Accra Dome Pillar 2</p>
                  <p className="text-gray-500 text-sm">Ghana</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="fade-in bg-[#000066] rounded-lg p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">Prefer to Call?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Our team is available during business hours to answer your questions.
                </p>
                <div className="space-y-2">
                  <a
                    href="tel:0558201389"
                    className="flex items-center gap-3 text-lg font-medium hover:text-white/80 transition-colors"
                  >
                    <Phone size={20} />
                    055 820 1389
                  </a>
                  <a
                    href="tel:0509820619"
                    className="flex items-center gap-3 text-lg font-medium hover:text-white/80 transition-colors"
                  >
                    <Phone size={20} />
                    050 982 0619
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do you offer delivery services?',
                a: 'Yes, we offer nationwide delivery across Ghana. Delivery fees depend on location and order size.',
              },
              {
                q: 'Can I get custom sizes?',
                a: 'Absolutely! We offer cutting services to provide boards in custom sizes to fit your project needs.',
              },
              {
                q: 'Do you offer bulk discounts?',
                a: 'Yes, we offer competitive pricing for bulk orders. Contact us for a custom quote.',
              },
              {
                q: 'What are your payment terms?',
                a: 'We accept cash, bank transfers, and mobile money. Payment terms can be discussed for large orders.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="fade-in bg-gray-50 rounded-lg p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
