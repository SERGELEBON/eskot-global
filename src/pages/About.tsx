import { Check, Award, Shield, Users, Calendar, MapPin, Factory, Globe, Truck, Target, Heart, Star } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '1998',
      title: 'Company Founded',
      description: 'Started as a small wooden furniture manufacturer for domestic markets in Western Ghana.',
    },
    {
      year: '2002',
      title: 'First Export Contract',
      description: 'Secured our first international contract, expanding to neighboring West African markets.',
    },
    {
      year: '2005',
      title: 'Product Expansion',
      description: 'Expanded operations to include plywood and panel trading, doubling our product range.',
    },
    {
      year: '2008',
      title: 'Quality Certification',
      description: 'Achieved ISO-aligned quality standards and implemented modern quality control processes.',
    },
    {
      year: '2010',
      title: 'Chamber Membership',
      description: 'Became a registered member of Ghana National Chamber of Commerce and Industry.',
    },
    {
      year: '2015',
      title: 'Technology Upgrade',
      description: 'Invested in modern manufacturing equipment and computerized cutting systems.',
    },
    {
      year: '2018',
      title: 'New Facility',
      description: 'Opened our new 5,000 sqm facility at Accra Dome with expanded storage capacity.',
    },
    {
      year: '2020',
      title: 'International Markets',
      description: 'Started exporting knocked-down furniture to European and American markets.',
    },
    {
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as one of the leading manufacturers in Ghana with 1000+ completed projects.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings.',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'We never compromise on quality, ensuring all products meet international standards and exceed expectations.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Our customers are at the center of everything we do, driving innovation and service excellence.',
    },
    {
      icon: Heart,
      title: 'Community Impact',
      description: 'We believe in contributing positively to our community and supporting local development.',
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'We continuously invest in new technologies and processes to stay ahead of industry trends.',
    },
    {
      icon: Star,
      title: 'Sustainability',
      description: 'We are committed to responsible sourcing and environmentally conscious business practices.',
    },
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4">
              ESKOT GLOBAL
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              A leading manufacturer and supplier of quality wood products in Ghana, 
              serving both local and international markets.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="/images/scale_top_left.jpg"
                alt="Our manufacturing facility"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ESKOT GLOBAL is duly registered under the Companies Code, 
                1963 (Act 179) as a limited liability company with the Registrar General 
                Department (R.G.D). We are a viable and registered member of the Ghana 
                National Chamber of Commerce and Industry.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We started out with the manufacturing of wooden furniture for domestic 
                markets. The company has evolved to become one of the leading technological 
                manufacturers in the Western and Central regions and the country as a whole 
                in all types of furniture.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Some of our products are in knocked-down form for both Local and International 
                markets, making us a preferred partner for businesses looking for quality 
                wood products at competitive prices.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-[#B8860B]" />
                  <span className="text-gray-700">Registered Company</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-[#B8860B]" />
                  <span className="text-gray-700">Chamber Member</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-[#B8860B]" />
                  <span className="text-gray-700">25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check size={20} className="text-[#B8860B]" />
                  <span className="text-gray-700">Export Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '26+', label: 'Years Experience' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '500+', label: 'Happy Clients' },
              { number: '15+', label: 'Countries Served' },
            ].map((stat, index) => (
              <div key={index} className="fade-in text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#B8860B] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              Our Capabilities
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              What Sets Us Apart
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              With state-of-the-art facilities and expert team, we deliver excellence
              across all aspects of our business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Factory,
                title: 'Modern Facilities',
                description: '5,000 sqm state-of-the-art manufacturing facility with advanced equipment.',
              },
              {
                icon: Globe,
                title: 'International Reach',
                description: 'Serving both domestic and international markets across multiple continents.',
              },
              {
                icon: Truck,
                title: 'Reliable Logistics',
                description: 'Nationwide delivery network ensuring timely transportation of products.',
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: '50+ skilled professionals with combined 500+ years of industry experience.',
              },
            ].map((capability, index) => (
              <div
                key={index}
                className="fade-in text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <capability.icon size={28} className="text-[#B8860B]" />
                </div>
                <h3 className="font-semibold text-lg mb-3">{capability.title}</h3>
                <p className="text-gray-600 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-16 h-16 bg-[#B8860B]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-[#B8860B]" />
                </div>
                <h3 className="font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              Our Journey
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Milestones
            </h2>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`fade-in relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-5/12">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar size={18} className="text-[#B8860B]" />
                        <span className="text-[#B8860B] font-bold text-lg">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex lg:w-2/12 justify-center">
                    <div className="w-4 h-4 bg-[#B8860B] rounded-full border-4 border-white shadow" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="lg:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Info */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Registration & Certification
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield size={20} className="text-[#B8860B]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Company Registration</h4>
                      <p className="text-gray-600 text-sm">
                        Registered under Companies Code 1963 (Act 179) with the 
                        Registrar General Department (R.G.D)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award size={20} className="text-[#B8860B]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Chamber of Commerce</h4>
                      <p className="text-gray-600 text-sm">
                        Registered member of Ghana National Chamber of Commerce and Industry
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#B8860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-[#B8860B]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-600 text-sm">
                        Accra Dome Pillar 2, Ghana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fade-in">
                <img
                  src="/images/partner_bottom_left.jpg"
                  alt="Our warehouse"
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
