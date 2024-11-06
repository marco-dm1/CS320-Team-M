import React from 'react';
import {
  BarChart3,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  Activity
} from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  // Sample data for the stats
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: <DollarSign className="w-4 h-4" />,
      trend: "up"
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+15.2%",
      icon: <Users className="w-4 h-4" />,
      trend: "up"
    },
    {
      title: "Events Today",
      value: "12",
      change: "-2.3%",
      icon: <Calendar className="w-4 h-4" />,
      trend: "down"
    },
    {
      title: "Avg. Ticket Price",
      value: "$85.50",
      change: "+4.5%",
      icon: <TrendingUp className="w-4 h-4" />,
      trend: "up"
    }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
          Download Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <span className="p-2 bg-gray-100 rounded-lg">
                  {stat.icon}
                </span>
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600 mt-1">{stat.title}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-medium">Revenue Overview</h3>
          </div>
          <div className="p-6">
            <div className="h-60 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart3 className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-4 border-b border-gray-100">
            <h3 className="text-lg font-medium">Activity Feed</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 bg-gray-100 rounded-full">
                    <Activity className="w-4 h-4 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New ticket sale</p>
                    <p className="text-xs text-gray-600">2 minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;