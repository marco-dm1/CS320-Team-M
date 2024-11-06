import React, { useState } from 'react';
import {
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity,
  Layout,
  Home,
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

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
            <ul className="space-y-2">
              {[
                { icon: <Home size={20} />, label: 'Home', active: false },
                { icon: <BarChart3 size={20} />, label: 'Dashboard', active: true },
                { icon: <Calendar size={20} />, label: 'Events', active: false },
                { icon: <Users size={20} />, label: 'Users', active: false },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      item.active ? 'bg-primary-50 text-primary-600' : 'hover:bg-gray-50'
                    }`}
                  >
                    {item.icon}
                    {isSidebarOpen && <span>{item.label}</span>}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-100">
            <ul className="space-y-2">
              {[
                { icon: <Settings size={20} />, label: 'Settings' },
                { icon: <LogOut size={20} />, label: 'Logout' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
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
          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
            <button className="px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
              Download Report
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Total Revenue", value: "$45,231", icon: <DollarSign /> },
              { title: "Active Users", value: "2,350", icon: <Users /> },
              { title: "Events Today", value: "12", icon: <Calendar /> },
              { title: "Avg. Price", value: "$85.50", icon: <TrendingUp /> }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                    {stat.icon}
                  </div>
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
              <h3 className="text-lg font-medium mb-4">Revenue Overview</h3>
              <div className="h-72 flex items-center justify-center bg-gray-50 rounded-lg">
                <BarChart3 className="w-8 h-8 text-gray-400" />
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white p-6 rounded-xl">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-full">
                      <Activity size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium">New ticket sale</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
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