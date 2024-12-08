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

const Orders = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [orders] = useState([
    { id: "425483", date: "10/13/2024", seller: "Wade Warren", email: "wadewarren@gmail.com", price: "$926", status: "Cancelled" },
    { id: "425484", date: "07/10/2024", seller: "Michael Scott", email: "michaelscott@gmail.com", price: "$589", status: "Completed" },
    { id: "425485", date: "10/29/2024", seller: "Sara Fisher", email: "sarafisher@gmail.com", price: "$228", status: "Pending" },
    { id: "425486", date: "11/30/2024", seller: "Albert Flores", email: "albertflores@gmail.com", price: "$378", status: "Completed" },
    { id: "425487", date: "06/30/2024", seller: "Ronald Richards", email: "ronaldrichards@gmail.com", price: "$407", status: "Cancelled" },
    { id: "425488", date: "08/26/2024", seller: "Pam Beesly", email: "pambeesly@gmail.com", price: "$327", status: "Pending" },
    { id: "425489", date: "05/07/2024", seller: "John Seana", email: "johnseana@gmail.com", price: "$614", status: "Completed" },
    { id: "425490", date: "07/23/2024", seller: "Pam Beesly", email: "pambeesly@gmail.com", price: "$308", status: "Completed" },
    { id: "425491", date: "10/25/2024", seller: "Jenny Wilson", email: "jennywilson@gmail.com", price: "$600", status: "Completed" },
    { id: "425492", date: "08/19/2024", seller: "Ronald Richards", email: "ronaldrichards@gmail.com", price: "$260", status: "Pending" },
    { id: "425493", date: "07/30/2024", seller: "Kristin Watson", email: "kristinwatson@gmail.com", price: "$874", status: "Cancelled" },
    { id: "425494", date: "08/25/2024", seller: "Wade Warren", email: "wadewarren@gmail.com", price: "$892", status: "Completed" },
    { id: "425495", date: "12/30/2024", seller: "Sara Fendi", email: "sarafisher@gmail.com", price: "$548", status: "Cancelled" },
    { id: "425496", date: "11/23/2024", seller: "Jim Halpert", email: "jimhalpert@gmail.com", price: "$478", status: "Completed" },
    { id: "425497", date: "06/17/2024", seller: "Kathryn Murphy", email: "kathrynmurphy@gmail.com", price: "$341", status: "Pending" },
    { id: "425498", date: "09/06/2024", seller: "Kristin Watson", email: "kristinwatson@gmail.com", price: "$888", status: "Pending" },
    { id: "425499", date: "11/10/2024", seller: "Jenny Wilson", email: "jennywilson@gmail.com", price: "$510", status: "Completed" },
    { id: "425500", date: "09/08/2024", seller: "Sara Fisher", email: "sarafisher@gmail.com", price: "$670", status: "Pending" },
    { id: "425501", date: "06/23/2024", seller: "Ronald Richards", email: "ronaldrichards@gmail.com", price: "$303", status: "Cancelled" },
    { id: "425502", date: "01/09/2024", seller: "Jenny Wilson", email: "jennywilson@gmail.com", price: "$932", status: "Completed" }
]);

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
                { icon: <Ticket size={20} />, label: 'My Tickets', active: false },
                { icon: <Tag size={20} />, label: 'Listings', active: false },
                { icon: <ShoppingCart size={20} />, label: 'Orders', active: true },
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
            <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors">
                Create Listing
              </button>
              <button className="px-4 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                Download Report
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-4 justify-between">
            {/* Category Filter */}
            <select
              className="flex-1 appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="">Sort By</option>
              <option value="Name-A">Name Alphabetically (A-Z)</option>
              <option value="Name-UA">Name Alphabetically (Z-A)</option>
              <option value="Order No.">Order No.</option>
            </select>

            {/* Status Filter */}
            <select
              className="flex-1 appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="">Status</option>
              <option value="pending">Pending</option>
              <option value="delivered">Delivered</option>
              <option value="canceled">Canceled</option>
            </select>

            {/* Price Filter */}
            <select
              className="flex-1 appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="">Price</option>
              <option value="0-100">$0 - $100</option>
              <option value="100-500">$100 - $500</option>
              <option value="500+">$500+</option>
            </select>

            {/* Date Filter */}
            <select
              className="flex-1 appearance-none pl-3 pr-8 py-2 border border-gray-300 rounded-lg text-sm focus:ring-primary-500 focus:border-primary-500 bg-white"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'%3E%3Cpath strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' /%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="">Date</option>
              <option value="last-7-days">Last 7 Days</option>
              <option value="last-30-days">Last 30 Days</option>
              <option value="older">Older</option>
            </select>
          </div>




          {/* Orders Table */}
          <div className="overflow-auto border border-gray-200 rounded-lg bg-white">
          <table className="w-full text-sm text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-center">Order No.</th>
                <th className="px-6 py-3 text-center">Date</th>
                <th className="px-6 py-3 text-center">Seller Name</th>
                <th className="px-6 py-3 text-center">Email</th>
                <th className="px-6 py-3 text-center">Price</th>
                <th className="px-6 py-3 text-center">Status</th>
                <th className="px-6 py-3 text-center">Ticket Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="px-6 py-4 text-center">{order.id}</td>
                  <td className="px-6 py-4 text-center">{order.date}</td>
                  <td className="px-6 py-4 text-center">{order.seller}</td>
                  <td className="px-6 py-4 text-center">{order.email}</td>
                  <td className="px-6 py-4 text-center">{order.price}</td>
                  <td className="px-6 py-4 text-center">
                    <span
                      className={`px-2 py-1 text-xs rounded-lg ${
                        order.status === 'Pending'
                          ? "bg-yellow-100 text-yellow-600"
                          : order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Cancelled"
                          ? "bg-red-100 text-red-600"
                          : ""
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-blue-600 hover:underline">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Orders;