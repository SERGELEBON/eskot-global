import { useState } from 'react';
import { Phone, Mail, Upload, FileText, Calculator, Check, ArrowRight } from 'lucide-react';

const Quote = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal info
    name: '',
    email: '',
    phone: '',
    company: '',

    // Project details
    service: '',
    projectType: '',
    quantity: '',
    specifications: '',
    timeline: '',
    budget: '',

    // Additional info
    message: '',
    urgent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Plywood',
    'Marine Boards',
    'Melamine Boards',
    'Furniture Accessories',
    'Quartz Tops',
    'Cutting & Edging',
    'Panels',
    'Custom Solution',
  ];

  const projectTypes = [
    'Residential Construction',
    'Commercial Building',
    'Furniture Manufacturing',
    'Interior Design',
    'Kitchen Cabinets',
    'Wardrobes & Storage',
    'Office Furniture',
    'Other',
  ];

  const budgetRanges = [
    'Under GHS 5,000',
    'GHS 5,000 - 15,000',
    'GHS 15,000 - 50,000',
    'GHS 50,000 - 100,000',
    'Over GHS 100,000',
  ];

  const timelines = [
    'Within 1 week',
    '2-4 weeks',
    '1-2 months',
    '3-6 months',
    'No rush',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your API
    console.log('Quote request:', formData);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const isStepValid = () => {
    if (step === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.service && formData.projectType;
    }
    return true;
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={32} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Quote Request Submitted!
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for your quote request. Our team will review your requirements
            and get back to you with a detailed quote within 24 hours.
          </p>
          <div className="space-y-3 text-sm text-gray-500 mb-6">
            <p className="flex items-center justify-center gap-2">
              <Phone size={16} />
              055 820 1389
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} />
              info@eskotglobal.com.gh
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                name: '', email: '', phone: '', company: '',
                service: '', projectType: '', quantity: '', specifications: '',
                timeline: '', budget: '', message: '', urgent: false,
              });
            }}
            className="bg-[#B8860B] text-white px-6 py-3 rounded font-medium hover:bg-[#9A7209] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gray-900 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <span className="text-[#B8860B] font-medium text-sm uppercase tracking-wider">
              Get Quote
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Request Your Custom Quote
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Tell us about your project and we'll provide you with a detailed,
              competitive quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= stepNumber
                    ? 'bg-[#B8860B] text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  step >= stepNumber ? 'text-[#B8860B]' : 'text-gray-500'
                }`}>
                  {stepNumber === 1 && 'Contact Info'}
                  {stepNumber === 2 && 'Project Details'}
                  {stepNumber === 3 && 'Additional Info'}
                </span>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 ml-4 ${
                    step > stepNumber ? 'bg-[#B8860B]' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Information */}
              {step === 1 && (
                <div className="fade-in space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Contact Information
                    </h2>
                    <p className="text-gray-600">
                      Let us know how to reach you
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                        placeholder="+233 XX XXX XXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {step === 2 && (
                <div className="fade-in space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Project Details
                    </h2>
                    <p className="text-gray-600">
                      Tell us about your project requirements
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Estimated Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                      >
                        <option value="">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Quantity / Dimensions
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors"
                        placeholder="e.g., 50 sheets of 18mm plywood, 4x8 feet"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Specifications & Requirements
                      </label>
                      <textarea
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors resize-none"
                        placeholder="Describe your specific requirements, quality standards, finishing needs, etc."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Additional Information */}
              {step === 3 && (
                <div className="fade-in space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Additional Information
                    </h2>
                    <p className="text-gray-600">
                      Any additional details about your project
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Comments or Questions
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] outline-none transition-colors resize-none"
                        placeholder="Please include any additional information that would help us provide an accurate quote..."
                      />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          name="urgent"
                          checked={formData.urgent}
                          onChange={handleChange}
                          className="mt-1 h-4 w-4 text-[#B8860B] focus:ring-[#B8860B] border-gray-300 rounded"
                        />
                        <div>
                          <label className="block font-medium text-gray-700">
                            Urgent Project
                          </label>
                          <p className="text-sm text-gray-600">
                            Check this if you need a quote within 4 hours (additional fees may apply)
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex gap-3">
                        <FileText size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-blue-900 mb-2">
                            Need to share files?
                          </h4>
                          <p className="text-sm text-blue-700 mb-3">
                            If you have drawings, specifications, or reference images,
                            please email them to us at info@eskotglobal.com.gh
                          </p>
                          <p className="text-xs text-blue-600">
                            Accepted formats: PDF, JPG, PNG, DWG, DXF (Max 10MB)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!isStepValid()}
                    className={`ml-auto flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                      isStepValid()
                        ? 'bg-[#B8860B] text-white hover:bg-[#9A7209]'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Next
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="ml-auto flex items-center gap-2 bg-[#B8860B] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#9A7209] transition-colors"
                  >
                    <Calculator size={18} />
                    Submit Quote Request
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Need Help or Have Questions?</h3>
          <p className="text-gray-300 mb-8">
            Our team is ready to assist you with your quote request
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="tel:0558201389"
              className="flex items-center gap-3 text-lg font-medium hover:text-[#B8860B] transition-colors"
            >
              <Phone size={20} />
              055 820 1389
            </a>
            <a
              href="mailto:info@eskotglobal.com.gh"
              className="flex items-center gap-3 text-lg font-medium hover:text-[#B8860B] transition-colors"
            >
              <Mail size={20} />
              info@eskotglobal.com.gh
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;