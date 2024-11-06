import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity,
  Package,
  Ticket,
  Star,
  MessageCircle,
  Wallet,
  HeartHandshake,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const recentActivities = [
    {
      type: 'sale',
      event: 'Taylor Swift | Eras Tour',
      price: '$450',
      time: '2 minutes ago',
      icon: <DollarSign size={16} />
    },
    {
      type: 'listing',
      event: 'NBA Finals 2024',
      price: '$850',
      time: '15 minutes ago',
      icon: <Ticket size={16} />
    },
    {
      type: 'review',
      event: 'Coldplay World Tour',
      rating: '5',
      time: '1 hour ago',
      icon: <Star size={16} />
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-100 transition-all duration-300 ease-in-out`}>
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            {isSidebarOpen && <span className="text-xl font-semibold">Ticketly</span>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <div className="mb-4">
              {isSidebarOpen && <p className="px-3 text-xs font-semibold text-gray-400 uppercase">Marketplace</p>}
              <ul className="mt-2 space-y-2">
                {[
                  { icon: <Package size={20} />, label: 'My Tickets', active: false },
                  { icon: <Ticket size={20} />, label: 'Sell Tickets', active: false },
                  { icon: <Calendar size={20} />, label: 'Events', active: false },
                  { icon: <Star size={20} />, label: 'Watchlist', active: false },
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      item.active ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                    }`}>
                      {item.icon}
                      {isSidebarOpen && <span>{item.label}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              {isSidebarOpen && <p className="px-3 text-xs font-semibold text-gray-400 uppercase">Account</p>}
              <ul className="mt-2 space-y-2">
                {[
                  { icon: <BarChart3 size={20} />, label: 'Dashboard', active: true },
                  { icon: <Wallet size={20} />, label: 'Transactions', active: false },
                  { icon: <MessageCircle size={20} />, label: 'Messages', active: false },
                  { icon: <HeartHandshake size={20} />, label: 'Reviews', active: false },
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#" className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      item.active ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                    }`}>
                      {item.icon}
                      {isSidebarOpen && <span>{item.label}</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-100">
            <ul className="space-y-2">
              {[
                { icon: <Settings size={20} />, label: 'Settings' },
                { icon: <HelpCircle size={20} />, label: 'Help Center' },
                { icon: <LogOut size={20} />, label: 'Logout' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    {item.icon}
                    {isSidebarOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Seller Dashboard</h1>
            <button className="px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
              Download Sales Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Sales", value: "$12,431", change: "+12.5%", icon: <DollarSign /> },
              { title: "Active Listings", value: "24", change: "+3", icon: <Ticket /> },
              { title: "Seller Rating", value: "4.9", change: "+0.2", icon: <Star /> },
              { title: "Completion Rate", value: "98.5%", change: "+1.2%", icon: <TrendingUp /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                    {stat.icon}
                  </div>
                  <span className="text-green-500 text-sm">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
              </div>
            ))}
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">Sales Overview</h3>
                <select className="text-sm border rounded-lg px-2 py-1">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 90 days</option>
                </select>
              </div>
              <div className="h-72 flex items-center justify-center bg-gray-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-6">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-full">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{activity.event}</p>
                        {activity.price && <span className="text-sm font-semibold text-green-500">{activity.price}</span>}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {activity.type === 'review' ? `${activity.rating}/5 rating` : activity.type}
                        <span className="mx-1">•</span>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;