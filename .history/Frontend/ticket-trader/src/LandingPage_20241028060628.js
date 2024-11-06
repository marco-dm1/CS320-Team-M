import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Shield, Clock, ChevronRight, Menu, X } from 'lucide-react';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(0);

  const featuredEvents = [
    { name: "Taylor Swift | The Eras Tour", date: "Aug 15", price: "From $150" },
    { name: "NBA Finals 2025", date: "June 4", price: "From $200" },
    { name: "Coachella Music Festival", date: "Apr 12", price: "From $399" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % featuredEvents.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-primary">
              TicketTrading
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#trending" className="hover:text-primary transition-colors">Trending</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                Login / Sign Up
              </Link>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col px-6 py-4 space-y-4">
              <a href="#features" className="hover:text-primary transition-colors">Features</a>
              <a href="#trending" className="hover:text-primary transition-colors">Trending</a>
              <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
              <Link to="/login" className="bg-primary text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all text-center">
                Login / Sign Up
              </Link>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                  Your Tickets, <br />
                  <span className="text-primary">Your Way</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Buy, sell, and trade event tickets securely. Join thousands of happy users making memories through TicketTrading.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login" className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all text-center">
                    Get Started
                  </Link>
                  <a href="#features" className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all text-center">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-4">
                    {featuredEvents.map((event, index) => (
                      <div 
                        key={index}
                        className={`transform transition-all duration-500 ${
                          index === currentEvent 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-4'
                        }`}
                      >
                        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <h3 className="font-semibold">{event.name}</h3>
                            <p className="text-sm text-gray-600">{event.date}</p>
                          </div>
                          <div className="text-primary font-semibold">{event.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose TicketTrading?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: <Search className="w-8 h-8 text-primary" />,
                  title: "Easy Search",
                  description: "Find tickets for any event quickly with our smart search"
                },
                {
                  icon: <Calendar className="w-8 h-8 text-primary" />,
                  title: "Real-time Updates",
                  description: "Get instant notifications for price drops and availability"
                },
                {
                  icon: <Shield className="w-8 h-8 text-primary" />,
                  title: "Secure Trading",
                  description: "Every transaction is protected by our guarantee"
                },
                {
                  icon: <Clock className="w-8 h-8 text-primary" />,
                  title: "24/7 Support",
                  description: "Our team is always here to help you"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 bg-gradient-to-r from-primary to-blue-600">
          <div className="container mx-auto text-white">
            <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Found front-row tickets to my favorite band in seconds!",
                  author: "Sarah M.",
                  role: "Music Enthusiast"
                },
                {
                  quote: "Best platform for trading season tickets. Super easy to use!",
                  author: "Mike R.",
                  role: "Sports Fan"
                },
                {
                  quote: "Saved hundreds on Broadway tickets. Highly recommended!",
                  author: "Emma L.",
                  role: "Theater Lover"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-lg">
                  <p className="text-lg mb-4">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm opacity-80">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join?</h2>
            <p className="text-xl text-gray-600 mb-8">Start trading tickets securely today</p>
            <Link to="/login" className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
              Get Started <ChevronRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TicketTrading</h3>
              <p className="text-gray-400">Your trusted platform for ticket exchange</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#trending" className="text-gray-400 hover:text-white transition-colors">Trending</a></li>
                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Safety Guide</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">Email: support@tickettrading.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TicketTrading. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;