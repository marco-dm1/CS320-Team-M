import React, { useState } from 'react';
import { 
  Ticket, Search, Bell, Settings, LogOut, User, ChevronDown, 
  Filter, TrendingUp, CreditCard, Calendar, DollarSign,
  LineChart, Menu, ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Sidebar } from 'Sidebar';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('buying');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const stats = [
    { 
      title: "Active Listings", 
      value: "12", 
      trend: "+2.5%",
      isUp: true 
    },
    { 
      title: "Total Sales", 
      value: "$2,451", 
      trend: "+18.2%",
      isUp: true 
    },
    { 
      title: "Saved Searches", 
      value: "8", 
      trend: "-3.1%",
      isUp: false 
    },
    { 
      title: "Success Rate", 
      value: "94%", 
      trend: "+5.4%",
      isUp: true 
    }
  ];

  const recentTickets = [
    {
      event: "Taylor Swift | The Eras Tour",
      date: "Aug 15, 2024",
      location: "MetLife Stadium",
      price: "$350",
      status: "Listed",
      type: "selling"
    },
    {
      event: "NBA Finals 2025",
      date: "June 4, 2025",
      location: "Madison Square Garden",
      price: "$275",
      status: "Pending",
      type: "buying"
    },
    {
      event: "Coachella Music Festival",
      date: "Apr 12, 2024",
      location: "Empire Polo Club",
      price: "$450",
      status: "Completed",
      type: "selling"
    }
  ];

  const notifications = [
    {
      title: "New offer received",
      message: "You have a new offer for Taylor Swift tickets",
      time: "5 mins ago",
      type: "offer"
    },
    {
      title: "Price alert",
      message: "NBA Finals tickets price dropped by 15%",
      time: "2 hours ago",
      type: "alert"
    }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-6 h-6" />
              </button>
              <div className="relative hidden sm:block">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search events..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-64 focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Filter className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex items-center gap-6">
              <button className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                  2
                </span>
              </button>
              <div className="flex items-center gap-2">
                <img
                  src="/api/placeholder/32/32"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium hidden sm:block">John Doe</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500">{stat.title}</h3>
                    <span className={`flex items-center text-sm ${
                      stat.isUp ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {stat.isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Tickets Table Section */}
            <div className="bg-white rounded-xl shadow-sm mb-8">
              <div className="border-b">
                <div className="flex p-4 overflow-x-auto">
                  {['buying', 'selling', 'watchlist'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 font-medium rounded-lg transition-colors whitespace-nowrap
                        ${activeTab === tab 
                          ? 'bg-primary text-white' 
                          : 'text-gray-600 hover:bg-gray-50'
                        }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 overflow-x-auto">
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="pb-4">Event</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4">Location</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Status</th>
                      <th className="pb-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentTickets
                      .filter(ticket => 
                        activeTab === 'watchlist' || ticket.type === activeTab
                      )
                      .map((ticket, index) => (
                      <tr key={index} className="border-t">
                        <td className="py-4">
                          <div>
                            <p className="font-medium">{ticket.event}</p>
                            <p className="text-sm text-gray-500">{ticket.type}</p>
                          </div>
                        </td>
                        <td className="py-4">{ticket.date}</td>
                        <td className="py-4">{ticket.location}</td>
                        <td className="py-4 font-medium">{ticket.price}</td>
                        <td className="py-4">
                          <span className={`px-3 py-1 rounded-full text-sm
                            ${ticket.status === 'Completed' ? 'bg-green-100 text-green-600' :
                              ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                              'bg-blue-100 text-blue-600'
                            }`}>
                            {ticket.status}
                          </span>
                        </td>
                        <td className="py-4">
                          <button className="text-primary hover:text-primary/80">
                            View Details
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Notifications */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Recent Notifications</h2>
                <div className="space-y-6">
                  {notifications.map((notification, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg 
                        ${notification.type === 'offer' ? 'bg-green-100' : 'bg-blue-100'}`}>
                        {notification.type === 'offer' ? (
                          <DollarSign className="w-5 h-5 text-green-600" />
                        ) : (
                          <Bell className="w-5 h-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-gray-600">{notification.message}</p>
                        <p className="text-sm text-gray-400 mt-1">{notification.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Quick Actions</h2>
                <div className="space-y-4">
                  <button className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary/90 transition-colors">
                    List New Ticket
                  </button>
                  <button className="w-full border border-primary text-primary p-3 rounded-lg hover:bg-primary/10 transition-colors">
                    Search Events
                  </button>
                  <button className="w-full border border-gray-300 text-gray-600 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;