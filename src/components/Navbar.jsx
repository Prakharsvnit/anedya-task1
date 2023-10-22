import React from 'react';

const Navbar = () => {
 return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              DASHBOARD1
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              DASHBOARD2
            </button>
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              DASHBOARD3
            </button>
          </div>
          <div className="flex">
            <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
 );
};

export default Navbar;