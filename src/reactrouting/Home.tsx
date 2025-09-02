import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const Home: React.FC = () => {
  const { role, logout } = useAuth();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">🏠 Home Page</h1>

  <nav className="flex gap-4 mb-6">
    <Link
      to="/reactrouter"
      className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
    >
      Home
    </Link>
    <Link
      to="/reactrouter/dashboard"
      className="px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
    >
      Dashboard
    </Link>
    <Link
      to="/reactrouter/admin"
      className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600 transition"
    >
      Admin
    </Link>

    {role ? (
      <button
        onClick={logout}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
        Logout
      </button>
    ) : (
      <Link
        to="/reactrouter/login"
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition"
      >
        Login
      </Link>
    )}
  </nav>

  <p className="text-gray-700 font-medium">
    Current Role:{" "}
    <span className="text-indigo-600">{role ?? "Guest"}</span>
  </p>
</div>

  );
};

export default Home;
