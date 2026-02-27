import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Phone, ExternalLink } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  options?: string[];
}

interface ChatbotData {
  services: {
    [key: string]: {
      name: string;
      description: string;
      commonQuestions: {
        question: string;
        answer: string;
      }[];
    };
  };
  generalQuestions: {
    question: string;
    answer: string;
  }[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const chatbotData: ChatbotData = {
    services: {
      plywood: {
        name: 'Plywood',
        description: 'High-quality plywood for construction and furniture',
        commonQuestions: [
          {
            question: 'What plywood thicknesses do you offer?',
            answer: 'We offer plywood from 4mm to 25mm thickness. Popular sizes: 6mm, 9mm, 12mm, 15mm, 18mm, and 25mm.'
          },
          {
            question: 'What are your plywood sheet sizes?',
            answer: 'Standard sizes: 4x8 feet, 4x4 feet, and custom cutting available. We can cut to your exact specifications.'
          },
          {
            question: 'Do you have marine plywood?',
            answer: 'Yes! We stock marine-grade plywood that\'s waterproof and perfect for outdoor and marine applications.'
          }
        ]
      },
      melamine: {
        name: 'Melamine Boards',
        description: 'Premium melamine boards for modern furniture',
        commonQuestions: [
          {
            question: 'What melamine colors are available?',
            answer: 'We have 20+ colors: White, Maple, Oak, Walnut, Wenge, Cherry, and many more. Visit our showroom to see samples.'
          },
          {
            question: 'What\'s the standard melamine thickness?',
            answer: 'Common thicknesses: 15mm, 18mm, 25mm. Most popular for furniture is 18mm thickness.'
          },
          {
            question: 'Is melamine suitable for kitchen cabinets?',
            answer: 'Absolutely! Melamine is perfect for kitchen cabinets - moisture resistant, easy to clean, and durable.'
          }
        ]
      },
      cutting: {
        name: 'Cutting & Edging',
        description: 'Professional cutting and edging services',
        commonQuestions: [
          {
            question: 'How precise is your cutting service?',
            answer: 'Our computerized cutting machines ensure ±1mm precision. Perfect for professional furniture making.'
          },
          {
            question: 'Do you offer edge banding?',
            answer: 'Yes! We provide PVC and ABS edge banding in various colors to match your boards.'
          },
          {
            question: 'What\'s your cutting turnaround time?',
            answer: 'Standard cutting: same day. Complex projects: 1-2 days. Rush orders available with 2-hour service.'
          }
        ]
      },
      accessories: {
        name: 'Furniture Accessories',
        description: 'Complete range of furniture hardware and accessories',
        commonQuestions: [
          {
            question: 'What furniture hardware do you stock?',
            answer: 'Hinges, drawer slides, handles, knobs, locks, casters, and more. Over 500+ items in stock.'
          },
          {
            question: 'Do you have soft-close hinges?',
            answer: 'Yes! We stock Blum, Hafele, and other premium brands. Soft-close hinges and drawer slides available.'
          },
          {
            question: 'Can you help with hardware selection?',
            answer: 'Definitely! Our experts will recommend the right hardware based on your project requirements.'
          }
        ]
      }
    },
    generalQuestions: [
      {
        question: 'What are your business hours?',
        answer: 'Monday-Friday: 7:00 AM - 6:00 PM\nSaturday: 8:00 AM - 5:00 PM\nSunday: Closed'
      },
      {
        question: 'Do you deliver nationwide?',
        answer: 'Yes! We deliver across Ghana. Accra same-day delivery available. Other regions: 2-5 days depending on location.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'Cash, Mobile Money (MTN/Vodafone), Bank Transfer, and Credit Cards. 50% deposit required for large orders.'
      },
      {
        question: 'Do you offer bulk discounts?',
        answer: 'Yes! Bulk discounts available for orders over GHS 5,000. The more you buy, the more you save.'
      },
      {
        question: 'Can I get a custom quote?',
        answer: 'Absolutely! Share your requirements and we\'ll provide a detailed quote within 24 hours.'
      }
    ]
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, isBot: boolean, options?: string[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      options
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const showTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1500);
  };

  const handleServiceSelection = (serviceKey: string) => {
    const service = chatbotData.services[serviceKey];
    if (service) {
      showTyping();
      setTimeout(() => {
        addMessage(
          `Great! I can help you with ${service.name}. Here are some common questions:`,
          true,
          service.commonQuestions.map(q => q.question)
        );
      }, 1500);
    }
  };


  const handleOptionClick = (option: string) => {
    addMessage(option, false);

    if (option === 'Continue on WhatsApp') {
      const whatsappMessage = encodeURIComponent(
        "Hello ESKOT GLOBAL! I was chatting with your website bot and would like to continue our conversation about your services."
      );
      window.open(`https://wa.me/233558201389?text=${whatsappMessage}`, '_blank');
      return;
    }

    if (option === 'Ask another question') {
      showTyping();
      setTimeout(() => {
        addMessage(
          "What would you like to know about?",
          true,
          ['Our Services', 'General Questions', 'Get a Quote']
        );
      }, 1000);
      return;
    }

    if (option === 'Our Services') {
      showTyping();
      setTimeout(() => {
        addMessage(
          "Which service are you interested in?",
          true,
          ['Plywood', 'Melamine Boards', 'Cutting & Edging', 'Furniture Accessories']
        );
      }, 1000);
      return;
    }

    if (option === 'General Questions') {
      showTyping();
      setTimeout(() => {
        addMessage(
          "Here are some frequently asked questions:",
          true,
          chatbotData.generalQuestions.map(q => q.question)
        );
      }, 1000);
      return;
    }

    if (option === 'Get a Quote') {
      showTyping();
      setTimeout(() => {
        addMessage(
          "I'd be happy to help you get a quote! For detailed quotes, our team on WhatsApp can assist you better with specific requirements and pricing.",
          true,
          ['Continue on WhatsApp', 'Ask another question']
        );
      }, 1500);
      return;
    }

    // Handle service selections
    const serviceMap: { [key: string]: string } = {
      'Plywood': 'plywood',
      'Melamine Boards': 'melamine',
      'Cutting & Edging': 'cutting',
      'Furniture Accessories': 'accessories'
    };

    if (serviceMap[option]) {
      handleServiceSelection(serviceMap[option]);
    }
  };

  const initializeChat = () => {
    setMessages([]);
    addMessage(
      "Hello! 👋 Welcome to ESKOT GLOBAL. I'm here to help you with information about our wood products and services. What would you like to know?",
      true,
      ['Our Services', 'General Questions', 'Get a Quote']
    );
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      initializeChat();
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 bg-[#B8860B] text-white p-4 rounded-full shadow-lg hover:bg-[#9A7209] transition-all duration-300 hover:scale-110 z-50"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 lg:w-96 h-[32rem] lg:h-[calc(100vh-120px)] lg:max-h-[700px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-[#B8860B] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white overflow-hidden flex items-center justify-center">
                <img
                  src="/logoeskot.png"
                  alt="ESKOT GLOBAL"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-sm">ESKOT GLOBAL Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-[#B8860B] text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  {message.options && (
                    <div className="mt-3 space-y-2">
                      {message.options.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleOptionClick(option)}
                          className="block w-full text-left p-2 text-xs bg-white text-gray-700 rounded border hover:bg-gray-50 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
              <Phone size={12} />
              <span>Continue on WhatsApp for personal assistance</span>
            </div>
            <button
              onClick={() => handleOptionClick('Continue on WhatsApp')}
              className="w-full bg-green-500 text-white py-2 px-3 rounded text-sm font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;