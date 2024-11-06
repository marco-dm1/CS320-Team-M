import React, { useState } from 'react';
import { BarChart3, Ticket, ArrowUpDown, Users, Bell, Search, Filter, MoreVertical } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const mockChartData = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
];

const mockTickets = [
  { id: 1, event: 'Taylor Swift Concert', date: '2024-12-15', price: 350, status: 'For Sale' },
  { id: 2, event: 'NBA Finals Game 1', date: '2024-06-04', price: 275, status: 'Pending' },
  { id: 3, event: 'Coachella 2024', date: '2024-04-12', price: 420, status: 'Sold' },
  { id: 4, event: 'Ed Sheeran Tour', date: '2024-08-20', price: 150, status: 'For Sale' },
];

const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
    {children}
  </div>
);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white min-h-screen border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <Ticket className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-semibold">TicketTrading</span>
          </div>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center w-full gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                activeTab === 'overview' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="h-4 w-4" />
              <span>Overview</span>
            </button>

            <button
              onClick={() => setActiveTab('tickets')}
              className={`flex items-center w-full gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                activeTab === 'tickets' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Ticket className="h-4 w-4" />
              <span>My Tickets</span>
            </button>

            <button
              onClick={() => setActiveTab('transactions')}
              className={`flex items-center w-full gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                activeTab === 'transactions' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <ArrowUpDown className="h-4 w-4" />
              <span>Transactions</span>
            </button>

            <button
              onClick={() => setActiveTab('network')}
              className={`flex items-center w-full gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                activeTab === 'network' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Network</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                JD
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-8">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <Card>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Active Listings</h3>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-2xl font-bold">12</div>
                <p className="text-sm text-green-500">+2.5% from last month</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-2xl font-bold">$4,320</div>
                <p className="text-sm text-green-500">+15.3% from last month</p>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-medium text-gray-500">Success Rate</h3>
                  <MoreVertical className="h-5 w-5 text-gray-400" />
                </div>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-sm text-green-500">+1.2% from last month</p>
              </div>
            </Card>
          </div>

          {/* Chart */}
          <Card className="mb-8">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>

          {/* Recent Tickets */}
          <Card>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Tickets</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-sm text-gray-500">
                      <th className="pb-4">Event</th>
                      <th className="pb-4">Date</th>
                      <th className="pb-4">Price</th>
                      <th className="pb-4">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockTickets.map((ticket) => (
                      <tr key={ticket.id} className="border-t border-gray-100">
                        <td className="py-4">{ticket.event}</td>
                        <td className="py-4">{ticket.date}</td>
                        <td className="py-4">${ticket.price}</td>
                        <td className="py-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            ticket.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                            ticket.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {ticket.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;