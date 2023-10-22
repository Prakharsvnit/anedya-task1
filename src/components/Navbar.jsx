import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isUserLoggedIn");
    navigate("/");
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:flex">
            <NavLink
              to="/dashboard1"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              DASHBOARD1
            </NavLink>
            <NavLink
              to="/dashboard2"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              DASHBOARD2
            </NavLink>
            <NavLink
              to="/dashboard3"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              activeClassName="text-white"
            >
              DASHBOARD3
            </NavLink>
          </div>
          <div className="flex">
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
