import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Users, LayoutDashboard, Calendar } from 'lucide-react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menu = [
    { label: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { label: 'Users', path: '/users', icon: <Users size={20} /> },
    { label: 'Calendar', path: '/calendar', icon: <Calendar/> },
  ];

  return (
    <div
      className={`h-screen bg-[#0f172a] text-white shadow-md transition-all duration-300 ease-in-out
      ${collapsed ? 'w-16' : 'w-60'} flex flex-col`}
    >
      {/* Top Logo and Toggle */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
        {!collapsed && (
          <h1 className="text-lg font-semibold tracking-wide text-blue-400">EventDesk</h1>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu List */}
     <ul className="flex-1 mt-4 space-y-2 list-none p-0">
  {menu.map((item) => {
    const isActive = location.pathname === item.path;
    return (
      <li key={item.path}>
        <Link
          to={item.path}
          className={`flex items-center gap-4 px-4 py-2 rounded-lg mx-2
            transition-colors duration-200
            ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
        >
          <div className="min-w-[20px]">{item.icon}</div>
          {!collapsed && <span className="whitespace-nowrap">{item.label}</span>}
        </Link>
      </li>
    );
  })}
</ul>

    </div>
  );
};

export default Sidebar;
