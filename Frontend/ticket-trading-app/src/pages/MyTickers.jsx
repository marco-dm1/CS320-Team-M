import { useState } from 'react';
import {
  BarChart3,
  Calendar,
  DollarSign,
  Ticket,
  Home,
  Settings,
  LogOut,
  Menu,
  X,
  Tag,
  AlertCircle,
  ShoppingCart,
  TicketCheck,
  Wallet,
  ArrowLeftRight
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
            {isSidebarOpen && <span className="text-xl font-semibold">Ticket Trader</span>}
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {[
                { icon: <Home size={20} />, label: 'Overview', active: false },
                { icon: <Ticket size={20} />, label: 'My Tickets', active: true },
                { icon: <Tag size={20} />, label: 'Listings', active: false },
                { icon: <ShoppingCart size={20} />, label: 'Orders', active: false },
                { icon: <Calendar size={20} />, label: 'Events', active: false },
                { icon: <AlertCircle size={20} />, label: 'Support', active: false },
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
            <h1 className="text-2xl font-semibold text-gray-900">My Tickets</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors">
                Create Listing
              </button>
              <button className="px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                Download Report
              </button>
            </div>
          </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-4">Sales Overview</h3>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded-lg">
              <BarChart3 className="w-10 h-10 text-gray-400" />
            </div>
          </div>

          {/* Total Annual Revenue */}
          <div className="bg-white p-6 rounded-xl flex flex-col shadow-md border border-gray-200">
            {/* Header Section */}
            <div className="flex items-center justify-center mb-4">
              <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                <p className="ml-4 text-xl font-semibold text-gray-900">Annual Revenues</p>
              </div>
            </div>

            {/* Revenue Comparison */}
            <div className="grid grid-cols-2 divide-x divide-gray-200 text-center">
              {/* Previous Year Earnings */}
              <div className="pr-4">
                <p className="text-2xl font-bold text-gray-900">$5,800</p>
                <p className="text-sm text-gray-500 mt-1">Previous Year</p>
              </div>
              {/* Current Year Earnings */}
              <div className="pl-4">
                <p className="text-2xl font-bold text-gray-900">$1,826</p>
                <p className="text-sm text-gray-500 mt-1">Current Year</p>
              </div>
            </div>
                     
            {/* Growth Info */}
            <div className='mb-4'>
              <p className="text-xs text-primary-600 text-center mt-4">+18% in comparison to previous year</p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Header Section */}
            <div className="flex items-center justify-center mb-6">
              <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">
                <p className="ml-4 text-xl font-semibold text-gray-900">Total Tickets Sold</p>
              </div>
            </div>

            {/* Section in regards to number of tickets sold last year vs this year */}
            <div className="grid grid-cols-2 divide-x divide-gray-200 text-center">

              {/* Previous Year Earnings */}
              <div className="pr-4">
                <div className="flex justify-center items-center space-x-2">
                  {/* Ticket Icon */}
                  <TicketCheck size={18} className="text-gray-500" />
                  <p className="text-2xl font-bold text-gray-900">60</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Previous Year</p>
              </div>

              {/* Current Year Earnings */}
              <div className="pl-4">
                 <div className="flex justify-center items-center space-x-2">
                  {/* Ticket Icon */}
                  <TicketCheck size={18} className="text-gray-500" />
                  <p className="text-2xl font-bold text-gray-900">14</p>
                </div>
                <p className="text-sm text-gray-500 mt-1">Current Year</p>
              </div>
            </div>

            {/* Growth Info */}
            
            <p className="text-xs text-primary-600 text-center mt-4 mb-4">+7% compared to previous year</p>
          </div>
        </div>


          {/* Legend and Grid for Current Tickets */}
          <div className="space-y-6">
            {/* Legend for Current Tickets */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Current Tickets</h2>
              <ul className="space-y-2 text-sm text-gray-600">

                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2">
                    <Wallet size={12} />
                  </div>
                  <span>Estimated potential revenue from active tickets.</span>
                </li>

                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2">
                    <Ticket size={12} />
                  </div>
                  <span>Circulating tickets currently in possession.</span>
                </li>

                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2"> 
                    <Ticket size={12} />
                  </div>
                  <span>Non-circulating tickets currently in possession.</span>
                </li>

              </ul>
            </div>

            {/* Grid for Current Tickets */}
            <div className="flex justify-center gap-6">
              {[
                { title: "Estimated Potential Revenue for Tickets in Market Circulation", value: "$2,381", icon: <Wallet />, change: "+20% this month" },
                { title: "Tickets currently in Market Circulation", value: "24", icon: <Ticket />, change: "+3 tickets added into circulation this week" },
                { title: "Tickets currently not in Market Circulation", value: "3", icon: <Ticket />, change: "+1 ticket added this week"}
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-all border border-gray-200 flex-1 max-w-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">{stat.icon}</div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
                  <p className="text-xs text-primary-600 mt-2">{stat.change}</p>
                </div>
              ))}
            </div>


          {/* Legend and Grid for Traded-Off Tickets */}
          <div className="space-y-6 mt-8">
            {/* Legend for Traded-Off Tickets */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Traded-Off Tickets</h2>
              <ul className="space-y-2 text-sm text-gray-600">

                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2">
                    <Wallet size={12} />
                  </div>
                  <span>Total revenue from traded-off tickets.</span>
                </li>

                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2">
                    <TicketCheck size={12} />
                  </div>
                  <span>Total tickets that have been traded off.</span>
                </li>
  
                <li className="flex items-center">
                  <div className="w-4 h-4 bg-primary-50 text-primary-600 flex items-center justify-center rounded-lg mr-2">
                    <ArrowLeftRight size={12} />
                  </div>
                  <span>Tickets awaiting transactional approval.</span>
                </li>

              </ul>
            </div>

            {/* Grid for Traded-Off Tickets */}
            <div className="flex justify-center gap-6">
              {[
                { title: "Total revenue from Traded Tickets", value: "$1,826", icon: <Wallet />, change: "+59% this month" },
                { title: "Traded-Off Tickets", value: "14", icon: <TicketCheck />, change: "+3 this week" },
                { title: "Tickets awatiing Transactional Approval", value: "3", icon: <ArrowLeftRight />, change: "1-2 business days for tickets to transfer"}
              ].map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl hover:shadow-md transition-all border border-gray-200 flex-1 max-w-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary-50 text-primary-600 rounded-lg">{stat.icon}</div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500 mt-1">{stat.title}</p>
                  <p className="text-xs text-primary-600 mt-2">{stat.change}</p>
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