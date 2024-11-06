import React, { useState } from 'react';
import { Search, Ticket, Shield, RefreshCw, ChevronDown, Star, Calender } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know my tickets are authentic?",
      answer: "All tickets on our platform are verified through our proprietary authentication system. We guarantee 100% authentic tickets or your money back."
    },
    {
      question: "What happens if an event is cancelled?",
      answer: "If an event is cancelled, you will receive a full refund automatically within 5-7 business days."
    },
    {
      question: "Can I sell my tickets on your platform?",
      answer: "Yes! You can list your tickets for sale through our secure platform. We verify all sellers and protect both buyers and sellers."
    },
    {
      question: "How do I transfer tickets to someone else?",
      answer: "You can easily transfer tickets through our platform by entering the recipient's email address. They'll receive instructions to claim their tickets."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section with Enhanced Design */}
      <section className="relative bg-gradient-to-b from-primary-50 to-white pt-24 pb-32 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Find Your Perfect{' '}
              <span className="text-primary-600 relative">
                Event Tickets
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary-200 transform -skew-x-12"></div>
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
              Buy, sell, and trade tickets safely and securely with our guaranteed protection.
            </p>
          </div>
          
          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-12">
            <div className="absolute inset-0 bg-primary-200 blur-xl opacity-20 transform rotate-3"></div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for events, venues, or artists..."
                className="w-full pl-12 pr-36 py-4 rounded-full border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow hover:shadow-xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-all hover:px-8">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Us?
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Ticket className="w-8 h-8 text-primary-600" />,
                title: "Easy Trading",
                description: "Buy and sell tickets with just a few clicks."
              },
              {
                icon: <Shield className="w-8 h-8 text-primary-600" />,
                title: "Secure Transactions",
                description: "All transactions are protected by our guarantee."
              },
              {
                icon: <RefreshCw className="w-8 h-8 text-primary-600" />,
                title: "Instant Transfer",
                description: "Get your tickets instantly after purchase."
              }
            ].map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Events</h2>
            <button className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
              View All <ChevronDown className="w-4 h-4 transform rotate-270" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <EventCard key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* New FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`px-6 overflow-hidden transition-all duration-200 ease-in-out ${
                    openFaqIndex === index ? 'py-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const EventCard = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
    <div className="relative">
      <img
        src="/api/placeholder/400/200"
        alt="Event"
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
        <Star className="w-4 h-4 text-yellow-400" />
        4.8
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-semibold mb-2">Event Title</h3>
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <Calendar className="w-4 h-4 mr-2" />
        <span>Fri, May 12 • 7:00 PM</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <span className="text-sm text-gray-500">Starting from</span>
          <p className="text-primary-600 font-semibold">$99</p>
        </div>
        <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          View Tickets
        </button>
      </div>
    </div>
  </div>
);

export default Home;