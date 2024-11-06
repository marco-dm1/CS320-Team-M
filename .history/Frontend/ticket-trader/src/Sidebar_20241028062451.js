import React, { useState, useEffect } from 'react';
import { 
  Ticket, 
  TrendingUp, 
  CreditCard, 
  Calendar, 
  Settings, 
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('tickets');

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileMenuOpen]);

  const navigationItems = [
    { id: 'tickets', icon: Ticket, label: 'My Tickets', path: '/tickets' },
    { id: 'analytics', icon: TrendingUp, label: 'Analytics', path: '/analytics' },
    { id: 'payments', icon: CreditCard, label: 'Payments', path: '/payments' },
    { id: 'calendar', icon: Calendar, label: 'Calendar', path: '/calendar' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:relative left-0 top-0 z-50
          h-full bg-white border-r border-gray-200
          transition-all duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
      >
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-4 border-b">
          <Link 
            to="/" 
            className={`flex items-center space-x-2 ${isCollapsed ? 'hidden' : 'block'}`}
          >
            <span className="text-xl font-bold text-primary">TicketTrading</span>
          </Link>
          
          {/* Collapse Button - Desktop Only */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-100 hidden lg:block"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-gray-500" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => {
                setActiveItem(item.id);
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(false);
                }
              }}
              className={`
                flex items-center px-3 py-2 rounded-lg
                transition-colors duration-200
                ${activeItem === item.id 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
                }
                ${isCollapsed ? 'justify-center' : 'justify-start'}
              `}
            >
              <item.icon className={`h-5 w-5 ${!isCollapsed && 'mr-3'}`} />
              {!isCollapsed && (
                <span className="font-medium">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="absolute bottom-0 w-full p-4 border-t">
          <button
            onClick={() => {/* Add logout logic */}}
            className={`
              flex items-center w-full px-3 py-2 rounded-lg
              text-gray-600 hover:bg-gray-100 transition-colors
              ${isCollapsed ? 'justify-center' : 'justify-start'}
            `}
          >
            <LogOut className={`h-5 w-5 ${!isCollapsed && 'mr-3'}`} />
            {!isCollapsed && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};