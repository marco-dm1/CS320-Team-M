import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Search, ArrowRight, Ticket, Shield, RefreshCw } from 'lucide-react';

// Home Page Component
export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16 px-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Find Your Perfect <span className="text-primary-600">Event Tickets</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Buy, sell, and trade tickets safely and securely. Join thousands of satisfied users making memories at their favorite events.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for events, venues, or artists..."
            className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors">
            Search
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Ticket className="w-8 h-8 text-primary-600" />}
              title="Easy Trading"
              description="Buy and sell tickets with just a few clicks. Our platform makes trading simple and efficient."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-primary-600" />}
              title="Secure Transactions"
              description="All transactions are protected. We ensure your money and tickets are safe."
            />
            <FeatureCard
              icon={<RefreshCw className="w-8 h-8 text-primary-600" />}
              title="Instant Transfer"
              description="Get your tickets instantly after purchase. No waiting, no delays."
            />
          </div>
        </div>
      </section>

      {/* Popular Events Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Events</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <EventCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
    <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
  
  const EventCard = () => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <img
        src="/api/placeholder/400/200"
        alt="Event"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">Event Title</h3>
        <p className="text-gray-600 text-sm mb-4">Location • Date</p>
        <div className="flex items-center justify-between">
          <span className="text-primary-600 font-semibold">From $99</span>
          <button className="text-sm bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            View Tickets
          </button>
        </div>
      </div>
    </div>
  );