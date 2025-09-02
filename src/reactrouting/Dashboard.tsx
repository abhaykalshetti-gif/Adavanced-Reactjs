import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
  return (
  <div className="p-6 bg-gray-50 min-h-screen">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">📊 Dashboard</h1>

  <nav className="flex gap-4 mb-6">
    <Link
      to="/reactrouter/dashboard/profile"
      className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
    >
      Profile
    </Link>
    <Link
      to="/reactrouter/dashboard/settings"
      className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
    >
      Settings
    </Link>
  </nav>

  <hr className="mb-6 border-gray-300" />

  <div className="bg-white shadow rounded-lg p-4">
    <Outlet />
  </div>
</div>

  );
};

export default Dashboard;
