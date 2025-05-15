import React from 'react';
import { Ambulance, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Ambulance size={24} className="text-white" />
          <h1 className="text-xl font-bold">Rural Ambulance Tracker</h1>
        </div>
        <button className="p-2 rounded-md hover:bg-red-700 transition-colors">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;