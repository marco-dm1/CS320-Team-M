import React, { useState, useEffect } from 'react';
import { Search, Ticket, Shield, RefreshCw, ChevronDown, Star, Calendar, ArrowRight, MapPin, TrendingUp, Users } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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

  const categories = [
    { name: 'Concerts', icon: '🎵', count: '2,345' },
    { name: 'Sports', icon: '⚽', count: '1,456' },
    { name: 'Theater', icon: '🎭', count: '890' },
    { name: 'Comedy', icon: '😂', count: '567' },
  ];

  const upcomingEvents = [
    {
      title: "Taylor Swift - The Eras Tour",
      date: "Jun 15 • 7:00 PM",
      location: "MetLife Stadium, NJ",
      price: 299,
      rating: 4.9,
      image: "/api/placeholder/400/200"
    },
    {
      title: "NBA Finals 2024",
      date: "Jun 20 • 8:30 PM",
      location: "Madison Square Garden, NY",
      price: 199,
      rating: 4.8,
      image: "/api/placeholder/400/200"
    },
    {
      title: "Hamilton - Broadway",
      date: "Jul 1 • 2:00 PM",
      location: "Richard Rodgers Theatre, NY",
      price: 249,
      rating: 4.9,
      image: "/api/placeholder/400/200"
    }
  ];

  const stats = [
    { label: "Active Users", value: "2M+", icon: <Users className="w-5 h-5" /> },
    { label: "Events Listed", value: "50K+", icon: <Calendar className="w-5 h-5" /> },
    { label: "Tickets Sold", value: "10M+", icon: <Ticket className="w-5 h-5" /> },
    { label: "Success Rate", value: "99.9%", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-32 pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto">
          <div className={`space-y-8 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
                Your Gateway to
                <span className="text-primary-600 relative ml-4">
                  Live Events
                  <div className="absolute -bottom-2 left-0 w-full h-2 bg-primary-200 transform -skew-x-12"></div>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Discover and book tickets to the most exclusive events. 
                Secure, seamless, and guaranteed authentic.
              </p>
            </div>

            {/* Search Section */}
            <div className="max-w-3xl mx-auto relative">
              <div className="absolute inset-0 bg-primary-200 blur-2xl opacity-20 transform rotate-3"></div>
              <div className="relative flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search events, artists, or venues..."
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <button className="bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Find Tickets
                </button>
              </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2 text-primary-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Browse by Category
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 p-6 hover:border-primary-500 transition-all cursor-pointer group">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600">{category.name}</h3>
                <p className="text-gray-500">{category.count} events</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Trending Events</h2>
            <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative">
                  <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    {event.rating}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-primary-600 font-semibold">${event.price}</p>
                    </div>
                    <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all transform hover:scale-105">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Why Choose Us
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Ticket className="w-8 h-8" />,
                title: "100% Guaranteed Tickets",
                description: "Every ticket sold on our platform is verified and guaranteed to be authentic."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Secure Transactions",
                description: "Your payments are protected by our state-of-the-art security system."
              },
              {
                icon: <RefreshCw className="w-8 h-8" />,
                title: "Instant Delivery",
                description: "Get your tickets delivered instantly to your email after purchase."
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-white rounded-xl border border-gray-100 hover:border-primary-500 transition-all duration-300">
                <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 text-primary-600">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            Frequently Asked Questions
            <div className="w-20 h-1 bg-primary-500 mx-auto mt-4"></div>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="px-6 pb-4 text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;