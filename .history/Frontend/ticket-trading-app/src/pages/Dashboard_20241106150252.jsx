import React, { useState } from 'react';
import {
  BarChart3,
  Search,
  Calendar,
  Ticket,
  Heart,
  History,
  Wallet,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  DollarSign,
  Clock,
  Tag
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userType, setUserType] = useState('buyer'); // Toggle between 'buyer' and 'seller'

  const recentActivities = userType === 'buyer' ? [
    {
      type: 'purchase',
      event: 'Taylor Swift | Eras Tour',
      price: '$450',
      time: '2 days ago',
      status: 'Confirmed',
      icon: <Ticket size={16} />
    },
    {
      type: 'watchlist',
      event: 'NBA Finals 2024',
      price: '$850',
      time: '1 day ago',
      status: 'Price Drop Alert',
      icon: <Heart size={16} />
    },
    {
      type: 'search',
      event: 'Coldplay World Tour',
      time: '3 hours ago',
      status: 'New listings available',
      icon: <Search size={16} />
    }
  ] : [
    {
      type: 'sale',
      event: 'Ed Sheeran Tour',
      price: '$350',
      time: '1 hour ago',
      status: 'Completed',
      icon: <DollarSign size={16} />
    },
    {
      type: 'listing',
      event: 'Formula 1 Grand Prix',
      price: '$1,200',
      time: '5 hours ago',
      status: '2 interested buyers',
      icon: <Tag size={16} />
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Streamlined Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-100 transition-all duration-300 ease-in-out`}>
        <div className="h-full flex flex-col">
          {/* Logo Area */}
          <div className="p-6 flex items-center justify-between border-b border-gray-100">
            {isSidebarOpen && <span className="text-xl font-semibold">Ticketly</span>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Essential Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {[
                { icon: <Search size={20} />, label: 'Discover', path: '/discover', description: 'Find and buy tickets' },
                { icon: <Calendar size={20} />, label: 'Events', path: '/events', description: 'Browse upcoming events' },
                { icon: <Heart size={20} />, label: 'Watchlist', path: '/watchlist', description: 'Saved events and alerts' },
                { icon: <Ticket size={20} />, label: 'My Tickets', path: '/tickets', description: 'Manage bought & listed tickets' },
                { icon: <History size={20} />, label: 'History', path: '/history', description: 'Past transactions' },
                { icon: <Wallet size={20} />, label: 'Wallet', path: '/wallet', description: 'Payments and payouts' },
              ].map((item, index) => (
                <li key={index} title={item.description}>
                  <a
                    href={item.path}
                    className="flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-gray-50"
                  >
                    {item.icon}
                    {isSidebarOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support & Settings */}
          <div className="p-4 border-t border-gray-100">
            <ul className="space-y-2">
              {[
                { icon: <Settings size={20} />, label: 'Settings', path: '/settings' },
                { icon: <HelpCircle size={20} />, label: 'Help', path: '/help' },
                { icon: <LogOut size={20} />, label: 'Logout', path: '/logout' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.path}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
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
          {/* Header with Context Switch */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">My Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening with your tickets.</p>
            </div>
            <select 
              className="px-4 py-2 border rounded-lg"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="buyer">Buying Activity</option>
              <option value="seller">Selling Activity</option>
            </select>
          </div>

          {/* Context-Aware Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {userType === 'buyer' ? [
              { title: "Upcoming Events", value: "3", icon: <Calendar />, description: "Events you have tickets for" },
              { title: "Watch Alerts", value: "5", icon: <Heart />, description: "Price drops & availability" },
              { title: "Available Credit", value: "$500", icon: <Wallet />, description: "Store credit & refunds" },
              { title: "Saved Searches", value: "8", icon: <Search />, description: "Active search alerts" }
            ] : [
              { title: "Active Listings", value: "12", icon: <Ticket />, description: "Currently listed tickets" },
              { title: "Pending Sales", value: "3", icon: <Clock />, description: "Awaiting completion" },
              { title: "Total Revenue", value: "$2,450", icon: <DollarSign />, description: "Last 30 days" },
              { title: "Avg. Sale Time", value: "2.5 days", icon: <BarChart3 />, description: "Time to sell" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                    {stat.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
                <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Quick Actions */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-6">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {userType === 'buyer' ? [
                  { label: "Find Tickets", icon: <Search />, action: "Browse events" },
                  { label: "View Watchlist", icon: <Heart />, action: "Check price updates" },
                  { label: "Transfer Tickets", icon: <Ticket />, action: "Send to friends" },
                  { label: "Add Funds", icon: <Wallet />, action: "Top up wallet" }
                ] : [
                  { label: "List Tickets", icon: <Tag />, action: "Create new listing" },
                  { label: "View Orders", icon: <Clock />, action: "Check pending sales" },
                  { label: "Transfer Funds", icon: <Wallet />, action: "Withdraw earnings" },
                  { label: "Analytics", icon: <BarChart3 />, action: "View insights" }
                ].map((action, index) => (
                  <button key={index} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg mr-3">
                      {action.icon}
                    </div>
                    <div className="text-left">
                      <p className="font-medium">{action.label}</p>
                      <p className="text-sm text-gray-500">{action.action}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
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
                        {activity.status}
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