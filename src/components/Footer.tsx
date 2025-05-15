import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          Rural Ambulance Tracking System
        </p>
        <p className="text-xs mt-1 text-gray-400">
          Saving lives through connectivity &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;